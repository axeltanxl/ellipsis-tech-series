import React from "react";
import { Box, Typography } from "@mui/material";
import Layout from "../components/Layout";
import FoodEntry from "../components/foodPage/FoodEntry";
// import Table from "../components/foodPage/FoodTable";
import { SuccessModal } from "../components/foodPage/SuccessModal";
import { useCreateMeal } from "../hooks/requests/mealRoutes";


const Food = () => {
    

  function sumTotalSodium(items) {
    let result = 0;
    for (let i = 0; i < items.length; i++) {
      result += items[i].sodium;
    }
    console.log(result);

    return result;
  }

  function sumTotalSugar(items) {
    let result = 0;
    for (let i = 0; i < items.length; i++) {
      result += items[i].sugar;
    }

    return result;
  }

  const meals = [
    {
      name: "Breakfast",
      items: [
        { food: "Oatmeal", sodium: 150, sugar: 150 },
        { food: "Banana", sodium: 150, sugar: 150 },
        { food: "Banana", sodium: 150, sugar: 150 },
        { food: "Banana", sodium: 150, sugar: 150 },
        { food: "Banana", sodium: 150, sugar: 150 },
        { food: "Banana", sodium: 150, sugar: 150 },
      ],
    },
    {
      name: "Lunch",
      items: [
        { food: "Grilled Chicken", sodium: 150, sugar: 150 },
        { food: "Salad", sodium: 150, sugar: 150 },
      ],
    },
    {
      name: "Dinner",
      items: [
        { food: "Oatmeal", sodium: 150, sugar: 150 },
        { food: "Banana", sodium: 150, sugar: 150 },
      ],
    },
    {
      name: "Snack",
      items: [
        { food: "Grilled Chicken", sodium: 150, sugar: 150 },
        { food: "Salad", sodium: 150, sugar: 150 },
      ],
    },
  ];

  return (
    <Layout>
      {/* <div className="bg-primary rounded-lg my-8 flex flex-col gap-4 p-8">
        <Typography variant="h1">Food Entry</Typography>
        <Typography variant="h4">
          Track your sodium levels by giving us a general description of your
          meals and we will automatically deduce your sodium levels
        </Typography>
      </div>
      <Box>
        <SuccessModal />
      </Box>
      <FoodEntry /> */}
      {/* <Table /> */}
      <div className="flex flex-col my-10 bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-row justify-between items-center mb-4">
          <div className="text-xl font-semibold">Food Diary</div>
          <button className="px-2 py-1 rounded-lg bg-gray-100 border-1 text-sm">
            Log Food
          </button>
        </div>
        <div className="max-h-[500px] overflow-y-scroll">
          <table className="table-auto w-full">
            <thead className="sticky top-0 bg-white">
              <tr className="border-b border-gray-300">
                <th className="py-2">Food</th>
                <th className="py-2">Sodium</th>
                <th className="py-2">Sugar</th>
              </tr>
            </thead>
            <tbody>
              {meals.map((meal, index) => (
                <React.Fragment key={index}>
                  <tr className="bg-gray-300">
                    <td className="p-3 font-bold">{meal.name}</td>
                    <td className="p-3 font-bold">
                      {sumTotalSodium(meal.items)}
                    </td>
                    <td className="p-3 font-bold">
                      {sumTotalSugar(meal.items)}
                    </td>
                  </tr>
                  {meal.items.map((item, subIndex) => (
                    <tr key={subIndex} className="bg-gray-100">
                      <td className="py-2 pl-6">{item.food}</td>
                      <td className="py-2 pl-6">{item.sodium}</td>
                      <td className="py-2 pl-6">{item.sugar}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <SuccessModal />
      <div><FoodEntry /></div>
    </Layout>
  );
};

export default Food;
