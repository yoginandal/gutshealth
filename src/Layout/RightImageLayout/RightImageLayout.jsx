const RightImageLayout = () => {
  return (
    <div className="flex justify-center p-4 sm:p-6 lg:p-12">
      <div
        className="bg-cards rounded-3xl p-4 sm:p-6 lg:p-12 max-w-[90vw] w-full"
        style={{
          boxShadow:
            "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
        }}
      >
        {/* Left Side: Heading and Content */}
        <div className="flex flex-col lg:flex-row items-start lg:justify-between">
          <div className="text-left lg:w-1/2 space-y-4 sm:space-y-6">
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-serif italic text-gray-900">
              the <span className="font-bold">GUT CLEANSE</span> Program
            </h1>
            <button
              className="bg-gold text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg mt-4"
              style={{ boxShadow: "5px 8px 10px rgba(0, 0, 0, 0.8)" }}
            >
              Take a Gut Quiz to check your eligibility
            </button>
            <p className="text-sm sm:text-lg text-gray-500 mt-2 sm:mt-4">
              9th October - 24th October 2024
              <br />
              <span className="text-red-600 font-bold">
                REGISTRATIONS OPEN - for only
              </span>
            </p>
            <p className="text-xl sm:text-3xl font-bold text-green-700">
              د.إ500.00
            </p>
            <p className="text-sm sm:text-lg text-gray-600 mt-2 sm:mt-4">
              Unhealthy eating habits, an inactive or stressful lifestyle, and
              overuse of medication can cause gut inflammation. Poor gut
              microbiome manifests itself through a compromised immune system,
              health issues like PCOS, thyroid, stubborn weight, malnutrition,
              and slow brain performance.
            </p>
            <p className="text-sm sm:text-lg text-gray-600">
              We think medication or supplements can help heal our gut, but the
              truth is, without proper nutrition and mindfulness practices, gut
              recovery can be an uphill battle.
            </p>
            <p className="text-sm sm:text-lg text-gray-600">
              This 15-day Gut Cleanse Program is designed to help you understand
              what&apos;s triggering your symptoms and restore your gut
              microbiome naturally.
            </p>
            <p className="text-xs sm:text-sm italic text-gray-500 mt-2">
              *Please note - Not for diabetics, pregnant women, under 18&apos;s,
              and people with severe medical conditions.*
            </p>
            <p className="text-xs sm:text-sm italic text-gray-500">
              No refunds or batch changes once you sign up.
            </p>
          </div>

          {/* Right Side: Image */}
          <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-end lg:items-end lg:flex-1">
            {/* Shadow Wrapper */}
            <img
              src="../assets/webp/man.webp" // replace with the path to your image
              alt="Gut Cleanse Program"
              className="max-w-full lg:h-[35.417vw] object-cover drop-shadow-lg"
              style={{
                filter: "drop-shadow(10px 10px 5px rgba(0, 0, 0, 0.8))",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightImageLayout;
