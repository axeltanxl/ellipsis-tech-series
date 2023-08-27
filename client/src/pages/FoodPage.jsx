import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Layout from '../components/Layout';
import FoodEntry from '../components/foodPage/FoodEntry';
// import Table from "../components/foodPage/FoodTable";
import { SuccessModal } from '../components/foodPage/SuccessModal';
import { useGetFilteredMeals } from '../hooks/requests/mealRoutes';
import moment from 'moment';
const Food = () => {



    let tdy = moment();

    let tmr  = moment().add(1, 'days');

    console.log(tdy.format("DD-MM-YYYY"));
    console.log(tmr.format("DD-MM-YYYY"));
    const {mutate : getFilteredMeals} = useGetFilteredMeals();

    // useEffect(()=>{
        
    //     getFilteredMeals()
    // })

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

	const mealCategories = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];

	const meals = [
		{
			name: 'Breakfast',
			items: [
				{ food: 'Oatmeal', sodium: 150, sugar: 150 },
				{ food: 'Banana', sodium: 150, sugar: 150 },
				{ food: 'Banana', sodium: 150, sugar: 150 },
				{ food: 'Banana', sodium: 150, sugar: 150 },
				{ food: 'Banana', sodium: 150, sugar: 150 },
				{ food: 'Banana', sodium: 150, sugar: 150 },
			],
			date: '2023-08-27',
		},
		{
			name: 'Breakfast',
			items: [
				{ food: 'Oatmeal', sodium: 150, sugar: 150 },
				{ food: 'Banana', sodium: 150, sugar: 150 },
				{ food: 'Banana', sodium: 150, sugar: 150 },
				{ food: 'Banana', sodium: 150, sugar: 150 },
				{ food: 'Banana', sodium: 150, sugar: 150 },
				{ food: 'Banana', sodium: 150, sugar: 150 },
			],
			date: '2023-08-26',
		},
		{
			name: 'Lunch',
			items: [
				{ food: 'Grilled Chicken', sodium: 150, sugar: 150 },
				{ food: 'Salad', sodium: 150, sugar: 150 },
			],
			date: '2023-08-26',
		},
		{
			name: 'Dinner',
			items: [
				{ food: 'Oatmeal', sodium: 150, sugar: 150 },
				{ food: 'Banana', sodium: 150, sugar: 150 },
			],
			date: '2023-08-26',
		},
		{
			name: 'Snack',
			items: [
				{ food: 'Grilled Chicken', sodium: 150, sugar: 150 },
				{ food: 'Salad', sodium: 150, sugar: 150 },
			],
			date: '2023-08-26',
		},
	];

	const [todayDate, setTodayDate] = useState('');
	const timeElapsed = Date.now();
	const today = new Date(timeElapsed);
	let date = today.toDateString();
	// to return the date number(1-31) for the specified date

	//returns the tomorrow date
	// console.log("tomorrow => ",tomorrow.toDateString())

	// const handleTomorrowDate = () => {
	//   let tomorrow = new Date();
	//   tomorrow.setDate(today.getDate() + 1);
	//   date = tomorrow.toDateString();
	// };

	const [displayedDate, setDisplayedDate] = useState(today);

	const handleDateChange = (nextDay) => {
		const newDate = new Date(displayedDate);
		newDate.setDate(displayedDate.getDate() + nextDay);
		setDisplayedDate(newDate);
		console.log(newDate.getFullYear() + '-' + newDate.getMonth() + '-' + newDate.getDate());
	};

	const formattedDisplayedDate = displayedDate.toDateString();
	const filteredMeals = meals.filter(
		(meal) => meal.date === displayedDate.toISOString().split('T')[0]
	);

	return (
		<Layout>
			<div className="flex flex-col my-10 bg-white rounded-lg shadow-lg p-6">
				<div className="flex justify-center text-base md:text-lg lg:text-xl w-70 gap-1 items-center">
					<div
						className="p-2 w-10 text-center text-black bg-light_green rounded-l cursor-pointer"
						onClick={() => handleDateChange(-1)}
					>
						<i className="fa-solid fa-caret-left"></i>
					</div>
					<div className="p-2 w-70 text-center text-lg font-bold text-black bg-light_green rounded">
						{formattedDisplayedDate}
					</div>
					<div
						className="p-2 w-10 text-center text-black bg-light_green rounded-r cursor-pointer"
						onClick={() => handleDateChange(1)}
					>
						<i className="fa-solid fa-caret-right"></i>
					</div>
					<div className="w-15 text-center text-2xl text-gray-600">
						<i className="fa-solid fa-calendar-days"></i>
					</div>
				</div>

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
							{mealCategories.map((category, index) => (
								<React.Fragment key={index}>
									<tr className="bg-light_purple">
										<td className="p-3 font-bold">{category}</td>
										<td className="p-3 font-bold">
											{sumTotalSodium(
												filteredMeals.find((meal) => meal.name === category)
													?.items || []
											)}
										</td>
										<td className="p-3 font-bold">
											{sumTotalSugar(
												filteredMeals.find((meal) => meal.name === category)
													?.items || []
											)}
										</td>
									</tr>
									{filteredMeals
										.filter((meal) => meal.name === category)
										.map((meal, mealIndex) =>
											meal.items.map((item, itemIndex) => (
												<tr
													key={itemIndex}
													className="bg-gray-100"
												>
													<td className="py-2 pl-6">{item.food}</td>
													<td className="py-2 pl-6">{item.sodium}</td>
													<td className="py-2 pl-6">{item.sugar}</td>
												</tr>
											))
										)}
								</React.Fragment>
							))}
						</tbody>
					</table>
				</div>
			</div>
			<SuccessModal />
			<div>
				<FoodEntry />
			</div>
		</Layout>
	);
};

export default Food;
