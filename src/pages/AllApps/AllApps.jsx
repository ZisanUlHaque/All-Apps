import React from 'react';
import { useLoaderData } from 'react-router';
import AllAppData from '../AllAppData/AllAppData';

const AllApps = () => {
    const data = useLoaderData();

    return (
        <div>
            <AllAppData data={data}></AllAppData>
        </div>
    );
};

export default AllApps;