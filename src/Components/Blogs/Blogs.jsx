import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = ({ data = {} }) => {
  const {
    _id,
    image,
    name,
    description
  } = data;

  return (
    <div className="m-2">
      <div className="card card-compact w-full bg-base-100 shadow-xl hover:border-2 hover:border-green-500 overflow-hidden">
        <figure>
          <img src={image} alt={name} className="object-cover w-full h-48" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          {/* Ensure the Link path is correctly formatted */}
          <Link
            to={`/data/${_id}`}
            className="text-blue-500 hover:text-blue-700"
          >
            Read More -
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
