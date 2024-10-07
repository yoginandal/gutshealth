export default function Testimonials() {
  const testimonials = [
    {
      name: "John McCulling",
      position: "CEO / Datadrift",
      imgUrl:
        "https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Example YouTube video
    },
    {
      name: "Kate Berg",
      position: "CFO / Dashdash",
      imgUrl:
        "https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112",
      videoUrl: "https://www.youtube.com/embed/9bZkp7q19f0", // Example YouTube video
    },
  ];

  return (
    <div className=" py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <p className=" text-center font-semibold text-dgold lg:text-lg">
          Testimonials
        </p>
        <h2 className="mb-8 text-center text-2xl font-bold text-pgold font-playfair md:mb-12 lg:text-5xl">
          What others say about us
        </h2>

        <div className="grid gap-4 md:grid-cols-2 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 rounded-lg bg-dgold px-8 py-6 md:gap-6"
            >
              {/* YouTube Video */}
              <div className="max-w-md text-center lg:text-lg">
                <iframe
                  width="100%"
                  height="315"
                  src={testimonial.videoUrl}
                  title={testimonial.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* <div className="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-indigo-100 bg-gray-100 md:h-14 md:w-14">
                  <img
                    src={testimonial.imgUrl}
                    loading="lazy"
                    alt={testimonial.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div>
                  <div className="text-center text-sm font-bold text-indigo-50 sm:text-left md:text-base">
                    {testimonial.name}
                  </div>
                  <p className="text-center text-sm text-indigo-200 sm:text-left md:text-sm">
                    {testimonial.position}
                  </p>
                </div>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
