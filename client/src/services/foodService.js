import axios from 'axios';

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
			'x-app-id': process.env.NUTRITIONIX_API_ID,
			'x-app-key': process.env.NUTRITIONIX_API_KEY,
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
