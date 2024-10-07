import BannerAbout from "@/Layout/BannerLayout/BannerAbout";
import CardLayout from "@/Layout/CardLayout/CardLayout";

export default function HomePage() {
  const cardsData = [
    {
      icon: "/assets/svg/junk.svg",
      title: "Initial Assessment",
      description:
        "We thoroughly evaluate your current dietary habits, medical history, and health status. This helps us understand your unique nutritional needs to...",
    },
    {
      icon: "/assets/svg/arrow.svg",
      title: "Set Your Goals",
      description:
        "Together, we define clear, achievable nutrition and health goals. These goals are aligned with your individual needs, such as weight management, ...",
    },
    {
      icon: "/assets/svg/book.svg",
      title: "Personalized Plan",
      description:
        "You will receive a fully customized diet plan tailored to your body type, lifestyle, and food preferences. It includes meal suggestions, portion ...",
    },
    {
      icon: "/assets/svg/monitor.svg",
      title: "Monitor & Adjust",
      description:
        "We track your progress regularly and make real-time adjustments to your diet and goals to ensure you're staying on course. This helps you meet an...",
    },
    {
      icon: "/assets/svg/salad.svg",
      title: "Maintenance",
      description:
        "After you've successfully reached your health goals, we provide ongoing support to help you maintain your results with a sustainable, long-term p...",
    },
  ];

  return (
    <>
      <BannerAbout />
      <CardLayout cards={cardsData} />
    </>
  );
}
