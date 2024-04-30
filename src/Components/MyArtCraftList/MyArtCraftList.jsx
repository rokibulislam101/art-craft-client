import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MyArtCraftCard from '../MyArtCraftCard/MyArtCraftCard'; // Ensure this path is correct

const MyArtCraftList = () => {
  const datas = useLoaderData(); // Use data from loader

  return (
    <div className="mt-[100px]">
      <Helmet>
        <title>MyArtCraftList</title>
      </Helmet>
      <div className="text-4xl lg:text-6xl font-bold p-2 lg:p-10 bg-green-500 text-white mb-20 h-[300px] flex justify-center items-center">
        <h2 className="animate__animated animate__fadeInLeft">
          My Art Craft List
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4 m-10">
        {datas.map(data => (
          <MyArtCraftCard key={data.id} data={data}></MyArtCraftCard>
        ))}
      </div>
    </div>
  );
};

export default MyArtCraftList;
