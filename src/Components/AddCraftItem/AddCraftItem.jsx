import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';
import { FaUser } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AddCraftItem = () => {
  const { currentUser } = useContext(AuthContext);
  const handleAddCraft = event => {
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

    const newCraft = {
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
    console.log(newCraft);

    //send data to the server
    fetch('http://localhost:5000/craft', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newCraft)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if(data.insertedID){
          Swal.fire({
            title: 'Success!',
            text: 'Craft Item Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
  };


  return (
    <div>
      <Helmet>
        <title>AddCraftItem</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="mt-[100px] justify-center bg-orange-200">
        <div className="text-4xl lg:text-6xl font-bold p-2 lg:p-10 bg-green-500 text-white mb-20 h-[300px] flex justify-center items-center">
          <h2 className="animate__animated animate__fadeInLeft">
            Add Craft Item
          </h2>
        </div>
        <form className="p-10" onSubmit={handleAddCraft}>
          <div className="md:flex gap-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Item Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
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
                  placeholder="In stock or Made to Order"
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
                  placeholder="Write Details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Add Craft Item"
            className="btn btn-neutral w-full mt-5"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCraftItem;
