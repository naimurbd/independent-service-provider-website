import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/full-food1.jpg'
import banner2 from '../../../images/full-food2.jpg'
import banner3 from '../../../images/full-food1.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100 "
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h1 className='primary'>HomeFoodi</h1>
                    <p> Celebrate Home Food Everyday</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h1>HomeFoodi</h1>
                    <p> Celebrate Home Food Everyday.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h1>HomeFoodi</h1>
                    <p>
                        Celebrate Home Food Everyday.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    );
};

export default Banner;