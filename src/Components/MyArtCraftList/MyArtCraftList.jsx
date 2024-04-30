import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MyArtCraftCard from '../MyArtCraftCard/MyArtCraftCard';

const MyArtCraftList = () => {
  const loadedData = useLoaderData();
  const [data, setData] = useState(loadedData);

  return (
    <div className="mt-[100px]">
      <Helmet>
        <title>My Art Craft List</title>
      </Helmet>

      <div className="text-4xl lg:text-6xl font-bold p-2 lg:p-10 bg-green-500 text-white mb-20 h-[300px] flex justify-center items-center">
        <h2 className="animate__animated animate__fadeInLeft">
          My Art Craft List
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4 m-10">
        {data.map(item => (
          <MyArtCraftCard
            key={item.email}
            data={item}
            datas={data}
            setDatas={setData}
          />
        ))}
      </div>
    </div>
  );
};

export default MyArtCraftList;
