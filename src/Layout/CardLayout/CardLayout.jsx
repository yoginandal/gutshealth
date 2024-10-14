import Card from "@/components/Card/Card";

const CardLayout = ({ cards }) => {
  return (
    <div className="relative pt-12 pb-12">
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 space-y-4">
          <p className="text-center font-semibold text-dgold lg:text-lg">
            My Expertise
          </p>

          <h2 className="text-center text-2xl font-bold font-playfair text-pgold lg:text-5xl">
            What We Specialized In
          </h2>
        </div>
      </div>

      {/* Card Layout */}
      <div className="flex justify-center flex-wrap gap-8 mx-auto">
        {cards.map((card, index) => (
          <div key={index} className="flex justify-center w-full sm:w-auto">
            {" "}
            {/* key prop added here */}
            <Card
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardLayout;
