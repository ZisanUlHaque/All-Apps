import React from 'react';
import Bannar from '../../components/Bannar/Bannar';
import Apps from '../Apps/Apps';
import { useLoaderData } from 'react-router';


const Home = () => {

    const data = useLoaderData();

    return (
        <div>
            <Bannar></Bannar>
            <Apps data = {data}></Apps>
        </div>
    );
};

export default Home;