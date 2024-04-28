import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useContext } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  //Navigation System
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || '/';
  const ridiract = () => {
    navigate(from);
  };

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    const { email, password } = data;
    signInUser(email, password)
      .then(result => {
        toast.success('You are wellcome');
        if (result.user) {
          setTimeout(ridiract, 1000);
        }
      })
      .catch(error => {
        toast.warn('please check email');
      });
  };

  return (
    <div
      className="flex justify-center items-center mt-[100px]"
      data-aos="fade-up"
      data-aos-delay="300"
    >
      <div className="card shrink-0 w-full max-w-screen-md shadow-2xl p-10 bg-base-100 border border-green-500">
        <h1 className="text-4xl text-center font-bold text-black">Login Now</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              name="emai"
              className="input input-bordered"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className="text-red-500 text-xl">
                This field is required
              </span>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Password</span>
            </label>
            <input
              type="password"
              placeholder="Your Password"
              name="Password"
              className="input input-bordered"
              {...register('password', { required: true })}
            />
            {errors.password && (
              <span className="text-red-500 text-xl">
                This field is required
              </span>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover ">
                Forgot password?
              </a>
            </label>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary text-xl">Login</button>
          </div>
          <label className="label flex justify-center items-center text-xl font-semibold">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="label-text-alt link link-hover text-black text-xl font-semibold "
            >
              Create a new account
            </Link>
          </label>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default Login;
