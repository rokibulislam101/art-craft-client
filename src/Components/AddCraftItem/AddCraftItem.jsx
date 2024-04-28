import { Helmet } from 'react-helmet-async';

const AddCraftItem = () => {
  return (
    <div>
      <Helmet>
        <title>About</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="mt-[100px] justify-center">
        <div className="text-4xl lg:text-6xl font-bold p-2 lg:p-10 bg-green-500 text-white mb-20 h-[300px] flex justify-center items-center">
          <h2 className="animate__animated animate__fadeInLeft">Add Craft Item</h2>
        </div>
        <form>
          <div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered"
                />
              </label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCraftItem;
