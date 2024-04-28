import { useLoaderData } from 'react-router-dom';
import AvailableArtCraft from '../AvailableArtCraft/AvailableArtCraft';
import Slider from '../Slider/Slider';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  const datas = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Home</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <Slider></Slider>

      <div>
        <div className=" p-10 my-20">
          <h1
            className="text-center textile text-5xl mb-6 font-bold "
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Art & Craft Store
          </h1>
          <p className="text-center" data-aos="fade-up" data-aos-delay="600">
            The Arts and Crafts movement, first flourishing in the British
            Isles, emphasized traditional craftsmanship and spread across
            Europe, America, and the British Empire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-20 mx-10">
          {datas.map(data => (
            <AvailableArtCraft
              key={data.id}
              data={data}
            ></AvailableArtCraft>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
