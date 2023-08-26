import axios from 'axios';
import { searchFoodByItemResult, searchFoodWithSodiumThresholdResult } from './responses/mockData';

import { getNearbyPlaces } from './mapService';

/**
 * Search for foods based on a query.
 * This could return both normal food and restaurant that has similarly titled food.
 * @param {string} query - The search query.
 * @returns {Promise<object>} The API response data. common and/or branded could return empty array.
 * @example
 * const exampleResponse = {
 *   common: [
 *     {
 *           "food_name": "kaya toast",
 *           "serving_unit": "Serving",
 *           "tag_name": "Kaya Toast",
 *           "serving_qty": 1,
 *           "common_type": null,
 *           "tag_id": "14867",
 *           "photo": {
 *               "thumb": "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
 *               "highres": null,
 *               "is_user_uploaded": false
 *           },
 *           "locale": "en_US"
 *       }
 *   ],
 *   branded: [
 *     {
 *          "food_name": "Spaghetti Family Pack",
 *          "serving_unit": "Serving",
 *          "nix_brand_id": "62b4d4a209d7c5dc6adedb9c",
 *          "brand_name_item_name": "Jollibee Spaghetti Family Pack",
 *          "serving_qty": 1,
 *          "nf_calories": 1830,
 *          "photo": {
 *              "thumb": "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
 *              "highres": null,
 *              "is_user_uploaded": false
 *          },
 *          "brand_name": "Jollibee",
 *          "region": 1,
 *          "brand_type": 1,
 *          "nix_item_id": "bd9d9213e9214b6bfb71b1c7",
 *          "locale": "en_US"
 *      }
 *   ]
 * };
 * @throws {Error} If an error occurs during the API request.
 */
export const searchFood = async (query) => {
	let config = {
		method: 'get',
		url: `https://trackapi.nutritionix.com/v2/search/instant?query=${query}`,
		headers: {
			'x-app-id': process.env.NUTRITIONIX_API_ID,
			'x-app-key': process.env.NUTRITIONIX_API_KEY,
		},
	};

	try {
		const response = await axios.request(config);
		return response.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

// POST to search for food but with less than or equal threshold for sodium
export const searchFoodWithSodiumThreshold = async (query, threshold = null) => {
	if (import.meta.env.VITE_IS_DEVELOPMENT === 'true') {
		return searchFoodWithSodiumThresholdResult;
	} else {
		let data = JSON.stringify({
			query,
			detailed: true,
		});

		if (threshold) {
			data = JSON.stringify({
				query,
				detailed: true,
				full_nutrients: {
					307: { lte: threshold },
				},
			});
		}

		let config = {
			method: 'post',
			url: `https://trackapi.nutritionix.com/v2/search/instant`,
			headers: {
				'x-app-id': import.meta.env.VITE_NUTRITIONIX_API_ID,
				'x-app-key': import.meta.env.VITE_NUTRITIONIX_API_KEY,
				'content-type': 'application/json',
				accept: 'application/json',
			},
			data,
		};

		try {
			const response = await axios.request(config);
			return response.data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
};

/**
 * Search for nutrition information of a food based on its name.\n
 * The return object has "full_nutrients" that has no proper mapping; do not use.
 * @param {string} query - The food name.
 * @returns {Promise<object>} The API response data.
 * @example
 * const exampleResponse = {
 *      "foods": [
            {
                "food_name": "char kway teow",
                "brand_name": null,
                "serving_qty": 1,
                "serving_unit": "servings",
                "serving_weight_grams": 297.62,
                "nf_calories": 365.35,
                "nf_total_fat": 14.67,
                "nf_saturated_fat": 1.94,
                "nf_cholesterol": 221.37,
                "nf_sodium": 1121.92,
                "nf_total_carbohydrate": 35.81,
                "nf_dietary_fiber": 2.67,
                "nf_sugars": 2.33,
                "nf_protein": 22.1,
                "nf_potassium": 297.28,
                "nf_p": 309.01,
                "full_nutrients": [
                    {
                        "attr_id": 203,
                        "value": 22.098
                    }
                ]
                "nix_brand_name": null,
                "nix_brand_id": null,
                "nix_item_name": null,
                "nix_item_id": null,
                "upc": null,
                "consumed_at": "2023-08-25T14:03:02+00:00",
                "metadata": {
                    "is_raw_food": false
                },
                "source": 1,
                "ndb_no": 1001038,
                "tags": {
                    "item": "char kway teow",
                    "measure": null,
                    "quantity": "1.0",
                    "food_group": null,
                    "tag_id": 3648
                }
                "alt_measures": [
                    {
                        "serving_weight": 297.62,
                        "measure": "servings",
                        "seq": 1,
                        "qty": 1
                    }
                ],
                "lat": null,
                "lng": null,
                "meal_type": 1,
                "photo": {
                    "thumb": "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
                    "highres": null,
                    "is_user_uploaded": false
                },
                "sub_recipe": null,
                "class_code": null,
                "brick_code": null,
                "tag_id": null
            }
        ]
 *  }
 * @throws {Error} If an error occurs during the API request.
 */
export const searchNutritionByFoodName = async (query) => {
	let data = JSON.stringify({
		query,
	});

	let config = {
		method: 'post',
		url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
		headers: {
			'Content-Type': 'application/json',
			'x-app-id': process.env.NUTRITIONIX_API_ID,
			'x-app-key': process.env.NUTRITIONIX_API_KEY,
		},
		data: data,
	};

	try {
		const response = await axios.request(config);
		return response.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

/**
 * Search for nutrition information of foods using Natural Language Processing (NLP).\n
 * The return object has "full_nutrients" that has no proper mapping; do not use.
 * @param {string} query - The query describing foods.
 * @returns {Promise<object>} The API response data.
 * @example
 * const exampleResponse = {
 *      "foods": [
            {
                "food_name": "char kway teow",
                "brand_name": null,
                "serving_qty": 1,
                "serving_unit": "servings",
                "serving_weight_grams": 297.62,
                "nf_calories": 365.35,
                "nf_total_fat": 14.67,
                "nf_saturated_fat": 1.94,
                "nf_cholesterol": 221.37,
                "nf_sodium": 1121.92,
                "nf_total_carbohydrate": 35.81,
                "nf_dietary_fiber": 2.67,
                "nf_sugars": 2.33,
                "nf_protein": 22.1,
                "nf_potassium": 297.28,
                "nf_p": 309.01,
                "full_nutrients": [
                    {
                        "attr_id": 203,
                        "value": 22.098
                    }
                ]
                "nix_brand_name": null,
                "nix_brand_id": null,
                "nix_item_name": null,
                "nix_item_id": null,
                "upc": null,
                "consumed_at": "2023-08-25T14:03:02+00:00",
                "metadata": {
                    "is_raw_food": false
                },
                "source": 1,
                "ndb_no": 1001038,
                "tags": {
                    "item": "char kway teow",
                    "measure": null,
                    "quantity": "1.0",
                    "food_group": null,
                    "tag_id": 3648
                }
                "alt_measures": [
                    {
                        "serving_weight": 297.62,
                        "measure": "servings",
                        "seq": 1,
                        "qty": 1
                    }
                ],
                "lat": null,
                "lng": null,
                "meal_type": 1,
                "photo": {
                    "thumb": "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
                    "highres": null,
                    "is_user_uploaded": false
                },
                "sub_recipe": null,
                "class_code": null,
                "brick_code": null,
                "tag_id": null
            }
        ]
 *  }
 * @throws {Error} If an error occurs during the API request.
 */
export const searchFoodWithNLP = async (query) => {
	let data = JSON.stringify({
		query: query,
		timezone: 'Asia/Singapore',
	});

	let config = {
		method: 'post',
		url: `https://trackapi.nutritionix.com/v2/natural/nutrients`,
		headers: {
			'content-type': 'application/json',
			accept: 'application/json',
			'x-app-id': import.meta.env.VITE_NUTRITIONIX_API_ID,
			'x-app-key': import.meta.env.VITE_NUTRITIONIX_API_KEY,
		},
		data,
	};

	try {
		const response = await axios.request(config);
		return response.data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export const searchFoodByItem = async (query) => {
	if (import.meta.env.VITE_IS_DEVELOPMENT === 'true') {
		return searchFoodByItemResult;
	} else {
		let config = {
			method: 'get',
			url: `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${query}`,
			headers: {
				'x-app-id': import.meta.env.VITE_NUTRITIONIX_API_ID,
				'x-app-key': import.meta.env.VITE_NUTRITIONIX_API_KEY,
			},
		};

		try {
			const response = await axios.request(config);
			return response.data;
		} catch (error) {
			console.log(error);
			throw error;
		}
	}
};

/**
 * @example
 * {
 *      "restaurants": [
 *          {
 *              "restaurant_name": "McDonald's",
 *              "locations": [
 *                  {
 *                      "type": "POI",
 *                      "id": "Nc_nXTYQqeSi4NQkX4lypg",
 *                      "score": 2.0745999813,
 *                      "info": "search:ta:158009000697673-TW",
 *                      "poi": {
 *                          "name": "Chef Hung Taiwan Beef Noodles Jian Bei",
 *                          "phone": "+886 2 2500 6850",
 *                          "brands": [
 *                              {
 *                                  "name": "Chef Hung Taiwan Beef Noodles"
 *                              }
 *                          ],
 *                          "categorySet": [
 *                              {
 *                                  "id": 7315059
 *                              }
 *                          ],
 *                          "url": "www.taiwannoodle.com.tw",
 *                          "categories": [
 *                              "restaurant",
 *                              "taiwanese"
 *                          ],
 *                          "classifications": [
 *                              {
 *                                  "code": "RESTAURANT",
 *                                  "names": [
 *                                      {
 *                                          "nameLocale": "en-US",
 *                                          "name": "restaurant"
 *                                      }
 *                                  ]
 *                              }
 *                          ]
 *                      }
 *                  ],
 *                  "address": {
 *                      "streetNumber": "72",
 *                      "streetName": "Jianguo North Road Section 2",
 *                      "municipalitySubdivision": "Zhongshan District",
 *                      "municipality": "Taipei City",
 *                      "countrySubdivision": "Taipei City",
 *                      "postalCode": "104",
 *                      "extendedPostalCode": "10479",
 *                      "countryCode": "TW",
 *                      "country": "Taiwan",
 *                      "countryCodeISO3": "TWN",
 *                      "freeformAddress": "72, Jianguo North Road Section 2, Zhongshan District, Taipei City 10479",
 *                      "localName": "Zhongshan District"
 *                  },
 *                  "position": {
 *                      "lat": 25.054937,
 *                      "lon": 121.536449
 *                  },
 *                  "viewport": {
 *                      "topLeftPoint": {
 *                          "lat": 25.05584,
 *                          "lon": 121.53546
 *                      },
 *                      "btmRightPoint": {
 *                          "lat": 25.05404,
 *                          "lon": 121.53744
 *                      }
 *                  },
 *                  "entryPoints": [
 *                      {
 *                          "type": "main",
 *                          "position": {
 *                              "lat": 25.05493,
 *                              "lon": 121.53661
 *                          }
 *                      }
 *                  ],
 *                  "available_options": [
 *                      {
 *                          "food_name": "Big Mac",
 *                          "serving_qty": 1,
 *                          "serving_unit": "Serving",
 *                          "serving_weight_grams": null,
 *                          "calories": 590,
 *                          "sodium_mg": 1050,
 *                          "photo": {
 *                              "thumb": "https://d2eawub7utcl6.cloudfront.net/images/nix-apple-grey.png",
 *                              "highres": null,
 *                              "is_user_uploaded": false
 *                          },
 *                          "updated_at": "2023-06-21T18:41:12+00:00"
 *                      }
 *                  ]
 *              }
 *          ]
 *  }
 *
 */
export const fuzzySearchFoodByLocation = async (query, lat, long, limit = 5, radius = 1000) => {
	const nutritionData = await searchFoodWithSodiumThreshold(query);
	let foods = [];
	const restaurantOptions = nutritionData.branded || [];

	for (const element of restaurantOptions) {
		const foodResult = await searchFoodByItem(element.nix_item_id);
		console.log('food result', foodResult);

		if (foodResult.foods) {
			const currentFood = foodResult.foods[0];
			const brandName = currentFood.nix_brand_name;
			const nearbyPlacesResponse = await getNearbyPlaces(brandName, lat, long);
			console.log('nearby', nearbyPlacesResponse);
			const filteredLocations = nearbyPlacesResponse.filter((location) =>
				location.poi.brands.some((brand) => brand.name === brandName)
			);
			console.log('filtered locations', filteredLocations);

			const uniqueLocations = filteredLocations.filter(
				(location) =>
					!foods.some((food) =>
						food.locations.some(
							(existingLocation) => existingLocation.id === location.id
						)
					)
			);

			if (uniqueLocations.length > 0) {
				foods.push({
					food_name: currentFood.food_name,
					serving_qty: currentFood.serving_qty,
					serving_unit: currentFood.serving_unit,
					calories: currentFood.nf_calories,
					sodium_mg: currentFood.nf_sodium,
					sugar_mg: currentFood.nf_sugar,
					photo: currentFood.photo,
					updated_at: currentFood.updated_at,
					brand_name: brandName,
					locations: uniqueLocations,
				});
			}
		}
	}

	const groupedByBrand = {};
	foods.forEach((food) => {
		if (!groupedByBrand[food.brand_name]) {
			groupedByBrand[food.brand_name] = {
				restaurant_name: food.brand_name,
				locations: [],
				available_options: [],
			};
		}
		groupedByBrand[food.brand_name].available_options.push(food);
		groupedByBrand[food.brand_name].locations.push(...food.locations);
	});

	const finalResult = {
		restaurants: Object.values(groupedByBrand),
	};
	console.log(finalResult);

	return finalResult;
};
