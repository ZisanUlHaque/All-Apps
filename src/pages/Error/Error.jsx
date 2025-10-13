import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ErrorPage from '../ErrorPage/ErrorPage';
import Footer from '../../components/Footer/Footer';

const Error = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ErrorPage></ErrorPage>
            <Footer></Footer>
        </div>
    );
};

export default Error;