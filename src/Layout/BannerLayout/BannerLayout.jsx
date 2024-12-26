const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center py-20 px-5 text-center">
      {/* Text Section Above Image */}
      <h1 className="text-5xl lg:text-7xl font-bold text-pgold mb-4 tracking-wide">
        Step into Wellness
      </h1>
      <p className="text-xl lg:text-2xl text-gray-500 italic mb-8 max-w-3xl">
        Discover personalized solutions designed to transform your&nbsp;
        <span className="text-lgold font-semibold">health</span> and &nbsp;
        <span className="text-lgold font-semibold">lifestyle</span>. From
        expert-crafted{" "}
        <span className="text-lgold font-semibold">nutrition</span> plans to
        holistic care, experience the perfect blend of health and elegance
        tailored just for you.
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
        Start your journey to a &nbsp;
        <span className="text-lgold font-semibold">healthier,</span>
        &nbsp;elevated you.
      </p>
    </div>
  );
};

export default Banner;
