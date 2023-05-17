'use client'
import React from 'react';

const Home = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json()
    console.log('data', data)

    return (
        <div>
            Hell oworld
            <div>
                hi there
            </div>
        </div>
    );
};

export default Home;
