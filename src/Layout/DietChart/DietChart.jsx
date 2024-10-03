import { useState } from "react";

// Sample data for veg meal plans for all 7 days
const vegMealPlans = {
  Mon: [
    {
      time: "8 AM",
      meal: "Breakfast",
      dish: "Oatmeal with Berries",
      icon: "🍓",
    },
    { time: "12 PM", meal: "Lunch", dish: "Grilled Veggie Salad", icon: "🥗" },
    { time: "4 PM", meal: "Snack", dish: "Greek Yogurt", icon: "🍶" },
    { time: "7 PM", meal: "Dinner", dish: "Paneer Stir-Fry", icon: "🧀" },
  ],
  Tue: [
    { time: "8 AM", meal: "Breakfast", dish: "Avocado Toast", icon: "🥑" },
    { time: "12 PM", meal: "Lunch", dish: "Quinoa & Veggie Bowl", icon: "🍚" },
    { time: "4 PM", meal: "Snack", dish: "Hummus with Carrots", icon: "🥕" },
    { time: "7 PM", meal: "Dinner", dish: "Veggie Burger", icon: "🍔" },
  ],
  Wed: [
    { time: "8 AM", meal: "Breakfast", dish: "Smoothie Bowl", icon: "🍇" },
    { time: "12 PM", meal: "Lunch", dish: "Veggie Wrap", icon: "🌯" },
    { time: "4 PM", meal: "Snack", dish: "Mixed Nuts", icon: "🥜" },
    { time: "7 PM", meal: "Dinner", dish: "Vegetable Stir-Fry", icon: "🥦" },
  ],
  Thu: [
    { time: "8 AM", meal: "Breakfast", dish: "French Toast", icon: "🍞" },
    { time: "12 PM", meal: "Lunch", dish: "Chickpea Salad", icon: "🥗" },
    { time: "4 PM", meal: "Snack", dish: "Fruit Smoothie", icon: "🍌" },
    { time: "7 PM", meal: "Dinner", dish: "Vegetarian Pizza", icon: "🍕" },
  ],
  Fri: [
    {
      time: "8 AM",
      meal: "Breakfast",
      dish: "Pancakes with Syrup",
      icon: "🥞",
    },
    { time: "12 PM", meal: "Lunch", dish: "Veggie Pasta", icon: "🍝" },
    {
      time: "4 PM",
      meal: "Snack",
      dish: "Apple with Peanut Butter",
      icon: "🍏",
    },
    { time: "7 PM", meal: "Dinner", dish: "Grilled Paneer", icon: "🧀" },
  ],
  Sat: [
    { time: "8 AM", meal: "Breakfast", dish: "Chia Pudding", icon: "🍧" },
    { time: "12 PM", meal: "Lunch", dish: "Veggie Sushi", icon: "🍣" },
    { time: "4 PM", meal: "Snack", dish: "Protein Bar", icon: "🍫" },
    { time: "7 PM", meal: "Dinner", dish: "Veggie Stir-Fry", icon: "🍲" },
  ],
  Sun: [
    {
      time: "8 AM",
      meal: "Breakfast",
      dish: "Bagel with Cream Cheese",
      icon: "🥯",
    },
    { time: "12 PM", meal: "Lunch", dish: "Vegetable Soup", icon: "🥣" },
    { time: "4 PM", meal: "Snack", dish: "Granola Bar", icon: "🍪" },
    { time: "7 PM", meal: "Dinner", dish: "Grilled Tofu", icon: "🍢" },
  ],
};

