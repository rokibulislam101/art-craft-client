import artImg from '../../assets/images/textileart.jpg';

const ArtTextile = () => {
  return (
    <div className="bg-gray-800" data-aos="fade-up" data-aos-delay="200">
      <div className="md:flex justify-center items-center gap-16 p-10 my-20">
        <div className="md:w-1/2 text-white">
          <h1 className="font-bold text-4xl mb-5">
            Textile art mainly focuses on patterns and shapes.
          </h1>
          <p>
            Textile art is a form of art that uses plant, animal, or man-made
            fibers to create practical or decorative objects. It can include a
            variety of techniques, such as weaving, knitting, crocheting,
            quilting, embroidery, knotting, or braiding. Textile art can be a
            rug, wall hanging, clothing item, or even a fabric sculpture.
          </p>
        </div>
        <div className="rounded-2xl md:w-[600px] mt-10 md:mt-0">
          <img className="w-full" src={artImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ArtTextile;
