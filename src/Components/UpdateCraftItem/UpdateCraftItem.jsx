import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';
import Swal from 'sweetalert2';

const UpdateCraftItem = () => {

  const data = useLoaderData();
  const {
    _id,
    name,
    subcategory,
    price,
    customization,
    rating,
    time,
    status,
    image,
    description,
  } = data;

  const { currentUser } = useContext(AuthContext);
  const handleUpdateCraft = event => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const subcategory = form.subcategory.value;
    const price = form.price.value;
    const customization = form.customization.value;
    const rating = form.rating.value;
    const time = form.time.value;
    const status = form.status.value;
    const image = form.image.value;
    const description = form.description.value;
    const email = currentUser.email;
    // const admin = currentUser.admin;
    const displayName = currentUser.displayName;

    const updatedCraft = {
      displayName,
      email,
      name,
      subcategory,
      price,
      customization,
      rating,
      time,
      status,
      image,
      description,
    };
    console.log(updatedCraft);

    //send data to the server
    fetch(
      `https://art-craft-store-fo2um4jb5-md-rokibul-islam-mollahs-projects.vercel.app/craft/${_id}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(updatedCraft),
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: 'Success!',
            text: 'Craft Item Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
  };

  return (
    <div>
      <Helmet>
        <title>UpdateCraftItem</title>
      </Helmet>
      <div className="mt-[100px] justify-center bg-orange-200">
        <div className="text-4xl lg:text-6xl font-bold p-2 lg:p-10 bg-green-500 text-white mb-20 h-[300px] flex justify-center items-center">
          <h2 className="animate__animated animate__fadeInLeft">
            Update Craft Item
          </h2>
        </div>
        <form className="p-10" onSubmit={handleUpdateCraft}>
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Item Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  placeholder="Item Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Subcategory Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="subcategory"
                  defaultValue={subcategory}
                  placeholder="Subcategory Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/3">
              <label className="label">
                <span className="label-text font-bold">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  defaultValue={price}
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/3">
              <label className="label">
                <span className="label-text font-bold">Customization</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="customization"
                  defaultValue={customization}
                  placeholder="Yes or No"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/3">
              <label className="label">
                <span className="label-text font-bold">Rating</span>
              </label>
              <div className="rating">
                {[1, 2, 3, 4, 5].map(i => (
                  <input
                    key={i}
                    type="radio"
                    name="rating"
                    defaultValue={rating}
                    value={i}
                    className="mask mask-star-2 bg-orange-400"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Processing Time</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="time"
                  defaultValue={time}
                  placeholder="Processing Time"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Stock Status</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="status"
                  defaultValue={status}
                  placeholder="In Stock or Made to Order"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Image URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="image"
                  defaultValue={image}
                  placeholder="Use Image URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Short Description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  defaultValue={description}
                  placeholder="Write Details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Update Craft Item"
            className="btn btn-neutral w-full mt-5"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCraftItem;
