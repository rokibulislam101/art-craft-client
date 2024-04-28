import { Link } from 'react-router-dom';

const AvailableArtCraft = ({ data }) => {
  const {
    id,
    image,
    title,
    segment_name,
    description,
    status,
    area_sq_ft,
    location,
    facilities,
  } = data;
  return (
    <div>
      <div>
        <div
          className="flex flex-col md:flex-col lg:flex-row gap-5 md:p-5  bg-base rounded-4 shadow-2xl rounded-2xl p-3 hover:border-[2px] hover:border-green-500 transition-all overflow-hidden "
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="  rounded-2xl  w-[400px]">
            <img
              className="  rounded-2xl hover:scale-100 overflow-hidden  lg:w-[400px] h-full"
              src={image}
              alt=""
            />
          </div>
          <div className="space-y-5">
            <h1 className="mt-4 mb-2 text-xl font-bold">{title}</h1>
            <p>Segment type: {segment_name}</p>
            <hr />
            <p>Location: {location}</p>
            <hr />

            <p className="space-x-10 flex ">
              <span className="bg-gray-100 py-1 px-4 rounded-2xl">
                State: {status}
              </span>
              <span className="bg-gray-100 py-1 px-4 rounded-2xl">
                Area: {area_sq_ft}ft
              </span>
            </p>
            <hr />
            <div className="flex justify-between items-center">
              <Link to={`/data/${id}`}>
                <button className="btn btn-ghost border-2 bg-green-500 text-white mt-5">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableArtCraft;
