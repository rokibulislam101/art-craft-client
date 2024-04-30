import { useLoaderData } from 'react-router-dom';
import AvailableArtCraft from '../AvailableArtCraft/AvailableArtCraft';
import Slider from '../Slider/Slider';
import Blogs from '../Blogs/Blogs';
import CategoryItem from '../CategoryItem/CategoryItem';
import ArtTextile from '../ArtTextile/ArtTextile';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const datas = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <Slider></Slider>

      <div>
        <div className=" p-10 my-20">
          <h1
            className="text-center textile text-4xl mb-6 font-bold text-green-500"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Craft Items
          </h1>
          <p className="text-center" data-aos="fade-up" data-aos-delay="600">
            Craft item means any consumer commodity that is not an agricultural
            commodity or a perishable consumer commodity that is manufactured.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20 mx-10">
          {datas.slice(0, 6).map(data => (
            <AvailableArtCraft key={data.id} data={data}></AvailableArtCraft>
          ))}
        </div>
      </div>

      <ArtTextile></ArtTextile>

      <div className="my-[80px]">
        <h1
          className="text-center textile text-4xl mb-6 font-bold text-green-500"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Art & Craft Categories
        </h1>
        <p className="text-center">
          Get Your Desired Items from Featured Category!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 my-20 mx-10 justify-center items-center">
          {datas.slice(0, 6).map(data => (
            <CategoryItem key={data.id} data={data}></CategoryItem>
          ))}
        </div>
      </div>

      <div className="my-[80px]">
        <h1
          className="text-center textile text-4xl mb-6 font-bold text-green-500"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Art & Craft Blogs
        </h1>
        <p className="text-center">
          Arts and crafts is a general term for creative activities that include
          decorative design and handicrafts.
        </p>
        <div className="sm:flex sm:col-wrap justify-around  m-10">
          {datas.slice(0, 3).map(data => (
            <Blogs key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
