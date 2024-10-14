import BannerAbout from "@/Layout/BannerLayout/BannerAbout";
import CardLayout from "@/Layout/CardLayout/CardLayout";
import Testimonials from "@/components/Testimonial/Testimonial";
import WhyWorkWithMeSection from "@/Layout/WhyChooseMe/WhyChooseMe";

export default function HomePage() {
  const cardsData = [
    {
      icon: "/assets/svg/assessment.svg",
      title: "Personalized Diet Plans",
      description:
        "We thoroughly evaluate your current dietary habits, medical history, and health status. This helps us understand your unique nutritional needs to...",
    },
    {
      icon: "/assets/svg/yin-yang.svg",
      title: "Lifestyle cosnultations",
      description:
        "Together, we define clear, achievable nutrition and health goals. These goals are aligned with your individual needs, such as weight management, ...",
    },
    {
      icon: "/assets/svg/monitor.svg",
      title: "Gut health and Hormonal balance",
      description:
        "You will receive a fully customized diet plan tailored to your body type, and food preferences. It includes meal suggestions, portion ...",
    },
    {
      icon: "/assets/svg/weightlifting.svg",
      title: "Weight Managment Programs",
      description:
        "We track your progress regularly and make real-time adjustments to your diet and goals to ensure you're staying on course. This helps you meet an...",
    },
    {
      icon: "/assets/svg/salad.svg",
      title: "Healthy bakes made with natural ingredients",
      description:
        "After you've successfully reached your health goals, we provide ongoing support to help you maintain your sustainable results, long-term p...",
    },
  ];

  return (
    <>
      <BannerAbout />
      <CardLayout cards={cardsData} />
      <WhyWorkWithMeSection />
      <Testimonials />
    </>
  );
}
