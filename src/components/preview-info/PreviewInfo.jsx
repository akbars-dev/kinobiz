import React from 'react';

export default function PreviewInfo({ film }) {
    if (!film) {
        return <p>Loading...</p>; // Optional loading state
    }

    return (
        <div className="preview-info flex gap-[50px] mt-[30px]">
            <div className="flex items-start justify-start gap-8 flex-col md:flex-row">
                <div className="shadow-gray-900 rounded-md py-2 w-full md:w-fit flex flex-col justify-center items-center">
                    <img
                        src={film.poster || 'https://via.placeholder.com/150'}
                        alt={film.title || 'movie'}
                        className="flex items-center w-72 md:items-start rounded-md h-96 object-cover"
                    />
                </div>
                <div className="flex flex-col gap-5">
                    <table>
                        <tbody className="flex justify-start flex-col mt-8 gap-2">
                            <tr>
                                <td className="w-28 text-gray-400 font-semibold text-lg">Yil:</td>
                                <td className="bg-gray-800 rounded-md py-1 px-3 font-semibold hover:text-gray-300">
                                    <p>{film.year || 'N/A'}</p>
                                </td>
                            </tr>
                            <tr>
                                <td className="w-28 text-gray-400 font-semibold text-lg">Davlat:</td>
                                <td className="bg-gray-800 rounded-md py-1 px-3 font-semibold hover:text-gray-300">
                                    {film.country || 'N/A'}
                                </td>
                            </tr>
                            <tr>
                                <td className="w-28 text-gray-400 font-semibold text-lg">Janr:</td>
                                <td className="bg-gray-800 rounded-md py-1 px-3 font-semibold hover:text-gray-300">
                                    {film.genres || 'N/A'}
                                </td>
                            </tr>
                            <tr>
                                <td className="w-28 text-gray-400 font-semibold text-lg">Vaqt:</td>
                                <td className="bg-gray-800 rounded-md py-1 px-3 font-semibold">
                                    {film.duration || 'N/A'}
                                </td>
                            </tr>
                            <tr>
                                <td className="w-28 text-gray-400 font-semibold text-lg">Til:</td>
                                <td className="bg-gray-800 rounded-md py-1 px-3 font-semibold">
                                    {film.language || 'N/A'}
                                </td>
                            </tr>
                            <tr>
                                <td className="w-28 text-gray-400 font-semibold text-lg">Yosh:</td>
                                <td className="bg-gray-800 rounded-md py-1 px-3 font-semibold hover:text-gray-300">
                                    <p>{film.age || 'N/A'}+</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <p className="text-gray-300 text-sm max-w-2xl">{film.description || 'No description available.'}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
