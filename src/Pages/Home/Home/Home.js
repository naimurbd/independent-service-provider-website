import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services'

const Home = () => {
    return (
        <>
            <h1 className='text-center text-primary mt-3 mb-3'> Wellcome to My 'HomeFoodi' Family</h1>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </>
    );
};

export default Home;