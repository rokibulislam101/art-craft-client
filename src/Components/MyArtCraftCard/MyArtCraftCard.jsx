import { Link } from 'react-router-dom';

const MyArtCraftCard = ({ data }) => {
  const { _id, image, name, subcategory, status, rating, price } = data;

  return (
    <div className="m-2">
      <div
        className="flex flex-col md:flex-col lg:flex-row gap-5 md:p-5 bg-base rounded-4 shadow-2xl rounded-2xl p-3 hover:border-2 hover:border-green-500 transition-all overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="rounded-2xl md:w-[600px] h-[350px]">
          <img
            className="rounded-2xl hover:scale-100 overflow-hidden w-full h-full"
            src={image}
            alt=""
          />
        </div>
        <div className="justify-between items-center gap-3 w-full pr-4">
          <div className="space-y-5">
            <h3 className="mt-4 mb-2 text-2xl font-bold">{name}</h3>
            <p>
              <span className="font-bold">Subcategory:</span> {subcategory}
            </p>
            <hr />
            <p>
              <span className="font-bold">Stock Status:</span> {status}
            </p>
            <hr />
            <p className="space-x-10 flex">
              <span className="bg-gray-100 py-1 px-4 rounded-2xl">
                <span className="font-bold">Rating:</span> {rating}
              </span>
              <span className="bg-gray-100 py-1 px-4 rounded-2xl">
                <span className="font-bold">Price:</span> {price} TK
              </span>
            </p>
          </div>
          <div className="flex justify-between items-center">
            <Link to={`/data/${_id}`}>
              <button className="btn btn-ghost border-2 bg-green-500 text-white mt-5">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyArtCraftCard;