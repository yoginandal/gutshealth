import Card from "@/components/Card/Card";

const CardLayout = ({ cards }) => {
  return (
    <div className="relative  pt-12 pb-12 flex justify-center">
      {/* Card Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center gap-0 relative z-5 ">
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
