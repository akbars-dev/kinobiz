import React from 'react'
import Swiper from '../components/swiper/Swiper'
import Indicator from '../components/indicator/Indicator'
import Films from '../components/movies/Films'
import Cartoons from '../components/cartoons/Cartoons'

export default function Home() {
    return (
        <>
            <Swiper />
            <Indicator title="Kinolar" link="/movies" />
            <Films />

            <Indicator title="Multfilmlar" link="/cartoons" />
            <Cartoons />
        </>
    )
}
