import { useNavigate } from "react-router-dom";

const RightImageLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center p-4 sm:p-6 lg:p-12 lg:pt-0 mt-[-2rem] pb-16">
      <div
        className="bg-cards rounded-3xl p-4 sm:p-6 lg:p-12 w-full max-w-screen-xl"
        style={{
          boxShadow:
            "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
        }}
      >
        {/* Left Side: Heading and Content */}
        <div className="flex flex-col lg:flex-row items-start lg:justify-between flex-1">
          {/* Left content with increased width */}
          <div className="text-left space-y-4 sm:space-y-6 flex-1">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif italic text-pgold">
              the <span className="font-bold">GUT CARE</span> Program
            </h1>

            <p className="text-sm sm:text-lg text-gray-600 mt-2 sm:mt-4">
              The Gut Care program is a 3 step program spread across over 21
              days to help you HEAL your gut. Whereas majority of us feel like
              we need a &apos;cleanse&apos;, more often than not we need to tend
              to our ailments which manifest in the gut. Also known as our
              second brain, the gut is the place for the foundation of our body
              and bodily functions.
            </p>
            <ul>
              <li className="text-sm sm:text-lg text-gray-600 list-disc ml-6">
                This program will be entirely 1-1. 1-1 whatsapp support through
                and through.
              </li>
              <li className="text-sm sm:text-lg text-gray-600 list-disc ml-6">
                4-5 calls schedules over the course of time.
              </li>
              <li className="text-sm sm:text-lg text-gray-600 list-disc ml-6">
                Lifestyle changes, food recipes and dietary guidances will be
                given through and through.
              </li>

              <li className="text-sm sm:text-lg text-gray-600 list-disc ml-6">
                It&apos;s a short yet extensive program with various levels of
                change, however, the pace is YOURS.
              </li>
              <li className="text-sm sm:text-lg text-gray-600 list-disc ml-6">
                There will be no set pace for everyone together. I will
                carefully analyse and advise changes to everyone based on their
                bodies, their lifestyles and their requirements.
              </li>
              <li className="text-sm sm:text-lg text-gray-600 list-disc ml-6">
                Even though the common goal is to care for the gut, this will be
                an extremely customised and personalised plan.
              </li>
            </ul>

            {/* Move the button here, after all text */}
            <button
              onClick={() => navigate("/contact-us")}
              className="bg-dgold text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg mt-8" // Adjusted margin for spacing
              style={{ boxShadow: "5px 8px 10px rgba(0, 0, 0, 0.8)" }}
            >
              Start Your Personalized Gut Care Journey
            </button>
          </div>

          {/* Right Side: Image */}
          {/* <div className="lg:h-full flex justify-end lg:items-end flex-1">
            <img
              src="../assets/webp/man.webp" 
              alt="Gut Cleanse Program"
              className="w-full h-full  drop-shadow-lg"
              style={{
                filter: "drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.8))",
              }}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RightImageLayout;