// Sample data for non-veg meal plans for all 7 days
const nonVegMealPlans = {
  Mon: [
    {
      time: "8 AM",
      meal: "Breakfast",
      dish: "Oatmeal with Berries",
      icon: "🍓",
    },
    { time: "12 PM", meal: "Lunch", dish: "Grilled Chicken Salad", icon: "🥗" },
    { time: "4 PM", meal: "Snack", dish: "Greek Yogurt", icon: "🍶" },
    {
      time: "7 PM",
      meal: "Dinner",
      dish: "Steamed Salmon & Veggies",
      icon: "🐟",
    },
  ],
  Tue: [
    { time: "8 AM", meal: "Breakfast", dish: "Avocado Toast", icon: "🥑" },
    { time: "12 PM", meal: "Lunch", dish: "Quinoa & Chicken Bowl", icon: "🍚" },
    { time: "4 PM", meal: "Snack", dish: "Hummus with Carrots", icon: "🥕" },
    {
      time: "7 PM",
      meal: "Dinner",
      dish: "Grilled Steak & Broccoli",
      icon: "🥩",
    },
  ],
  Wed: [
    { time: "8 AM", meal: "Breakfast", dish: "Scrambled Eggs", icon: "🍳" },
    { time: "12 PM", meal: "Lunch", dish: "Turkey Wrap", icon: "🌯" },
    { time: "4 PM", meal: "Snack", dish: "Mixed Nuts", icon: "🥜" },
    { time: "7 PM", meal: "Dinner", dish: "Chicken Stir-Fry", icon: "🍗" },
  ],
  Thu: [
    { time: "8 AM", meal: "Breakfast", dish: "French Toast", icon: "🍞" },
    { time: "12 PM", meal: "Lunch", dish: "Shrimp Tacos", icon: "🌮" },
    { time: "4 PM", meal: "Snack", dish: "Fruit Smoothie", icon: "🍓" },
    {
      time: "7 PM",
      meal: "Dinner",
      dish: "Beef & Broccoli Stir-Fry",
      icon: "🥦",
    },
  ],
  Fri: [
    {
      time: "8 AM",
      meal: "Breakfast",
      dish: "Pancakes with Syrup",
      icon: "🥞",
    },
    { time: "12 PM", meal: "Lunch", dish: "Chicken Pasta", icon: "🍝" },
    {
      time: "4 PM",
      meal: "Snack",
      dish: "Apple with Peanut Butter",
      icon: "🍏",
    },
    { time: "7 PM", meal: "Dinner", dish: "Spaghetti & Meatballs", icon: "🍝" },
  ],
  Sat: [
    { time: "8 AM", meal: "Breakfast", dish: "Chia Pudding", icon: "🍧" },
    { time: "12 PM", meal: "Lunch", dish: "Sushi", icon: "🍣" },
    { time: "4 PM", meal: "Snack", dish: "Protein Bar", icon: "🍫" },
    { time: "7 PM", meal: "Dinner", dish: "BBQ Ribs & Corn", icon: "🍖" },
  ],
  Sun: [
    {
      time: "8 AM",
      meal: "Breakfast",
      dish: "Bagel with Cream Cheese",
      icon: "🥯",
    },
    { time: "12 PM", meal: "Lunch", dish: "Fish & Chips", icon: "🍟" },
    { time: "4 PM", meal: "Snack", dish: "Granola Bar", icon: "🍪" },
    {
      time: "7 PM",
      meal: "Dinner",
      dish: "Roast Chicken & Potatoes",
      icon: "🍗",
    },
  ],
};

const DietChart = () => {
  const [selectedDay, setSelectedDay] = useState("Mon");
  const [dietType, setDietType] = useState("Veg"); // Track Veg or Non-Veg

  const mealPlans = dietType === "Veg" ? vegMealPlans : nonVegMealPlans;

  return (
    <div className="flex flex-col justify-center items-center p-4 sm:p-6 lg:p-12">
      {/* Veg/Non-Veg Toggle */}
      <div className="flex space-x-4 mb-6 justify-center w-full">
        <button
          onClick={() => setDietType("Veg")}
          className={`py-2 px-6 rounded-lg font-bold transition-colors duration-300 ${
            dietType === "Veg"
              ? "bg-leaf text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-leaflight"
          }`}
        >
          Veg
        </button>
        <button
          onClick={() => setDietType("Non-Veg")}
          className={`py-2 px-6 rounded-lg font-bold transition-colors duration-300 ${
            dietType === "Non-Veg"
              ? "bg-[#a0853f] text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-[#f5deb3]"
          }`}
        >
          Non-Veg
        </button>
      </div>

      {/* Card Container */}
      <div
        className="bg-cards rounded-3xl shadow-lg flex flex-col lg:flex-row"
        style={{
          width: "90vw",
          boxShadow:
            "0 15px 25px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.10)",
        }}
      >
        {/* Sidebar with Days */}
        <div className="w-full lg:w-1/4 bg-gray-100 rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none p-6 space-y-4">
          {Object.keys(mealPlans).map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`block w-full py-3 px-4 rounded-lg text-lg font-bold transition-all ${
                selectedDay === day
                  ? "bg-leaf text-white shadow-md"
                  : "bg-white hover:bg-leaflight"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        {/* Meal Plan Content */}
        <div className="w-full lg:w-3/4 p-8">
          {/* Updated Grid to be more responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {mealPlans[selectedDay].map((meal, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Circle with Icon, Time and Meal */}
                <div className="flex flex-col items-center justify-center rounded-full bg-[#f5deb3] w-28 h-28 sm:w-32 sm:h-32 shadow-lg">
                  <div className="text-4xl">{meal.icon}</div>
                  <div className="mt-2 text-sm font-semibold text-green-700">
                    {meal.time}
                  </div>
                  <div className="text-xs text-gray-600">{meal.meal}</div>
                </div>
                {/* Dish Below Circle */}
                <div className="mt-2 sm:mt-4">
                  <div className="text-xs text-gray-800 font-semibold">
                    {meal.dish}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DietChart;
