import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";


const TextileArts = () => {
    const datas = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const data = datas.find(job => job.id === idInt)
    console.log(data, idInt)


    return (
        <div >
        
            <Helmet>
                <title>TextileArts</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
        <div className="mt-[90px]">
            <div className="text-4xl lg:text-6xl font-bold p-2 lg:p-10 bg-green-500 text-white mb-20 h-[300px] flex justify-center items-center">
                <h2 className="animate__animated animate__fadeInLeft">Textile Arts</h2>
            </div>

            <div className="my-20 mx-2 lg:mx-10 flex justify-center items-center flex-col shadow-2xl lg:p-10 rounded-2xl">
                <div className=" w-[90%] md:flex md:gap-10">
                    <img className="w-full rounded-2xl" data-aos="fade-up" data-aos-delay="200" src={data.image} alt="" />
                    <div >
                        <h2 className="text-4xl lg:text-5xl font-bold text-green-500 my-10" data-aos="fade-up" data-aos-delay="400">{data.title}</h2>
                        <hr />
                        <p className="text-xl my-5" data-aos="fade-up" data-aos-delay="600">Description: {data.description}</p>
                        <hr />
                        <div className=" my-5 space-x-1 flex text-wrap  lg:flex-row lg:gap-5  " data-aos="fade-up" data-aos-delay="600">
                            <span className="text-xl">Facilities: </span>
                            <span className="bg-blue-100 py-1 px-5 text-lg rounded-2xl">#{data.facilities[0]}, #{data.facilities[1]}, #{data.facilities[2]},#{data.facilities[3]}</span>
                        
                
                            </div>
                        <hr />
                        <div className=" my-5 space-x-5 flex flex-col   lg:flex-row gap-5 " data-aos="fade-up" data-aos-delay="800">
                            <p><span className="text-xl">Location: </span><span className="bg-orange-100 py-1 px-5 text-lg rounded-2xl">{data.location}</span></p>
                            <p><span className="text-xl"> Price: </span><span className="bg-orange-100 py-1 px-5 text-lg rounded-2xl">${data.price}</span></p>
                        </div>
                        <hr />
                        <div className=" my-5 space-x-5 flex flex-col   lg:flex-row gap-5  " data-aos="fade-up" data-aos-delay="1000">
                            <p><span className="text-xl">Status: </span><span className="bg-orange-100 py-1 px-5 text-lg rounded-2xl">{data.status}</span></p>
                            <p><span className="text-xl">Area: </span><span className="bg-orange-100 py-1 px-5 text-lg rounded-2xl">{data.area_sq_ft} sq_ft</span></p>

                        </div>
                        <hr />
                        
                        
                    </div>

                </div>

            </div>

        </div>
        </div>
    );
};

export default TextileArts;