import { useLoaderData } from 'react-router-dom';
import AvailableArtCraft from '../AvailableArtCraft/AvailableArtCraft';
import Slider from '../Slider/Slider';
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
            className="text-center textile text-5xl mb-6 font-bold text-green-500"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Craft Items
          </h1>
          <p className="text-center" data-aos="fade-up" data-aos-delay="600">
            Craft item means any consumer commodity that is not an agricultural
            commodity or a perishable consumer commodity that is manufactured.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20 mx-10">
          {datas.map(data => (
            <AvailableArtCraft key={data.id} data={data}></AvailableArtCraft>
          ))}
        </div>
      </div>

      <ArtTextile></ArtTextile>
      
    </div>
  );
};

export default Home;
