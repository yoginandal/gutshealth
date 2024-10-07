import Card from "@/components/Card/Card";

const CardLayout = ({ cards }) => {
  return (
    <div className="relative  pt-12 pb-12">
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8 space-y-4">
          <p className=" text-center font-semibold text-dgold lg:text-lg">
            My Services
          </p>

          <h2 className="text-center text-2xl font-bold font-playfair text-pgold lg:text-5xl">
            Services we offer for your gut health
          </h2>
        </div>
      </div>
      {/* Card Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center gap-0 max-w-5xl mx-auto relative z-5 ">
        {cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardLayout;
