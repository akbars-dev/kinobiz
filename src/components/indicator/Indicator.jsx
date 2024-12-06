import React from 'react';
import { Link } from 'react-router-dom';

const Indicator = ({ title, link }) => {
  return (
    <div className="indicator mt-[100px] flex items-center justify-between">
      <h1 className="font-poppins text-white text-3xl uppercase font-bold">{title}</h1>
      <button className="h-[40px] w-[140px] middle:w-[210px] font-poppins uppercase font-medium rounded-md text-white px-[10px] py-[5px] bg-main">
        <Link className="text-[14px]" to={link}>
          Barchasi &gt;
        </Link>
      </button>
    </div>
  );
};

export default Indicator;
