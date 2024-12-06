import React, { useEffect, useState } from 'react';
import { fetchFilm } from '../api';
import PreviewInfo from '../components/preview-info/PreviewInfo';
import { useParams } from 'react-router-dom';

function Preview() {
    const { id } = useParams();
    const [film, setFilm] = useState(null);
    const [loading, setLoading] = useState(true); // Initialize loading state

    const fetchData = async () => {
        setLoading(true); // Set loading to true before starting fetch
        try {
            const data = await fetchFilm(id);
            setFilm(data);
        } catch (error) {
            console.error('Error fetching film:', error);
        } finally {
            setLoading(false); // Ensure loading is false after fetch is complete
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]); // Use `id` as the dependency

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-[80px] font-bebas">Loading ...</h1>
            </div>
        );
    }

    if (!film) {
        return <p className="text-center text-gray-400">No film data available.</p>;
    }

    return (
        <div className='preview mt-[50px]'>
            <h1 className='font-poppins text-4xl font-bold'>{film.title}</h1>
            <PreviewInfo film={film} />

            <div className="player w-full mt-[70px] mb-[20px]">
                <iframe
                    className='w-full min-h-[250px] second:min-h-[660px]'
                    src={film.video}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default Preview;
