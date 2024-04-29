import { Link } from 'react-router-dom';

const CraftCard = ({ craft }) => {
  const { image, name, subcategory, status, rating, price, customization } = craft;


  return (
    <div className="m-2">
      <div
        className="flex flex-col md:flex-col lg:flex-row gap-5 md:p-5 bg-base rounded-4 shadow-2xl rounded-2xl p-3 hover:border-2 hover:border-green-500 transition-all overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="rounded-2xl md:w-[500px] h-[350px]">
          <img
            className="rounded-2xl hover:scale-100 overflow-hidden w-full h-full"
            src={image}
            alt=""
          />
        </div>
        <div className="sm:flex justify-between items-center gap-3 w-full pr-4">
          <div className="space-y-5">
            <h3 className="mt-4 mb-2 text-xl font-bold">{name}</h3>
            <p>Subcategory: {subcategory}</p>
            <hr />
            <p>Stock Status: {status}</p>
            <hr />
            <p>Customization: {customization}</p>
            <hr />
            <p className="space-x-10 flex">
              <span className="bg-gray-100 py-1 px-4 rounded-2xl">
                Rating: {rating}
              </span>
              <span className="bg-gray-100 py-1 px-4 rounded-2xl">
                Price: {price} TK
              </span>
            </p>
          </div>
          <div className="card-actions md:justify-end justify-center m-2">
            <div className="btn-group btn-group-vertical justify-center flex sm:block items-center ">
              <button className="btn sm:w-full m-2">View</button>
              <button className="btn sm:w-full m-2">Edit</button>
              <button className="btn sm:w-full m-2">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraftCard;
