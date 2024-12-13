const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20 px-5 text-center">
      {/* Text Section Above Image */}
      <h1 className="text-5xl lg:text-7xl font-bold text-pgold mb-4 tracking-wide">
        Step into a world of Health Care
      </h1>
      <p className="text-xl lg:text-2xl text-gray-500 italic mb-8 max-w-3xl">
        Embark on a journey of exceptional quality, where
        <span className="text-lgold font-semibold">health</span> meets
        <span className="text-lgold font-semibold">elegance</span>. Discover
        personalized solutions tailored just for you.
      </p>

      {/* The banner with centered image */}
      {/* <div className="w-full flex justify-center">
        <img
          src="../assets/webp/banner.webp"
          alt="Premium Design"
          className="w-[80%] max-w-4xl rounded-lg"
        />
      </div> */}

      {/* Text Section Below Image */}
      <p className="text-xl lg:text-2xl text-gray-600 mt-8 font-light">
        <span className="text-lgold font-semibold">Elevate your lifestyle</span>
        with tailored nutrition plans, expertly crafted just for you.
      </p>
    </div>
  );
};

export default Banner;
