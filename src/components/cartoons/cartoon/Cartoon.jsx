import React from 'react';
import { Link } from 'react-router-dom';


const CartoonCard = ({ id, imageUrl, title, genre }) => {
    return (
        <Link to={`/preview/${id}`}>
            <div className="movie-card cursor-pointer w-[210px] hover:translate-y-[-10px] transition-all rounded-md flex-shrink-0 h-auto mt-[10px] ">
                <img
                    className="w-full h-full rounded-md"
                    src={imageUrl}
                    alt="card-image"
                />
                <div className="text flex flex-col mt-[5px] gap-0">
                    <span className="text-[16px] font-poppins font-medium text-white">
                        {title.length > 20 ? title.slice(0, 20) + '...' : title}
                    </span>
                    <span className="text-yellow text-[14px] font-poppins font-medium">
                        {genre}
                    </span>
                </div>
            </div>
        </Link>
    );
};

export default CartoonCard;
