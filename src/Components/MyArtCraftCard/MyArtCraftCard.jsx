import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyArtCraftCard = ({ data, datas, setDatas }) => {
  const { _id, image, name, subcategory, status, rating, price } = data;

  const handleDelete = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/craft/${id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(response => {
            if (response.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your Craft has been deleted.',
                icon: 'success',
              });
              const remaining = datas.filter(item => item._id !== id);
              setDatas(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="m-2">
      <div
        className="flex flex-col md:flex-col lg:flex-row gap-5 md:p-5 bg-base rounded-2xl shadow-2xl p-3 hover:border-2 hover:border-green-500 transition-all overflow-hidden"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="rounded-2xl md:w-[600px] h-[350px]">
          <img
            className="rounded-2xl hover:scale-100 w-full h-full object-cover"
            src={image}
            alt={name}
          />
        </div>
        <div className="flex flex-col justify-between w-full pr-4">
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
            <div className="flex space-x-10">
              <span className="bg-gray-100 py-1 px-4 rounded-2xl">
                <span className="font-bold">Rating:</span> {rating}
              </span>
              <span className="bg-gray-100 py-1 px-4 rounded-2xl">
                <span className="font-bold">Price:</span> {price} TK
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center mt-5">
            <Link to={`/updateCraftItem/${_id}`}>
              <button className="btn">Update</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn bg-orange-500 text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyArtCraftCard;
