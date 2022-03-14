import { createContext, useEffect, useState } from "react";

const context = createContext();

const { Provider } = context;

const CustomProvider = ({ children }) => {

    const testMode = false;

    const test__initialResponse = {
        "data": {
            "results": [
                {
                    "id": 637876,
                    "title": "Chicken 65",
                    "image": "https://spoonacular.com/recipeImages/637876-312x231.jpg",
                    "imageType": "jpg"
                },
                {
                    "id": 716342,
                    "title": "Chicken Suya",
                    "image": "https://spoonacular.com/recipeImages/716342-312x231.jpg",
                    "imageType": "jpg"
                },
                {
                    "id": 638420,
                    "title": "Chicken Wings",
                    "image": "https://spoonacular.com/recipeImages/638420-312x231.jpg",
                    "imageType": "jpg"
                },
                {
                    "id": 638308,
                    "title": "Chicken Satay",
                    "image": "https://spoonacular.com/recipeImages/638308-312x231.jpg",
                    "imageType": "jpg"
                },
                {
                    "id": 638086,
                    "title": "Chicken Fingers",
                    "image": "https://spoonacular.com/recipeImages/638086-312x231.jpg",
                    "imageType": "jpg"
                },
                {
                    "id": 638174,
                    "title": "Chicken Lo Mein",
                    "image": "https://spoonacular.com/recipeImages/638174-312x231.jpg",
                    "imageType": "jpg"
                },
                {
                    "id": 638125,
                    "title": "Chicken In A Pot",
                    "image": "https://spoonacular.com/recipeImages/638125-312x231.jpg",
                    "imageType": "jpg"
                },
                {
                    "id": 667707,
                    "title": "chicken marbella",
                    "image": "https://spoonacular.com/recipeImages/667707-312x231.jpg",
                    "imageType": "jpg"
                },
                {
                    "id": 638257,
                    "title": "Chicken Porridge",
                    "image": "https://spoonacular.com/recipeImages/638257-312x231.jpg",
                    "imageType": "jpg"
                },
                {
                    "id": 637999,
                    "title": "Chicken Burritos",
                    "image": "https://spoonacular.com/recipeImages/637999-312x231.jpg",
                    "imageType": "jpg"
                }
            ],
            "offset": 0,
            "number": 10,
            "totalResults": 633
        },
        "status": 200,
        "statusText": "",
        "headers": {
            "content-type": "application/json"
        },
        "config": {
            "transitional": {
                "silentJSONParsing": true,
                "forcedJSONParsing": true,
                "clarifyTimeoutError": false
            },
            "transformRequest": [
                null
            ],
            "transformResponse": [
                null
            ],
            "timeout": 0,
            "xsrfCookieName": "XSRF-TOKEN",
            "xsrfHeaderName": "X-XSRF-TOKEN",
            "maxContentLength": -1,
            "maxBodyLength": -1,
            "headers": {
                "Accept": "application/json, text/plain, */*"
            },
            "params": {
                "apiKey": "ccd446e043f74c7cae7790969ca272ca",
                "query": "chicken"
            },
            "method": "get",
            "url": "https://api.spoonacular.com/recipes/complexSearch"
        },
        "request": {}
    }

    const test__finalResponse = [
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "weightWatcherSmartPoints": 13,
            "gaps": "no",
            "lowFodmap": false,
            "aggregateLikes": 8,
            "spoonacularScore": 64,
            "healthScore": 17,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 441.82,
            "extendedIngredients": [
                {
                    "id": 23657,
                    "aisle": "Meat",
                    "image": "flank-steak.jpg",
                    "consistency": "solid",
                    "name": "flank steaks",
                    "nameClean": "flank steak",
                    "original": "4 veal or beef flank steaks (600 g)",
                    "originalName": "veal or beef flank steaks",
                    "amount": 600,
                    "unit": "g",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.323,
                            "unitShort": "lb",
                            "unitLong": "pounds"
                        },
                        "metric": {
                            "amount": 600,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 1042027,
                    "aisle": null,
                    "image": "seasoning.png",
                    "consistency": "solid",
                    "name": "seasoning",
                    "nameClean": "seasoning",
                    "original": "2 tsp Vegeta Natur or similar seasoning",
                    "originalName": "Vegeta Natur or similar seasoning",
                    "amount": 2,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 10010123,
                    "aisle": "Meat",
                    "image": "proscuitto.jpg",
                    "consistency": "solid",
                    "name": "prosciutto",
                    "nameClean": "prosciutto",
                    "original": "100 g prosciutto, cut into thin slices",
                    "originalName": "prosciutto, cut into thin slices",
                    "amount": 100,
                    "unit": "g",
                    "meta": [
                        "cut into thin slices"
                    ],
                    "measures": {
                        "us": {
                            "amount": 3.527,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 100,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 99226,
                    "aisle": "Produce",
                    "image": "fresh-sage.png",
                    "consistency": "solid",
                    "name": "sage leaves",
                    "nameClean": "sage",
                    "original": "4 sage leaves",
                    "originalName": "sage leaves",
                    "amount": 4,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 4,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 4,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 20027,
                    "aisle": "Baking",
                    "image": "white-powder.jpg",
                    "consistency": "solid",
                    "name": "corn starch",
                    "nameClean": "corn starch",
                    "original": "1 tsp corn starch",
                    "originalName": "corn starch",
                    "amount": 1,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 14106,
                    "aisle": "Alcoholic Beverages",
                    "image": "white-wine.jpg",
                    "consistency": "liquid",
                    "name": "white wine",
                    "nameClean": "dry white wine",
                    "original": "200 ml white wine",
                    "originalName": "white wine",
                    "amount": 200,
                    "unit": "ml",
                    "meta": [
                        "white"
                    ],
                    "measures": {
                        "us": {
                            "amount": 6.764,
                            "unitShort": "fl. oz",
                            "unitLong": "fl. ozs"
                        },
                        "metric": {
                            "amount": 200,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 4053,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "olive-oil.jpg",
                    "consistency": "liquid",
                    "name": "olive oil",
                    "nameClean": "olive oil",
                    "original": "2 Tbs olive oil",
                    "originalName": "olive oil",
                    "amount": 2,
                    "unit": "Tbs",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "Tbs",
                            "unitLong": "Tbs"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "Tbs",
                            "unitLong": "Tbs"
                        }
                    }
                },
                {
                    "id": 1001,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "solid",
                    "name": "butter",
                    "nameClean": "butter",
                    "original": "2 Tbs butter",
                    "originalName": "butter",
                    "amount": 2,
                    "unit": "Tbs",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "Tbs",
                            "unitLong": "Tbs"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "Tbs",
                            "unitLong": "Tbs"
                        }
                    }
                },
                {
                    "id": 10211821,
                    "aisle": "Produce",
                    "image": "yellow-bell-pepper.jpg",
                    "consistency": "solid",
                    "name": "bell pepper",
                    "nameClean": "bell pepper",
                    "original": "Black pepper",
                    "originalName": "Black pepper",
                    "amount": 1,
                    "unit": "serving",
                    "meta": [
                        "black"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        }
                    }
                }
            ],
            "id": 651326,
            "title": "Meat rolls with prosciutto and sage",
            "readyInMinutes": 45,
            "servings": 4,
            "sourceUrl": "https://www.foodista.com/recipe/ZFFJCY6F/meat-rolls-with-prosciutto-and-sage",
            "image": "https://spoonacular.com/recipeImages/651326-556x370.jpg",
            "imageType": "jpg",
            "summary": "Meat rolls with prosciutto and sage takes about <b>roughly 45 minutes</b> from beginning to end. Watching your figure? This gluten free recipe has <b>478 calories</b>, <b>36g of protein</b>, and <b>30g of fat</b> per serving. This recipe serves 4. For <b>$4.42 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. It is brought to you by Foodista. 8 people were glad they tried this recipe. A mixture of beef flank steaks, bell pepper, olive oil, and a handful of other ingredients are all it takes to make this recipe so delicious. All things considered, we decided this recipe <b>deserves a spoonacular score of 63%</b>. This score is solid. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/chicken-with-prosciutto-and-sage-74220\">Chicken With Prosciutto And Sage</a>, <a href=\"https://spoonacular.com/recipes/chicken-with-prosciutto-sage-559450\">Chicken with Prosciutto & Sage</a>, and <a href=\"https://spoonacular.com/recipes/chicken-with-prosciutto-and-sage-46770\">Chicken With Prosciutto And Sage</a>.",
            "cuisines": [],
            "dishTypes": [],
            "diets": [
                "gluten free"
            ],
            "occasions": [],
            "winePairing": {
                "pairedWines": [],
                "pairingText": "",
                "productMatches": []
            },
            "instructions": "Wash, dry and flatten the steaks.\nRub one side of each steak with Vegeta Natur.\nCover the other side of the steak with a slice of prosciutto and a sage leaf. Roll the steak and secure the roll with wooden or metal toothpicks.\nWhisk corn starch into the wine.\nSaut the rolls on all sides in the hot mixture of oil and butter until golden, then stir in wine and season with pepper.\nCover and simmer the rolls over low heat for 20 minutes or until very tender.\nRemove the toothpicks before serving.",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Wash, dry and flatten the steaks.",
                            "ingredients": [
                                {
                                    "id": 23232,
                                    "name": "steak",
                                    "localizedName": "steak",
                                    "image": "ribeye-raw.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 2,
                            "step": "Rub one side of each steak with Vegeta Natur.",
                            "ingredients": [
                                {
                                    "id": 98990,
                                    "name": "vegeta",
                                    "localizedName": "vegeta",
                                    "image": "vegeta.png"
                                },
                                {
                                    "id": 23232,
                                    "name": "steak",
                                    "localizedName": "steak",
                                    "image": "ribeye-raw.jpg"
                                },
                                {
                                    "id": 1012034,
                                    "name": "dry seasoning rub",
                                    "localizedName": "dry seasoning rub",
                                    "image": "seasoning.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 3,
                            "step": "Cover the other side of the steak with a slice of prosciutto and a sage leaf.",
                            "ingredients": [
                                {
                                    "id": 10010123,
                                    "name": "prosciutto",
                                    "localizedName": "prosciutto",
                                    "image": "proscuitto.jpg"
                                },
                                {
                                    "id": 23232,
                                    "name": "steak",
                                    "localizedName": "steak",
                                    "image": "ribeye-raw.jpg"
                                },
                                {
                                    "id": 99226,
                                    "name": "sage",
                                    "localizedName": "sage",
                                    "image": "fresh-sage.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 4,
                            "step": "Roll the steak and secure the roll with wooden or metal toothpicks.",
                            "ingredients": [
                                {
                                    "id": 23232,
                                    "name": "steak",
                                    "localizedName": "steak",
                                    "image": "ribeye-raw.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "roll",
                                    "localizedName": "roll",
                                    "image": "dinner-yeast-rolls.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404644,
                                    "name": "toothpicks",
                                    "localizedName": "toothpicks",
                                    "image": "toothpicks.jpg"
                                }
                            ]
                        },
                        {
                            "number": 5,
                            "step": "Whisk corn starch into the wine.",
                            "ingredients": [
                                {
                                    "id": 20027,
                                    "name": "corn starch",
                                    "localizedName": "corn starch",
                                    "image": "white-powder.jpg"
                                },
                                {
                                    "id": 14084,
                                    "name": "wine",
                                    "localizedName": "wine",
                                    "image": "red-wine.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404661,
                                    "name": "whisk",
                                    "localizedName": "whisk",
                                    "image": "whisk.png"
                                }
                            ]
                        },
                        {
                            "number": 6,
                            "step": "Saut the rolls on all sides in the hot mixture of oil and butter until golden, then stir in wine and season with pepper.",
                            "ingredients": [
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                },
                                {
                                    "id": 1002030,
                                    "name": "pepper",
                                    "localizedName": "pepper",
                                    "image": "pepper.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "roll",
                                    "localizedName": "roll",
                                    "image": "dinner-yeast-rolls.jpg"
                                },
                                {
                                    "id": 14084,
                                    "name": "wine",
                                    "localizedName": "wine",
                                    "image": "red-wine.jpg"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 7,
                            "step": "Cover and simmer the rolls over low heat for 20 minutes or until very tender.",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "roll",
                                    "localizedName": "roll",
                                    "image": "dinner-yeast-rolls.jpg"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 20,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 8,
                            "step": "Remove the toothpicks before serving.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404644,
                                    "name": "toothpicks",
                                    "localizedName": "toothpicks",
                                    "image": "toothpicks.jpg"
                                }
                            ]
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/meat-rolls-with-prosciutto-and-sage-651326"
        },
        {
            "vegetarian": false,
            "vegan": true,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": true,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "weightWatcherSmartPoints": 10,
            "gaps": "no",
            "lowFodmap": false,
            "aggregateLikes": 15,
            "spoonacularScore": 94,
            "healthScore": 65,
            "creditsText": "Jen West",
            "sourceName": "Pink When",
            "pricePerServing": 500.33,
            "extendedIngredients": [
                {
                    "id": 1002030,
                    "aisle": "Spices and Seasonings",
                    "image": "pepper.jpg",
                    "consistency": "solid",
                    "name": "black pepper",
                    "nameClean": "black pepper",
                    "original": "1 tsp black pepper",
                    "originalName": "black pepper",
                    "amount": 1,
                    "unit": "tsp",
                    "meta": [
                        "black"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 10011693,
                    "aisle": "Canned and Jarred",
                    "image": "tomatoes-canned.png",
                    "consistency": "solid",
                    "name": "canned tomatoes",
                    "nameClean": "canned tomatoes",
                    "original": "16 oz can crushed tomatoes",
                    "originalName": "crushed tomatoes",
                    "amount": 16,
                    "unit": "oz",
                    "meta": [
                        "crushed",
                        "canned"
                    ],
                    "measures": {
                        "us": {
                            "amount": 16,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 453.592,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 1034053,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "olive-oil.jpg",
                    "consistency": "liquid",
                    "name": "extra virgin olive oil",
                    "nameClean": "extra virgin olive oil",
                    "original": "extra virgin olive oil",
                    "originalName": "extra virgin olive oil",
                    "amount": 2,
                    "unit": "servings",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 2044,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "basil.jpg",
                    "consistency": "solid",
                    "name": "fresh basil",
                    "nameClean": "fresh basil",
                    "original": "1 Tbsp fresh chopped basil",
                    "originalName": "fresh chopped basil",
                    "amount": 1,
                    "unit": "Tbsp",
                    "meta": [
                        "fresh",
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 1022020,
                    "aisle": "Spices and Seasonings",
                    "image": "garlic-powder.png",
                    "consistency": "solid",
                    "name": "garlic powder",
                    "nameClean": "garlic powder",
                    "original": "1 tsp garlic powder (or saute and sub 1 glove fresh garlice, minced)",
                    "originalName": "garlic powder (or saute and sub 1 glove fresh garlice, minced)",
                    "amount": 1,
                    "unit": "tsp",
                    "meta": [
                        "fresh",
                        "minced",
                        "(or saute and sub 1 glove garlice, )"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 23557,
                    "aisle": "Meat",
                    "image": "fresh-ground-beef.jpg",
                    "consistency": "solid",
                    "name": "lean ground beef",
                    "nameClean": "95 percent lean ground beef",
                    "original": "1 pound lean ground beef",
                    "originalName": "lean ground beef",
                    "amount": 1,
                    "unit": "pound",
                    "meta": [
                        "lean"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "lb",
                            "unitLong": "pound"
                        },
                        "metric": {
                            "amount": 453.592,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 2026,
                    "aisle": "Spices and Seasonings",
                    "image": "onion-powder.jpg",
                    "consistency": "solid",
                    "name": "onion powder",
                    "nameClean": "onion powder",
                    "original": "1 tsp onion powder (or saute and sub 1/4 cup chopped onion)",
                    "originalName": "onion powder (or saute and sub 1/4 cup chopped onion)",
                    "amount": 1,
                    "unit": "tsp",
                    "meta": [
                        "chopped",
                        "(or saute and sub)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "solid",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "salt to taste",
                    "originalName": "salt to taste",
                    "amount": 2,
                    "unit": "servings",
                    "meta": [
                        "to taste"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 11492,
                    "aisle": "Produce",
                    "image": "spaghetti-squash.jpg",
                    "consistency": "solid",
                    "name": "spaghetti squash",
                    "nameClean": "spaghetti squash",
                    "original": "1 spaghetti squash",
                    "originalName": "spaghetti squash",
                    "amount": 1,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                }
            ],
            "id": 795514,
            "title": "Spaghetti Squash & Tomato Basil Meat Sauce",
            "readyInMinutes": 75,
            "servings": 2,
            "sourceUrl": "http://www.pinkwhen.com/spaghetti-squash-tomato-basil-meat-sauce/",
            "image": "https://spoonacular.com/recipeImages/795514-556x370.jpg",
            "imageType": "jpg",
            "summary": "Spaghetti Squash & Tomato Basil Meat Sauce might be just the main course you are searching for. This recipe serves 2 and costs $5.0 per serving. Watching your figure? This caveman, gluten free, dairy free, and primal recipe has <b>669 calories</b>, <b>56g of protein</b>, and <b>29g of fat</b> per serving. 13 people were impressed by this recipe. If you have basil, ground beef, salt, and a few other ingredients on hand, you can make it. To use up the salt you could follow this main course with the <a href=\"https://spoonacular.com/recipes/apple-turnovers-recipe-48175\">Apple Turnovers Recipe</a> as a dessert. From preparation to the plate, this recipe takes approximately <b>1 hour and 15 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 95%</b>. This score is excellent. Try <a href=\"https://spoonacular.com/recipes/spaghetti-squash-with-tomato-basil-sauce-25163\">Spaghetti Squash with Tomato-Basil Sauce</a>, <a href=\"https://spoonacular.com/recipes/spaghetti-squash-with-vegan-tomato-basil-cream-sauce-627226\">Spaghetti Squash with Vegan Tomato Basil Cream Sauce</a>, and <a href=\"https://spoonacular.com/recipes/spaghetti-squash-with-meat-sauce-24939\">Spaghetti Squash With Meat Sauce</a> for similar recipes.",
            "cuisines": [],
            "dishTypes": [
                "sauce"
            ],
            "diets": [
                "gluten free",
                "dairy free",
                "paleolithic",
                "primal"
            ],
            "occasions": [],
            "winePairing": {},
            "instructions": "<ol><li><span></span>Heat the oven to 400. </li><li>Halve the squash, scoop and clean the seeds inside. </li><li>Drizzle with a tsp of extra virgin olive oil in each half, add a little salt. </li><li>Take each half and turn face down on a prepared cookie sheet and bake in the oven for 50 minutes. </li><li>Remove and allow to cool for 5-10 minutes. Take a fork and start to shred the insides.</li><li>While roasting the spaghetti squash, brown the lean ground beef. </li><li>Saute the onion and garlic if using fresh veggies. </li><li>Drain the meat sauce and then mix the onion, garlic, black pepper, and meat and place on low to medium heat. </li><li>Add the crushed tomatoes, basil, and pepper, stir. </li><li>Allow to simmer while spaghetti squash is roasting, stirring frequently.</li><li>Scoop the spaghetti squash onto a bowl, cover with meat sauce, and add a pinch of parmesan if desired. </li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Heat the oven to 40",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Halve the squash, scoop and clean the seeds inside.",
                            "ingredients": [
                                {
                                    "id": 10011485,
                                    "name": "squash",
                                    "localizedName": "squash",
                                    "image": "butternut-squash.jpg"
                                },
                                {
                                    "id": 93818,
                                    "name": "seeds",
                                    "localizedName": "seeds",
                                    "image": "sunflower-seeds.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 3,
                            "step": "Drizzle with a tsp of extra virgin olive oil in each half, add a little salt. Take each half and turn face down on a prepared cookie sheet and bake in the oven for 50 minutes.",
                            "ingredients": [
                                {
                                    "id": 1034053,
                                    "name": "extra virgin olive oil",
                                    "localizedName": "extra virgin olive oil",
                                    "image": "olive-oil.jpg"
                                },
                                {
                                    "id": 10118192,
                                    "name": "cookies",
                                    "localizedName": "cookies",
                                    "image": "shortbread-cookies.jpg"
                                },
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "localizedName": "salt",
                                    "image": "salt.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404727,
                                    "name": "baking sheet",
                                    "localizedName": "baking sheet",
                                    "image": "baking-sheet.jpg"
                                },
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ],
                            "length": {
                                "number": 50,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 4,
                            "step": "Remove and allow to cool for 5-10 minutes. Take a fork and start to shred the insides.While roasting the spaghetti squash, brown the lean ground beef.",
                            "ingredients": [
                                {
                                    "id": 23557,
                                    "name": "lean ground beef",
                                    "localizedName": "lean ground beef",
                                    "image": "fresh-ground-beef.jpg"
                                },
                                {
                                    "id": 11492,
                                    "name": "spaghetti squash",
                                    "localizedName": "spaghetti squash",
                                    "image": "spaghetti-squash.jpg"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 10,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 5,
                            "step": "Saute the onion and garlic if using fresh veggies.",
                            "ingredients": [
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 6,
                            "step": "Drain the meat sauce and then mix the onion, garlic, black pepper, and meat and place on low to medium heat.",
                            "ingredients": [
                                {
                                    "id": 1002030,
                                    "name": "black pepper",
                                    "localizedName": "black pepper",
                                    "image": "pepper.jpg"
                                },
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                },
                                {
                                    "id": 0,
                                    "name": "sauce",
                                    "localizedName": "sauce",
                                    "image": ""
                                },
                                {
                                    "id": 1065062,
                                    "name": "meat",
                                    "localizedName": "meat",
                                    "image": "whole-chicken.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 7,
                            "step": "Add the crushed tomatoes, basil, and pepper, stir. Allow to simmer while spaghetti squash is roasting, stirring frequently.Scoop the spaghetti squash onto a bowl, cover with meat sauce, and add a pinch of parmesan if desired.",
                            "ingredients": [
                                {
                                    "id": 11693,
                                    "name": "crushed tomatoes",
                                    "localizedName": "crushed tomatoes",
                                    "image": "tomatoes-canned.png"
                                },
                                {
                                    "id": 11492,
                                    "name": "spaghetti squash",
                                    "localizedName": "spaghetti squash",
                                    "image": "spaghetti-squash.jpg"
                                },
                                {
                                    "id": 1033,
                                    "name": "parmesan",
                                    "localizedName": "parmesan",
                                    "image": "parmesan.jpg"
                                },
                                {
                                    "id": 1002030,
                                    "name": "pepper",
                                    "localizedName": "pepper",
                                    "image": "pepper.jpg"
                                },
                                {
                                    "id": 2044,
                                    "name": "basil",
                                    "localizedName": "basil",
                                    "image": "basil.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "sauce",
                                    "localizedName": "sauce",
                                    "image": ""
                                },
                                {
                                    "id": 1065062,
                                    "name": "meat",
                                    "localizedName": "meat",
                                    "image": "whole-chicken.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/spaghetti-squash-tomato-basil-meat-sauce-795514"
        },
        {
            "vegetarian": false,
            "vegan": true,
            "glutenFree": false,
            "dairyFree": false,
            "veryHealthy": true,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "weightWatcherSmartPoints": 31,
            "gaps": "no",
            "lowFodmap": false,
            "aggregateLikes": 1,
            "spoonacularScore": 84,
            "healthScore": 75,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 610.47,
            "extendedIngredients": [
                {
                    "id": 10023567,
                    "aisle": "Meat",
                    "image": "fresh-ground-beef.jpg",
                    "consistency": "solid",
                    "name": "ground sirloin",
                    "nameClean": "ground sirloin",
                    "original": "1 1/2 pounds ground sirloin",
                    "originalName": "ground sirloin",
                    "amount": 1.5,
                    "unit": "pounds",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.5,
                            "unitShort": "lb",
                            "unitLong": "pounds"
                        },
                        "metric": {
                            "amount": 680.389,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 1123,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg.png",
                    "consistency": "solid",
                    "name": "egg",
                    "nameClean": "egg",
                    "original": "1 large egg beaten",
                    "originalName": "egg beaten",
                    "amount": 1,
                    "unit": "large",
                    "meta": [
                        "beaten"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "large",
                            "unitLong": "large"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "large",
                            "unitLong": "large"
                        }
                    }
                },
                {
                    "id": 18079,
                    "aisle": "Pasta and Rice",
                    "image": "breadcrumbs.jpg",
                    "consistency": "solid",
                    "name": "bread crumbs",
                    "nameClean": "breadcrumbs",
                    "original": "1 cup Italian bread crumbs",
                    "originalName": "Italian bread crumbs",
                    "amount": 1,
                    "unit": "cup",
                    "meta": [
                        "italian"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 11282,
                    "aisle": "Produce",
                    "image": "brown-onion.png",
                    "consistency": "solid",
                    "name": "onion",
                    "nameClean": "onion",
                    "original": "1 medium onion chopped fine",
                    "originalName": "onion chopped fine",
                    "amount": 1,
                    "unit": "medium",
                    "meta": [
                        "chopped",
                        "fine"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "medium",
                            "unitLong": "medium"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "medium",
                            "unitLong": "medium"
                        }
                    }
                },
                {
                    "id": 11215,
                    "aisle": "Produce",
                    "image": "garlic.png",
                    "consistency": "solid",
                    "name": "garlic cloves",
                    "nameClean": "garlic",
                    "original": "4 garlic cloves crushed, minced",
                    "originalName": "garlic cloves crushed, minced",
                    "amount": 4,
                    "unit": "",
                    "meta": [
                        "minced",
                        "crushed"
                    ],
                    "measures": {
                        "us": {
                            "amount": 4,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 4,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 1032009,
                    "aisle": "Spices and Seasonings",
                    "image": "red-pepper-flakes.jpg",
                    "consistency": "solid",
                    "name": "red pepper flakes",
                    "nameClean": "red pepper flakes",
                    "original": "1/2 teaspoon crushed red pepper flakes",
                    "originalName": "crushed red pepper flakes",
                    "amount": 0.5,
                    "unit": "teaspoon",
                    "meta": [
                        "red",
                        "crushed"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 6971,
                    "aisle": "Condiments",
                    "image": "dark-sauce.jpg",
                    "consistency": "liquid",
                    "name": "worcestershire sauce",
                    "nameClean": "worcestershire sauce",
                    "original": "2 teaspoons Worcestershire sauce",
                    "originalName": "Worcestershire sauce",
                    "amount": 2,
                    "unit": "teaspoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 11297,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "parsley.jpg",
                    "consistency": "solid",
                    "name": "flat leaf parsley leaves",
                    "nameClean": "parsley",
                    "original": "1/4 cup chopped flat-leaf parsley leaves",
                    "originalName": "chopped flat-leaf parsley leaves",
                    "amount": 0.25,
                    "unit": "cup",
                    "meta": [
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 59.147,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1033,
                    "aisle": "Cheese",
                    "image": "parmesan.jpg",
                    "consistency": "solid",
                    "name": "parmigiano reggiano",
                    "nameClean": "parmesan",
                    "original": "1/4 cup grated Parmigiano or Romano",
                    "originalName": "grated Parmigiano or Romano",
                    "amount": 0.25,
                    "unit": "cup",
                    "meta": [
                        "grated"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 59.147,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1002047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "solid",
                    "name": "coarse salt",
                    "nameClean": "coarse salt",
                    "original": "Coarse salt to taste",
                    "originalName": "Coarse salt to taste",
                    "amount": 1,
                    "unit": "serving",
                    "meta": [
                        "to taste"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        }
                    }
                },
                {
                    "id": 10211821,
                    "aisle": "Produce",
                    "image": "yellow-bell-pepper.jpg",
                    "consistency": "solid",
                    "name": "bell pepper",
                    "nameClean": "bell pepper",
                    "original": "Freshly-ground black pepper to taste",
                    "originalName": "Freshly-ground black pepper to taste",
                    "amount": 1,
                    "unit": "serving",
                    "meta": [
                        "black",
                        "freshly-ground",
                        "to taste"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        }
                    }
                },
                {
                    "id": 4053,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "olive-oil.jpg",
                    "consistency": "liquid",
                    "name": "olive oil",
                    "nameClean": "olive oil",
                    "original": "2 tablespoons extra-virgin olive oil",
                    "originalName": "extra-virgin olive oil",
                    "amount": 2,
                    "unit": "tablespoons",
                    "meta": [
                        "extra-virgin"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 11215,
                    "aisle": "Produce",
                    "image": "garlic.png",
                    "consistency": "solid",
                    "name": "garlic cloves",
                    "nameClean": "garlic",
                    "original": "4 garlic cloves crushed, chopped",
                    "originalName": "garlic cloves crushed, chopped",
                    "amount": 4,
                    "unit": "",
                    "meta": [
                        "crushed",
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 4,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 4,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 11297,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "parsley.jpg",
                    "consistency": "solid",
                    "name": "flat leaf parsley leaves",
                    "nameClean": "parsley",
                    "original": "2 tablespoons chopped flat-leaf parsley leaves",
                    "originalName": "chopped flat-leaf parsley leaves",
                    "amount": 2,
                    "unit": "tablespoons",
                    "meta": [
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 2027,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "oregano.jpg",
                    "consistency": "solid",
                    "name": "oregano",
                    "nameClean": "oregano",
                    "original": "1/2 teaspoon dried oregano",
                    "originalName": "dried oregano",
                    "amount": 0.5,
                    "unit": "teaspoon",
                    "meta": [
                        "dried"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 10011693,
                    "aisle": "Canned and Jarred",
                    "image": "tomatoes-canned.png",
                    "consistency": "solid",
                    "name": "canned tomatoes",
                    "nameClean": "canned tomatoes",
                    "original": "1 can crushed tomatoes - (28 oz)",
                    "originalName": "can crushed tomatoes",
                    "amount": 28,
                    "unit": "oz",
                    "meta": [
                        "crushed",
                        "canned"
                    ],
                    "measures": {
                        "us": {
                            "amount": 28,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 793.787,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 10011693,
                    "aisle": "Canned and Jarred",
                    "image": "tomatoes-canned.png",
                    "consistency": "solid",
                    "name": "canned tomatoes",
                    "nameClean": "canned tomatoes",
                    "original": "1 can chunky style crushed tomatoes - (14 oz)",
                    "originalName": "can chunky style crushed tomatoes",
                    "amount": 14,
                    "unit": "oz",
                    "meta": [
                        "chunky style",
                        "crushed",
                        "canned"
                    ],
                    "measures": {
                        "us": {
                            "amount": 14,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 396.893,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 18349,
                    "aisle": "Bakery/Bread",
                    "image": "french-roll-or-crusty-roll.jpg",
                    "consistency": "solid",
                    "name": "crusty rolls",
                    "nameClean": "crusty roll",
                    "original": "4 semolina crusty sub rolls",
                    "originalName": "semolina crusty sub rolls",
                    "amount": 4,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 4,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 4,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 1035,
                    "aisle": "Cheese",
                    "image": "provolone-slices.jpg",
                    "consistency": "solid",
                    "name": "provolone",
                    "nameClean": "provolone",
                    "original": "10 ounces shredded provolone or Italian 4-cheese",
                    "originalName": "shredded provolone or Italian 4-cheese",
                    "amount": 10,
                    "unit": "ounces",
                    "meta": [
                        "shredded",
                        "italian"
                    ],
                    "measures": {
                        "us": {
                            "amount": 10,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 283.495,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 10020088,
                    "aisle": "Pasta and Rice",
                    "image": "rice-wild-uncooked.png",
                    "consistency": "solid",
                    "name": "grain blend",
                    "nameClean": "grain blend",
                    "original": "blend",
                    "originalName": "blend",
                    "amount": 1,
                    "unit": "serving",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        }
                    }
                },
                {
                    "id": 2044,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "basil.jpg",
                    "consistency": "solid",
                    "name": "basil",
                    "nameClean": "fresh basil",
                    "original": "Shredded basil (sweet) or",
                    "originalName": "Shredded basil (sweet) or",
                    "amount": 1,
                    "unit": "serving",
                    "meta": [
                        "shredded",
                        "sweet",
                        "()"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        }
                    }
                },
                {
                    "id": 11959,
                    "aisle": "Produce",
                    "image": "arugula-or-rocket-salad.jpg",
                    "consistency": "solid",
                    "name": "arugula leaves",
                    "nameClean": "arugula",
                    "original": "shredded arugula (spicy) leaves for garnish",
                    "originalName": "shredded arugula (spicy) for garnish",
                    "amount": 1,
                    "unit": "leaves",
                    "meta": [
                        "shredded",
                        "for garnish",
                        "(spicy)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "leaf",
                            "unitLong": "leave"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "leaf",
                            "unitLong": "leave"
                        }
                    }
                },
                {
                    "id": 11408,
                    "aisle": "Frozen",
                    "image": "french-fries-isolated.jpg",
                    "consistency": "solid",
                    "name": "fries",
                    "nameClean": "french fries",
                    "original": "Oven Fries (see recipe)",
                    "originalName": "Oven Fries (see recipe)",
                    "amount": 1,
                    "unit": "serving",
                    "meta": [
                        "(see recipe)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        }
                    }
                }
            ],
            "id": 651342,
            "title": "Meatball Subs",
            "readyInMinutes": 45,
            "servings": 4,
            "sourceUrl": "https://www.foodista.com/recipe/4KC2D5HC/meatball-subs",
            "image": "https://spoonacular.com/recipeImages/651342-556x370.jpg",
            "imageType": "jpg",
            "summary": "The recipe Meatball Subs can be made <b>in about approximately 45 minutes</b>. This recipe serves 4. One portion of this dish contains approximately <b>69g of protein</b>, <b>59g of fat</b>, and a total of <b>1117 calories</b>. For <b>$6.1 per serving</b>, this recipe <b>covers 61%</b> of your daily requirements of vitamins and minerals. Only a few people made this recipe, and 1 would say it hit the spot. It is brought to you by Foodista. If you have , coarse salt, basil or, and a few other ingredients on hand, you can make it. It works well as a main course. Overall, this recipe earns a <b>super spoonacular score of 84%</b>. Similar recipes are <a href=\"https://spoonacular.com/recipes/meatball-subs-386557\">Meatball Subs</a>, <a href=\"https://spoonacular.com/recipes/meatball-subs-964246\">Meatball Subs</a>, and <a href=\"https://spoonacular.com/recipes/meatball-subs-519319\">Meatball Subs</a>.",
            "cuisines": [],
            "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [],
            "occasions": [],
            "winePairing": {
                "pairedWines": [],
                "pairingText": "",
                "productMatches": []
            },
            "instructions": "Preheat oven to 450 degrees.\nPlace ground sirloin in a large mixing bowl and punch a well into the center of meat. Fill well with the egg, bread crumbs, onion, garlic, red pepper flakes, Worcestershire, parsley, cheese, and a little salt and pepper. Mix up meatball ingredients until well combined, yet not over-mixed. Divide mix into 4 equal parts, roll each part into 4 balls and space equally onto a nonstick baking sheet. Place meatballs in oven and roast about 12 minutes. Break a meatball open and make sure meat is cooked through before removing from the oven.\nHeat a medium saucepan over medium heat. Add oil and garlic. When garlic starts sizzling, add herbs and crushed pepper. Allow oil to infuse for half a minute, then stir in the tomatoes and season sauce with salt and pepper. Bring sauce to a bubble, reduce heat, and simmer until meatballs are removed from oven.\nCombine meatballs and sauce and pile into sub rolls, 4 meatballs per sub. Top with shredded cheese and place subs under broiler to melt cheese. Top with shredded basil or arugula and serve with a pile of Oven Fries.\nThis recipe yields 4 servings.\n0 0",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Preheat oven to 450 degrees.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Place ground sirloin in a large mixing bowl and punch a well into the center of meat. Fill well with the egg, bread crumbs, onion, garlic, red pepper flakes, Worcestershire, parsley, cheese, and a little salt and pepper.",
                            "ingredients": [
                                {
                                    "id": 1032009,
                                    "name": "red pepper flakes",
                                    "localizedName": "red pepper flakes",
                                    "image": "red-pepper-flakes.jpg"
                                },
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                },
                                {
                                    "id": 10023567,
                                    "name": "ground sirloin",
                                    "localizedName": "ground sirloin",
                                    "image": "fresh-ground-beef.jpg"
                                },
                                {
                                    "id": 6971,
                                    "name": "worcestershire sauce",
                                    "localizedName": "worcestershire sauce",
                                    "image": "dark-sauce.jpg"
                                },
                                {
                                    "id": 18079,
                                    "name": "breadcrumbs",
                                    "localizedName": "breadcrumbs",
                                    "image": "breadcrumbs.jpg"
                                },
                                {
                                    "id": 11297,
                                    "name": "parsley",
                                    "localizedName": "parsley",
                                    "image": "parsley.jpg"
                                },
                                {
                                    "id": 1041009,
                                    "name": "cheese",
                                    "localizedName": "cheese",
                                    "image": "cheddar-cheese.png"
                                },
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                },
                                {
                                    "id": 0,
                                    "name": "punch",
                                    "localizedName": "punch",
                                    "image": ""
                                },
                                {
                                    "id": 1065062,
                                    "name": "meat",
                                    "localizedName": "meat",
                                    "image": "whole-chicken.jpg"
                                },
                                {
                                    "id": 1123,
                                    "name": "egg",
                                    "localizedName": "egg",
                                    "image": "egg.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 405907,
                                    "name": "mixing bowl",
                                    "localizedName": "mixing bowl",
                                    "image": "mixing-bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Mix up meatball ingredients until well combined, yet not over-mixed. Divide mix into 4 equal parts, roll each part into 4 balls and space equally onto a nonstick baking sheet.",
                            "ingredients": [
                                {
                                    "id": 10110219,
                                    "name": "meatballs",
                                    "localizedName": "meatballs",
                                    "image": "meatballs.png"
                                },
                                {
                                    "id": 0,
                                    "name": "roll",
                                    "localizedName": "roll",
                                    "image": "dinner-yeast-rolls.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404727,
                                    "name": "baking sheet",
                                    "localizedName": "baking sheet",
                                    "image": "baking-sheet.jpg"
                                }
                            ]
                        },
                        {
                            "number": 4,
                            "step": "Place meatballs in oven and roast about 12 minutes. Break a meatball open and make sure meat is cooked through before removing from the oven.",
                            "ingredients": [
                                {
                                    "id": 10110219,
                                    "name": "meatballs",
                                    "localizedName": "meatballs",
                                    "image": "meatballs.png"
                                },
                                {
                                    "id": 1065062,
                                    "name": "meat",
                                    "localizedName": "meat",
                                    "image": "whole-chicken.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ],
                            "length": {
                                "number": 12,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 5,
                            "step": "Heat a medium saucepan over medium heat.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "sauce-pan.jpg"
                                }
                            ]
                        },
                        {
                            "number": 6,
                            "step": "Add oil and garlic. When garlic starts sizzling, add herbs and crushed pepper. Allow oil to infuse for half a minute, then stir in the tomatoes and season sauce with salt and pepper. Bring sauce to a bubble, reduce heat, and simmer until meatballs are removed from oven.",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                },
                                {
                                    "id": 10110219,
                                    "name": "meatballs",
                                    "localizedName": "meatballs",
                                    "image": "meatballs.png"
                                },
                                {
                                    "id": 11529,
                                    "name": "tomato",
                                    "localizedName": "tomato",
                                    "image": "tomato.png"
                                },
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                },
                                {
                                    "id": 1002030,
                                    "name": "pepper",
                                    "localizedName": "pepper",
                                    "image": "pepper.jpg"
                                },
                                {
                                    "id": 1002044,
                                    "name": "herbs",
                                    "localizedName": "herbs",
                                    "image": "mixed-fresh-herbs.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "sauce",
                                    "localizedName": "sauce",
                                    "image": ""
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ]
                        },
                        {
                            "number": 7,
                            "step": "Combine meatballs and sauce and pile into sub rolls, 4 meatballs per sub. Top with shredded cheese and place subs under broiler to melt cheese. Top with shredded basil or arugula and serve with a pile of Oven Fries.",
                            "ingredients": [
                                {
                                    "id": 1011026,
                                    "name": "shredded cheese",
                                    "localizedName": "shredded cheese",
                                    "image": "cheddar-cheese.png"
                                },
                                {
                                    "id": 0,
                                    "name": "melting cheese",
                                    "localizedName": "melting cheese",
                                    "image": "cheddar-cheese.png"
                                },
                                {
                                    "id": 10110219,
                                    "name": "meatballs",
                                    "localizedName": "meatballs",
                                    "image": "meatballs.png"
                                },
                                {
                                    "id": 98940,
                                    "name": "sub bun",
                                    "localizedName": "sub bun",
                                    "image": "french-rolls.jpg"
                                },
                                {
                                    "id": 11959,
                                    "name": "arugula",
                                    "localizedName": "arugula",
                                    "image": "arugula-or-rocket-salad.jpg"
                                },
                                {
                                    "id": 2044,
                                    "name": "basil",
                                    "localizedName": "basil",
                                    "image": "basil.jpg"
                                },
                                {
                                    "id": 11408,
                                    "name": "french fries",
                                    "localizedName": "french fries",
                                    "image": "french-fries-isolated.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "sauce",
                                    "localizedName": "sauce",
                                    "image": ""
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 405914,
                                    "name": "broiler",
                                    "localizedName": "broiler",
                                    "image": "oven.jpg"
                                },
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ]
                        },
                        {
                            "number": 8,
                            "step": "This recipe yields 4 servings.",
                            "ingredients": [],
                            "equipment": []
                        },
                        {
                            "number": 9,
                            "step": "0 0",
                            "ingredients": [],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/meatball-subs-651342"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "weightWatcherSmartPoints": 4,
            "gaps": "no",
            "lowFodmap": false,
            "aggregateLikes": 1,
            "spoonacularScore": 52,
            "healthScore": 15,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 291.55,
            "extendedIngredients": [
                {
                    "id": 11265,
                    "aisle": "Produce",
                    "image": "portabello-mushrooms.jpg",
                    "consistency": "solid",
                    "name": "portabella mushrooms",
                    "nameClean": "portobello mushrooms",
                    "original": "6 medium portabella mushrooms",
                    "originalName": "portabella mushrooms",
                    "amount": 6,
                    "unit": "medium",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 6,
                            "unitShort": "medium",
                            "unitLong": "mediums"
                        },
                        "metric": {
                            "amount": 6,
                            "unitShort": "medium",
                            "unitLong": "mediums"
                        }
                    }
                },
                {
                    "id": 4053,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "olive-oil.jpg",
                    "consistency": "liquid",
                    "name": "olive oil",
                    "nameClean": "olive oil",
                    "original": "1 teaspoon olive oil",
                    "originalName": "olive oil",
                    "amount": 1,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 5662,
                    "aisle": "Meat",
                    "image": "meat-ground.jpg",
                    "consistency": "solid",
                    "name": "ground turkey",
                    "nameClean": "ground turkey",
                    "original": "½ pound ground elk or ground turkey",
                    "originalName": "ground elk or ground turkey",
                    "amount": 0.5,
                    "unit": "pound",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "lb",
                            "unitLong": "pounds"
                        },
                        "metric": {
                            "amount": 226.796,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 10011282,
                    "aisle": "Produce",
                    "image": "red-onion.png",
                    "consistency": "solid",
                    "name": "red onion",
                    "nameClean": "red onion",
                    "original": "½ red onion, finely chopped",
                    "originalName": "red onion, finely chopped",
                    "amount": 0.5,
                    "unit": "",
                    "meta": [
                        "red",
                        "finely chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 11215,
                    "aisle": "Produce",
                    "image": "garlic.png",
                    "consistency": "solid",
                    "name": "garlic",
                    "nameClean": "garlic",
                    "original": "4 cloves garlic, minced",
                    "originalName": "garlic, minced",
                    "amount": 4,
                    "unit": "cloves",
                    "meta": [
                        "minced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 4,
                            "unitShort": "cloves",
                            "unitLong": "cloves"
                        },
                        "metric": {
                            "amount": 4,
                            "unitShort": "cloves",
                            "unitLong": "cloves"
                        }
                    }
                },
                {
                    "id": 14096,
                    "aisle": "Alcoholic Beverages",
                    "image": "red-wine.jpg",
                    "consistency": "liquid",
                    "name": "red wine",
                    "nameClean": "red wine",
                    "original": "3 tablespoons red wine",
                    "originalName": "red wine",
                    "amount": 3,
                    "unit": "tablespoons",
                    "meta": [
                        "red"
                    ],
                    "measures": {
                        "us": {
                            "amount": 3,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 3,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 2028,
                    "aisle": "Spices and Seasonings",
                    "image": "paprika.jpg",
                    "consistency": "solid",
                    "name": "paprika",
                    "nameClean": "paprika",
                    "original": "1/8 teaspoon paprika",
                    "originalName": "paprika",
                    "amount": 0.125,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.125,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.125,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 2042,
                    "aisle": "Spices and Seasonings",
                    "image": "thyme.jpg",
                    "consistency": "solid",
                    "name": "ground thyme",
                    "nameClean": "dried thyme",
                    "original": "1/8 teaspoon ground thyme",
                    "originalName": "ground thyme",
                    "amount": 0.125,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.125,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.125,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 11457,
                    "aisle": "Produce",
                    "image": "spinach.jpg",
                    "consistency": "solid",
                    "name": "baby spinach leaves",
                    "nameClean": "baby spinach",
                    "original": "3 ounces (half a bag) baby spinach leaves, chopped",
                    "originalName": "(half a bag) baby spinach leaves, chopped",
                    "amount": 3,
                    "unit": "ounces",
                    "meta": [
                        "chopped",
                        "(half a bag)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 3,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 85.049,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 1102047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt-and-pepper.jpg",
                    "consistency": "solid",
                    "name": "salt and pepper",
                    "nameClean": "salt and pepper",
                    "original": "Salt and pepper to taste",
                    "originalName": "Salt and pepper to taste",
                    "amount": 1,
                    "unit": "serving",
                    "meta": [
                        "to taste"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        }
                    }
                },
                {
                    "id": 1159,
                    "aisle": "Cheese",
                    "image": "goat-cheese.jpg",
                    "consistency": "solid",
                    "name": "goat cheese",
                    "nameClean": "goat cheese",
                    "original": "6 slices goat cheese, thinly sliced.",
                    "originalName": "goat cheese, thinly sliced",
                    "amount": 6,
                    "unit": "slices",
                    "meta": [
                        "thinly sliced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 6,
                            "unitShort": "slice",
                            "unitLong": "slices"
                        },
                        "metric": {
                            "amount": 6,
                            "unitShort": "slice",
                            "unitLong": "slices"
                        }
                    }
                }
            ],
            "id": 651297,
            "title": "Meat & Spinach-Stuffed Portabella Mushrooms with Goat Cheese",
            "readyInMinutes": 45,
            "servings": 6,
            "sourceUrl": "https://www.foodista.com/recipe/TGJ8CNQQ/meat-spinach-stuffed-portabella-mushrooms-with-goat-cheese",
            "image": "https://spoonacular.com/recipeImages/651297-556x370.jpg",
            "imageType": "jpg",
            "summary": "Meat & Spinach-Stuffed Portabella Mushrooms with Goat Cheese takes around <b>about 45 minutes</b> from beginning to end. Watching your figure? This gluten free recipe has <b>162 calories</b>, <b>17g of protein</b>, and <b>8g of fat</b> per serving. This recipe serves 6. For <b>$2.92 per serving</b>, this recipe <b>covers 17%</b> of your daily requirements of vitamins and minerals. 1 person found this recipe to be scrumptious and satisfying. If you have wine, olive oil, onion, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 51%</b>. This score is pretty good. <a href=\"https://spoonacular.com/recipes/mouth-watering-spinach-creamy-goat-cheese-stuffed-mushrooms-574957\">Mouth-watering Spinach & Creamy Goat Cheese Stuffed Mushrooms</a>, <a href=\"https://spoonacular.com/recipes/stuffed-portabella-mushrooms-108709\">Stuffed Portabella Mushrooms</a>, and <a href=\"https://spoonacular.com/recipes/stuffed-portabella-mushrooms-147655\">Stuffed Portabella Mushrooms</a> are very similar to this recipe.",
            "cuisines": [],
            "dishTypes": [],
            "diets": [
                "gluten free"
            ],
            "occasions": [],
            "winePairing": {
                "pairedWines": [],
                "pairingText": "",
                "productMatches": []
            },
            "instructions": "Preheat oven to 400 degrees.  Wash the mushrooms, remove the stems and set the mushroom caps aside.  Chop the mushroom stems, onion and garlic. Over medium heat, warm the olive oil in a medium-sized skillet.  Add the mushroom stems, onion and garlic and saut. One tablespoon at a time, add the red wine, making sure the wine is absorbed by the ingredients and evaporates before adding the next tablespoon.  This process should take roughly 10 to 12 minutes, until onion is soft.  Add the paprika, thyme, salt and pepper.\nAdd the ground elk meat and the chopped spinach at the same time.  Cook just until spinach leaves have wilted and the meat is brown but not cooked all the way through. Remove skillet from heat.\nUsing a spoon, scoop the elk meat mixture into the portabella mushrooms; Mushrooms can be stuffed to overflowing if desired.  Place thin slices of goat cheese over the stuffed mushrooms and bake in the oven for 15 minutes, until the cheese begins to turn golden brown and juices are seeping out of mushrooms.  Allow mushrooms to sit a couple of minutes before placing on a platter to serve.",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Preheat oven to 400 degrees.  Wash the mushrooms, remove the stems and set the mushroom caps aside.  Chop the mushroom stems, onion and garlic. Over medium heat, warm the olive oil in a medium-sized skillet.",
                            "ingredients": [
                                {
                                    "id": 11260,
                                    "name": "mushrooms",
                                    "localizedName": "mushrooms",
                                    "image": "mushrooms.png"
                                },
                                {
                                    "id": 4053,
                                    "name": "olive oil",
                                    "localizedName": "olive oil",
                                    "image": "olive-oil.jpg"
                                },
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                },
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Add the mushroom stems, onion and garlic and saut. One tablespoon at a time, add the red wine, making sure the wine is absorbed by the ingredients and evaporates before adding the next tablespoon.  This process should take roughly 10 to 12 minutes, until onion is soft.",
                            "ingredients": [
                                {
                                    "id": 11260,
                                    "name": "mushrooms",
                                    "localizedName": "mushrooms",
                                    "image": "mushrooms.png"
                                },
                                {
                                    "id": 14096,
                                    "name": "red wine",
                                    "localizedName": "red wine",
                                    "image": "red-wine.jpg"
                                },
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                },
                                {
                                    "id": 14084,
                                    "name": "wine",
                                    "localizedName": "wine",
                                    "image": "red-wine.jpg"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 10,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 3,
                            "step": "Add the paprika, thyme, salt and pepper.",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                },
                                {
                                    "id": 2028,
                                    "name": "paprika",
                                    "localizedName": "paprika",
                                    "image": "paprika.jpg"
                                },
                                {
                                    "id": 2049,
                                    "name": "thyme",
                                    "localizedName": "thyme",
                                    "image": "thyme.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 4,
                            "step": "Add the ground elk meat and the chopped spinach at the same time.  Cook just until spinach leaves have wilted and the meat is brown but not cooked all the way through.",
                            "ingredients": [
                                {
                                    "id": 17338,
                                    "name": "ground elk",
                                    "localizedName": "ground elk",
                                    "image": "fresh-ground-beef.jpg"
                                },
                                {
                                    "id": 10011457,
                                    "name": "spinach",
                                    "localizedName": "spinach",
                                    "image": "spinach.jpg"
                                },
                                {
                                    "id": 1065062,
                                    "name": "meat",
                                    "localizedName": "meat",
                                    "image": "whole-chicken.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 5,
                            "step": "Remove skillet from heat.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ]
                        },
                        {
                            "number": 6,
                            "step": "Using a spoon, scoop the elk meat mixture into the portabella mushrooms; Mushrooms can be stuffed to overflowing if desired.",
                            "ingredients": [
                                {
                                    "id": 11265,
                                    "name": "portobello mushrooms",
                                    "localizedName": "portobello mushrooms",
                                    "image": "portabello-mushrooms.jpg"
                                },
                                {
                                    "id": 11260,
                                    "name": "mushrooms",
                                    "localizedName": "mushrooms",
                                    "image": "mushrooms.png"
                                },
                                {
                                    "id": 17166,
                                    "name": "elk",
                                    "localizedName": "elk",
                                    "image": "beef-cubes-raw.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 7,
                            "step": "Place thin slices of goat cheese over the stuffed mushrooms and bake in the oven for 15 minutes, until the cheese begins to turn golden brown and juices are seeping out of mushrooms.  Allow mushrooms to sit a couple of minutes before placing on a platter to serve.",
                            "ingredients": [
                                {
                                    "id": 1159,
                                    "name": "goat cheese",
                                    "localizedName": "goat cheese",
                                    "image": "goat-cheese.jpg"
                                },
                                {
                                    "id": 11260,
                                    "name": "mushrooms",
                                    "localizedName": "mushrooms",
                                    "image": "mushrooms.png"
                                },
                                {
                                    "id": 1041009,
                                    "name": "cheese",
                                    "localizedName": "cheese",
                                    "image": "cheddar-cheese.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ],
                            "length": {
                                "number": 15,
                                "unit": "minutes"
                            }
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/meat-spinach-stuffed-portabella-mushrooms-with-goat-cheese-651297"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "weightWatcherSmartPoints": 11,
            "gaps": "no",
            "lowFodmap": false,
            "aggregateLikes": 1,
            "spoonacularScore": 35,
            "healthScore": 6,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 58.69,
            "extendedIngredients": [
                {
                    "id": 4513,
                    "aisle": null,
                    "image": null,
                    "consistency": null,
                    "name": "vegetable oil",
                    "nameClean": null,
                    "original": "1 tablespoon vegetable oil",
                    "originalName": "vegetable oil",
                    "amount": 1,
                    "unit": "tablespoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 10023572,
                    "aisle": "Meat",
                    "image": "fresh-ground-beef.jpg",
                    "consistency": "solid",
                    "name": "ground beef",
                    "nameClean": "ground chuck",
                    "original": "1 pound 80/20 ground beef",
                    "originalName": "80/20 ground beef",
                    "amount": 1,
                    "unit": "pound",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "lb",
                            "unitLong": "pound"
                        },
                        "metric": {
                            "amount": 453.592,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 10219,
                    "aisle": "Meat",
                    "image": "meat-ground.jpg",
                    "consistency": "solid",
                    "name": "ground pork",
                    "nameClean": "ground pork",
                    "original": "1 pound ground pork (I tried it with pork sausage and it was great)",
                    "originalName": "ground pork (I tried it with pork sausage and it was great)",
                    "amount": 1,
                    "unit": "pound",
                    "meta": [
                        "with pork sausage and it was great)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "lb",
                            "unitLong": "pound"
                        },
                        "metric": {
                            "amount": 453.592,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 11291,
                    "aisle": "Produce",
                    "image": "spring-onions.jpg",
                    "consistency": "solid",
                    "name": "green onions",
                    "nameClean": "spring onions",
                    "original": "1 bunch green onions, finely chopped",
                    "originalName": "green onions, finely chopped",
                    "amount": 1,
                    "unit": "bunch",
                    "meta": [
                        "finely chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "bunch",
                            "unitLong": "bunch"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "bunch",
                            "unitLong": "bunch"
                        }
                    }
                },
                {
                    "id": 11333,
                    "aisle": "Produce",
                    "image": "green-pepper.jpg",
                    "consistency": "solid",
                    "name": "green bell pepper",
                    "nameClean": "green pepper",
                    "original": "1 small bell pepper, finely chopped (green is more traditional but you can use any color that you like)",
                    "originalName": "bell pepper, finely chopped (green is more traditional but you can use any color that you like)",
                    "amount": 1,
                    "unit": "small",
                    "meta": [
                        "green",
                        "traditional",
                        "finely chopped",
                        "canned",
                        "( is more but you can use any color that you like)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "small",
                            "unitLong": "small"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "small",
                            "unitLong": "small"
                        }
                    }
                },
                {
                    "id": 11215,
                    "aisle": "Produce",
                    "image": "garlic.png",
                    "consistency": "solid",
                    "name": "garlic clove",
                    "nameClean": "garlic",
                    "original": "1 large garlic clove, crushed",
                    "originalName": "garlic clove, crushed",
                    "amount": 1,
                    "unit": "large",
                    "meta": [
                        "crushed"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "large",
                            "unitLong": "large"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "large",
                            "unitLong": "large"
                        }
                    }
                },
                {
                    "id": 1032009,
                    "aisle": "Spices and Seasonings",
                    "image": "red-pepper-flakes.jpg",
                    "consistency": "solid",
                    "name": "red pepper flakes",
                    "nameClean": "red pepper flakes",
                    "original": "1/4 teaspoon red pepper flakes (optional)",
                    "originalName": "red pepper flakes (optional)",
                    "amount": 0.25,
                    "unit": "teaspoon",
                    "meta": [
                        "red"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 1102047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt-and-pepper.jpg",
                    "consistency": "solid",
                    "name": "salt and pepper",
                    "nameClean": "salt and pepper",
                    "original": "Salt and black pepper to taste",
                    "originalName": "Salt and black pepper to taste",
                    "amount": 1,
                    "unit": "serving",
                    "meta": [
                        "black",
                        "to taste"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        }
                    }
                },
                {
                    "id": 20081,
                    "aisle": "Baking",
                    "image": "flour.png",
                    "consistency": "solid",
                    "name": "flour",
                    "nameClean": "wheat flour",
                    "original": "4 cups all-purpose flour, plus extra for preparing surface",
                    "originalName": "all-purpose flour, plus extra for preparing surface",
                    "amount": 4,
                    "unit": "cups",
                    "meta": [
                        "all-purpose",
                        "for preparing surface"
                    ],
                    "measures": {
                        "us": {
                            "amount": 4,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 946.352,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "solid",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "2 teaspoons salt",
                    "originalName": "salt",
                    "amount": 2,
                    "unit": "teaspoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 18371,
                    "aisle": "Baking",
                    "image": "white-powder.jpg",
                    "consistency": "solid",
                    "name": "baking powder",
                    "nameClean": "low sodium baking powder",
                    "original": "1 teaspoon baking powder",
                    "originalName": "baking powder",
                    "amount": 1,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 4615,
                    "aisle": "Oil, Vinegar, Salad Dressing;Baking",
                    "image": "shortening.jpg",
                    "consistency": "solid",
                    "name": "shortening",
                    "nameClean": "shortening",
                    "original": "1/2 cup shortening",
                    "originalName": "shortening",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 118.294,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1123,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg.png",
                    "consistency": "solid",
                    "name": "eggs",
                    "nameClean": "egg",
                    "original": "2 eggs, beaten",
                    "originalName": "eggs, beaten",
                    "amount": 2,
                    "unit": "",
                    "meta": [
                        "beaten"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 1077,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "milk.png",
                    "consistency": "liquid",
                    "name": "milk",
                    "nameClean": "milk",
                    "original": "1 cup milk",
                    "originalName": "milk",
                    "amount": 1,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                }
            ],
            "id": 652968,
            "title": "Natchitoches Meat Pies",
            "readyInMinutes": 45,
            "servings": 16,
            "sourceUrl": "https://www.foodista.com/recipe/5L3FQFYR/natchitoches-meat-pies",
            "image": "https://spoonacular.com/recipeImages/652968-556x370.jpg",
            "imageType": "jpg",
            "summary": "The recipe Natchitoches Meat Pies can be made <b>in around around 45 minutes</b>. This recipe serves 16 and costs 59 cents per serving. One portion of this dish contains about <b>14g of protein</b>, <b>20g of fat</b>, and a total of <b>344 calories</b>. If you have eggs, green onions, ground pork, and a few other ingredients on hand, you can make it. 1 person has made this recipe and would make it again. Only a few people really liked this main course. It is brought to you by Foodista. Overall, this recipe earns a <b>rather bad spoonacular score of 32%</b>. Try <a href=\"https://spoonacular.com/recipes/louisiana-natchitoches-meat-pies-244014\">Louisiana Natchitoches Meat Pies</a>, <a href=\"https://spoonacular.com/recipes/meat-pies-560348\">Meat Pies</a>, and <a href=\"https://spoonacular.com/recipes/meat-pies-134904\">Meat Pies</a> for similar recipes.",
            "cuisines": [],
            "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [],
            "occasions": [],
            "winePairing": {
                "pairedWines": [],
                "pairingText": "",
                "productMatches": []
            },
            "instructions": "Pour vegetable oil in a large frying pan set over medium high heat; brown meat in oil.  Add the onion and bell pepper; cook, stirring frequently until vegetables are soft, approximately 5 minutes; add garlic and saut for 1 minute longer.  Add red pepper flakes and salt and pepper to taste.  Set aside until ready to use.\nSift flour, salt and baking powder together into a large bowl or in the bowl of a food processor (this makes quick work of this step); process or cut in shortening by hand until it looks like cornmeal.  Stir the eggs and milk together before slowly stirring into the flour mixture; mix well to form a soft dough.\nDivide the dough into 16 equal portions.   Dust a clean dry surface with flour.  Roll each dough portion into a ball.  Place each ball on the floured surface one at a time before rolling it into circle about 6  8 in diameter.  Spoon approximately 2 heaping tablespoons of the meat mixture onto one side of the circle, leaving a 1 clean edge all around.  Brush edges with a little warm water.  Fold the circle over the meat mixture matching the edges, forming a semi-circle.  Fold the edges in half up towards the meat leaving a 1/2\" edge.  Press the edge with the tines of a fork to crimp.  Repeat with the remaining meat and dough.\nHeat deep fryer oil or pour enough oil into a medium size frying pan to come up to a 1 depth in the pan; heat over medium high heat.   When the oil is hot and shimmering place 1  2 pies in the pan and fry to a golden brown on each, approximately 3 minutes or so.  Remove from the heat and drain on paper towels.  Serve hot or at room temperature.",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Pour vegetable oil in a large frying pan set over medium high heat; brown meat in oil.",
                            "ingredients": [
                                {
                                    "id": 4669,
                                    "name": "vegetable oil",
                                    "localizedName": "vegetable oil",
                                    "image": "vegetable-oil.jpg"
                                },
                                {
                                    "id": 1065062,
                                    "name": "meat",
                                    "localizedName": "meat",
                                    "image": "whole-chicken.jpg"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Add the onion and bell pepper; cook, stirring frequently until vegetables are soft, approximately 5 minutes; add garlic and saut for 1 minute longer.",
                            "ingredients": [
                                {
                                    "id": 10211821,
                                    "name": "bell pepper",
                                    "localizedName": "bell pepper",
                                    "image": "bell-pepper-orange.png"
                                },
                                {
                                    "id": 11583,
                                    "name": "vegetable",
                                    "localizedName": "vegetable",
                                    "image": "mixed-vegetables.png"
                                },
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 6,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 3,
                            "step": "Add red pepper flakes and salt and pepper to taste.  Set aside until ready to use.",
                            "ingredients": [
                                {
                                    "id": 1032009,
                                    "name": "red pepper flakes",
                                    "localizedName": "red pepper flakes",
                                    "image": "red-pepper-flakes.jpg"
                                },
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 4,
                            "step": "Sift flour, salt and baking powder together into a large bowl or in the bowl of a food processor (this makes quick work of this step); process or cut in shortening by hand until it looks like cornmeal.  Stir the eggs and milk together before slowly stirring into the flour mixture; mix well to form a soft dough.",
                            "ingredients": [
                                {
                                    "id": 18369,
                                    "name": "baking powder",
                                    "localizedName": "baking powder",
                                    "image": "white-powder.jpg"
                                },
                                {
                                    "id": 4615,
                                    "name": "shortening",
                                    "localizedName": "shortening",
                                    "image": "shortening.jpg"
                                },
                                {
                                    "id": 35137,
                                    "name": "cornmeal",
                                    "localizedName": "cornmeal",
                                    "image": "cornmeal.png"
                                },
                                {
                                    "id": 0,
                                    "name": "dough",
                                    "localizedName": "dough",
                                    "image": "pizza-dough"
                                },
                                {
                                    "id": 20081,
                                    "name": "all purpose flour",
                                    "localizedName": "all purpose flour",
                                    "image": "flour.png"
                                },
                                {
                                    "id": 1123,
                                    "name": "egg",
                                    "localizedName": "egg",
                                    "image": "egg.png"
                                },
                                {
                                    "id": 1077,
                                    "name": "milk",
                                    "localizedName": "milk",
                                    "image": "milk.png"
                                },
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "localizedName": "salt",
                                    "image": "salt.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404771,
                                    "name": "food processor",
                                    "localizedName": "food processor",
                                    "image": "food-processor.png"
                                },
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 5,
                            "step": "Divide the dough into 16 equal portions.   Dust a clean dry surface with flour.",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "dough",
                                    "localizedName": "dough",
                                    "image": "pizza-dough"
                                },
                                {
                                    "id": 20081,
                                    "name": "all purpose flour",
                                    "localizedName": "all purpose flour",
                                    "image": "flour.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 6,
                            "step": "Roll each dough portion into a ball.",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "dough",
                                    "localizedName": "dough",
                                    "image": "pizza-dough"
                                },
                                {
                                    "id": 0,
                                    "name": "roll",
                                    "localizedName": "roll",
                                    "image": "dinner-yeast-rolls.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 7,
                            "step": "Place each ball on the floured surface one at a time before rolling it into circle about 6  8 in diameter.  Spoon approximately 2 heaping tablespoons of the meat mixture onto one side of the circle, leaving a 1 clean edge all around.",
                            "ingredients": [
                                {
                                    "id": 1065062,
                                    "name": "meat",
                                    "localizedName": "meat",
                                    "image": "whole-chicken.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 8,
                            "step": "Brush edges with a little warm water.  Fold the circle over the meat mixture matching the edges, forming a semi-circle.  Fold the edges in half up towards the meat leaving a 1/2\" edge.  Press the edge with the tines of a fork to crimp.  Repeat with the remaining meat and dough.",
                            "ingredients": [
                                {
                                    "id": 0,
                                    "name": "dough",
                                    "localizedName": "dough",
                                    "image": "pizza-dough"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                },
                                {
                                    "id": 1065062,
                                    "name": "meat",
                                    "localizedName": "meat",
                                    "image": "whole-chicken.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 9,
                            "step": "Heat deep fryer oil or pour enough oil into a medium size frying pan to come up to a 1 depth in the pan; heat over medium high heat.   When the oil is hot and shimmering place 1  2 pies in the pan and fry to a golden brown on each, approximately 3 minutes or so.",
                            "ingredients": [
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404759,
                                    "name": "deep fryer",
                                    "localizedName": "deep fryer",
                                    "image": "deep-fryer.jpg"
                                },
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ],
                            "length": {
                                "number": 3,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 10,
                            "step": "Remove from the heat and drain on paper towels.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 405895,
                                    "name": "paper towels",
                                    "localizedName": "paper towels",
                                    "image": "paper-towels.jpg"
                                }
                            ]
                        },
                        {
                            "number": 11,
                            "step": "Serve hot or at room temperature.",
                            "ingredients": [],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/natchitoches-meat-pies-652968"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": false,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "weightWatcherSmartPoints": 2,
            "gaps": "no",
            "lowFodmap": false,
            "aggregateLikes": 1,
            "spoonacularScore": 21,
            "healthScore": 2,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 56.08,
            "extendedIngredients": [
                {
                    "id": 5139,
                    "aisle": "Meat",
                    "image": "duck.png",
                    "consistency": "solid",
                    "name": "duck",
                    "nameClean": "whole duck",
                    "original": "1/4 cup duck sauce",
                    "originalName": "duck sauce",
                    "amount": 0.25,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 59.147,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1123,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg.png",
                    "consistency": "solid",
                    "name": "egg",
                    "nameClean": "egg",
                    "original": "1 egg",
                    "originalName": "egg",
                    "amount": 1,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 1124,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg-white.jpg",
                    "consistency": "solid",
                    "name": "egg whites",
                    "nameClean": "egg whites",
                    "original": "2 egg whites",
                    "originalName": "egg whites",
                    "amount": 2,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 11215,
                    "aisle": "Produce",
                    "image": "garlic.png",
                    "consistency": "solid",
                    "name": "garlic",
                    "nameClean": "garlic",
                    "original": "2 teaspoons minced garlic",
                    "originalName": "minced garlic",
                    "amount": 2,
                    "unit": "teaspoons",
                    "meta": [
                        "minced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 11291,
                    "aisle": "Produce",
                    "image": "spring-onions.jpg",
                    "consistency": "solid",
                    "name": "green onions",
                    "nameClean": "spring onions",
                    "original": "1/2 cup thinly sliced green onions",
                    "originalName": "thinly sliced green onions",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "thinly sliced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 118.294,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 10023572,
                    "aisle": "Meat",
                    "image": "fresh-ground-beef.jpg",
                    "consistency": "solid",
                    "name": "ground chuck",
                    "nameClean": "ground chuck",
                    "original": "1 lb ground chuck",
                    "originalName": "ground chuck",
                    "amount": 1,
                    "unit": "lb",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "lb",
                            "unitLong": "pound"
                        },
                        "metric": {
                            "amount": 453.592,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 2021,
                    "aisle": "Spices and Seasonings",
                    "image": "ginger.png",
                    "consistency": "solid",
                    "name": "ground ginger",
                    "nameClean": "ginger powder",
                    "original": "1 tsp ground ginger",
                    "originalName": "ground ginger",
                    "amount": 1,
                    "unit": "tsp",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 5662,
                    "aisle": "Meat",
                    "image": "meat-ground.jpg",
                    "consistency": "solid",
                    "name": "ground turkey",
                    "nameClean": "ground turkey",
                    "original": "1.25 lbs ground turkey (93/7)",
                    "originalName": "ground turkey (93/7)",
                    "amount": 1.25,
                    "unit": "lbs",
                    "meta": [
                        "()"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.25,
                            "unitShort": "lb",
                            "unitLong": "pounds"
                        },
                        "metric": {
                            "amount": 566.99,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 6175,
                    "aisle": "Ethnic Foods",
                    "image": "dark-sauce.jpg",
                    "consistency": "solid",
                    "name": "hoisin sauce",
                    "nameClean": "hoisin sauce",
                    "original": "1 tablespoon hoisin sauce",
                    "originalName": "hoisin sauce",
                    "amount": 1,
                    "unit": "tablespoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": 16424,
                    "aisle": "Ethnic Foods;Condiments",
                    "image": "soy-sauce.jpg",
                    "consistency": "liquid",
                    "name": "low sodium soy sauce",
                    "nameClean": "lower sodium soy sauce",
                    "original": "2 tbsp low-sodium soy sauce",
                    "originalName": "low-sodium soy sauce",
                    "amount": 2,
                    "unit": "tbsp",
                    "meta": [
                        "low-sodium"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 10018079,
                    "aisle": "Bakery/Bread;Ethnic Foods;Oil, Vinegar, Salad Dressing;Baking",
                    "image": "panko.jpg",
                    "consistency": "solid",
                    "name": "panko",
                    "nameClean": "panko",
                    "original": "1 cup panko",
                    "originalName": "panko",
                    "amount": 1,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1032009,
                    "aisle": "Spices and Seasonings",
                    "image": "red-pepper-flakes.jpg",
                    "consistency": "solid",
                    "name": "red pepper flakes",
                    "nameClean": "red pepper flakes",
                    "original": "hot pepper flakes to taste (if you want to kick it up a notch)",
                    "originalName": "hot pepper flakes to taste (if you want to kick it up a notch)",
                    "amount": 36,
                    "unit": "servings",
                    "meta": [
                        "hot",
                        "to taste",
                        "(if you want to kick it up a notch)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 36,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        },
                        "metric": {
                            "amount": 36,
                            "unitShort": "servings",
                            "unitLong": "servings"
                        }
                    }
                },
                {
                    "id": 1022053,
                    "aisle": "Ethnic Foods;Oil, Vinegar, Salad Dressing",
                    "image": "rice-vinegar.png",
                    "consistency": "liquid",
                    "name": "rice vinegar",
                    "nameClean": "rice vinegar",
                    "original": "1/4 cup rice vinegar",
                    "originalName": "rice vinegar",
                    "amount": 0.25,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 59.147,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 4058,
                    "aisle": "Ethnic Foods",
                    "image": "sesame-oil.png",
                    "consistency": "liquid",
                    "name": "sesame oil",
                    "nameClean": "sesame oil",
                    "original": "2 tablespoons sesame oil",
                    "originalName": "sesame oil",
                    "amount": 2,
                    "unit": "tablespoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                }
            ],
            "id": 632851,
            "title": "Asian Meatballs",
            "readyInMinutes": 45,
            "servings": 36,
            "sourceUrl": "http://www.foodista.com/recipe/FTKFZ2JM/asian-meatballs",
            "image": "https://spoonacular.com/recipeImages/632851-556x370.jpg",
            "imageType": "jpg",
            "summary": "One serving contains <b>78 calories</b>, <b>7g of protein</b>, and <b>5g of fat</b>. For <b>56 cents per serving</b>, this recipe <b>covers 5%</b> of your daily requirements of vitamins and minerals. 1 person were impressed by this recipe. If you have ground ginger, ground chuck, soy sauce, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is a good option if you're following a <b>dairy free</b> diet. All things considered, we decided this recipe <b>deserves a spoonacular score of 22%</b>. This score is rather bad. Try <a href=\"https://spoonacular.com/recipes/asian-meatballs-612062\">Asian Meatballs</a>, <a href=\"https://spoonacular.com/recipes/asian-meatballs-419168\">Asian Meatballs</a>, and <a href=\"https://spoonacular.com/recipes/asian-meatballs-510400\">Asian Meatballs</a> for similar recipes.",
            "cuisines": [
                "Asian"
            ],
            "dishTypes": [
                "antipasti",
                "starter",
                "snack",
                "appetizer",
                "antipasto",
                "hor d'oeuvre"
            ],
            "diets": [
                "dairy free"
            ],
            "occasions": [],
            "winePairing": {
                "pairedWines": [
                    "chenin blanc",
                    "gewurztraminer",
                    "riesling"
                ],
                "pairingText": "Chenin Blanc, Gewurztraminer, and Riesling are my top picks for Asian. The best wine for Asian food depends on the cuisine and dish - of course - but these acidic whites pair with a number of traditional meals, spicy or not. One wine you could try is Essay Chenin Blanc Blend. It has 4.7 out of 5 stars and a bottle costs about 12 dollars.",
                "productMatches": [
                    {
                        "id": 497654,
                        "title": "Essay Chenin Blanc Blend",
                        "description": "Old, bush-vine chenin blanc was used as the anchor of this wine and gives it its intense fruitiness and refreshing acidity. The viognier adds floral and spicy notes and a soft, appealing richness to the palate. Perfect with grilled seafood and chicken.",
                        "price": "$11.99",
                        "imageUrl": "https://spoonacular.com/productImages/497654-312x231.jpg",
                        "averageRating": 0.9400000000000001,
                        "ratingCount": 7,
                        "score": 0.8945454545454546,
                        "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fessay-chenin-blanc-blend-2017%2F430262"
                    }
                ]
            },
            "instructions": "<ol><li>Preheat oven to 400.</li><li>In a large bowl, mix together all the meatball ingredients.  I find its easiest to do this with my hands.  Form into balls about 1-1.5 in diameter and place on a baking sheet lightly sprayed with nonstick spray.</li><li>Bake for 12-15 minutes or until meatballs are no longer pink on the inside.</li><li>Whisk together all the sauce ingredients until well blended.  You can either drizzle sauce on each meatball for a fancy presentation or put the meatballs into the sauce and coat evenly.</li><li>Garnish with toasted sesame seeds (I buy these already toasted) and sliced green onion.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Preheat oven to 400.In a large bowl, mix together all the meatball ingredients.  I find its easiest to do this with my hands.  Form into balls about 1-1.5 in diameter and place on a baking sheet lightly sprayed with nonstick spray.",
                            "ingredients": [
                                {
                                    "id": 10110219,
                                    "name": "meatballs",
                                    "localizedName": "meatballs",
                                    "image": "meatballs.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404727,
                                    "name": "baking sheet",
                                    "localizedName": "baking sheet",
                                    "image": "baking-sheet.jpg"
                                },
                                {
                                    "id": 404783,
                                    "name": "bowl",
                                    "localizedName": "bowl",
                                    "image": "bowl.jpg"
                                },
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Bake for 12-15 minutes or until meatballs are no longer pink on the inside.",
                            "ingredients": [
                                {
                                    "id": 10110219,
                                    "name": "meatballs",
                                    "localizedName": "meatballs",
                                    "image": "meatballs.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ],
                            "length": {
                                "number": 15,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 3,
                            "step": "Whisk together all the sauce ingredients until well blended.  You can either drizzle sauce on each meatball for a fancy presentation or put the meatballs into the sauce and coat evenly.",
                            "ingredients": [
                                {
                                    "id": 10110219,
                                    "name": "meatballs",
                                    "localizedName": "meatballs",
                                    "image": "meatballs.png"
                                },
                                {
                                    "id": 0,
                                    "name": "sauce",
                                    "localizedName": "sauce",
                                    "image": ""
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404661,
                                    "name": "whisk",
                                    "localizedName": "whisk",
                                    "image": "whisk.png"
                                }
                            ]
                        },
                        {
                            "number": 4,
                            "step": "Garnish with toasted sesame seeds (I buy these already toasted) and sliced green onion.",
                            "ingredients": [
                                {
                                    "id": 12023,
                                    "name": "sesame seeds",
                                    "localizedName": "sesame seeds",
                                    "image": "sesame-seeds.png"
                                },
                                {
                                    "id": 11291,
                                    "name": "green onions",
                                    "localizedName": "green onions",
                                    "image": "spring-onions.jpg"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/asian-meatballs-632851"
        },
        {
            "vegetarian": false,
            "vegan": true,
            "glutenFree": false,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "weightWatcherSmartPoints": 5,
            "gaps": "no",
            "lowFodmap": false,
            "aggregateLikes": 1,
            "spoonacularScore": 24,
            "healthScore": 2,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 40.06,
            "extendedIngredients": [
                {
                    "id": 2044,
                    "aisle": "Produce",
                    "image": "fresh-basil.jpg",
                    "consistency": "solid",
                    "name": "basil",
                    "nameClean": "fresh basil",
                    "original": "1 teaspoon Basil, dried(or marjoram)",
                    "originalName": "Basil, dried(or marjoram)",
                    "amount": 1,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 18079,
                    "aisle": "Pasta and Rice",
                    "image": "breadcrumbs.jpg",
                    "consistency": "solid",
                    "name": "breadcrumbs",
                    "nameClean": "breadcrumbs",
                    "original": "1/3 cup breadcrumbs",
                    "originalName": "breadcrumbs",
                    "amount": 0.3333333333333333,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.333,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 78.863,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 1123,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg.png",
                    "consistency": "solid",
                    "name": "egg",
                    "nameClean": "egg",
                    "original": "1 extra large egg",
                    "originalName": "egg",
                    "amount": 1,
                    "unit": "extra large",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "extra large",
                            "unitLong": "extra large"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "extra large",
                            "unitLong": "extra large"
                        }
                    }
                },
                {
                    "id": 10023572,
                    "aisle": "Meat",
                    "image": "fresh-ground-beef.jpg",
                    "consistency": "solid",
                    "name": "ground meat",
                    "nameClean": "ground chuck",
                    "original": "500 grams Ground meat (a mix of pork and beef)",
                    "originalName": "Ground meat (a mix of pork and beef)",
                    "amount": 500,
                    "unit": "grams",
                    "meta": [
                        "(a mix of pork and beef)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1.102,
                            "unitShort": "lb",
                            "unitLong": "pounds"
                        },
                        "metric": {
                            "amount": 500,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 1077,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "milk.png",
                    "consistency": "liquid",
                    "name": "milk",
                    "nameClean": "milk",
                    "original": "30 60ml milk",
                    "originalName": "milk",
                    "amount": 1800,
                    "unit": "ml",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.902,
                            "unitShort": "qt",
                            "unitLong": "quarts"
                        },
                        "metric": {
                            "amount": 1800,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 4582,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "vegetable-oil.jpg",
                    "consistency": "liquid",
                    "name": "oil",
                    "nameClean": "cooking oil",
                    "original": "1/2 tablespoon Oil",
                    "originalName": "Oil",
                    "amount": 0.5,
                    "unit": "tablespoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 11282,
                    "aisle": "Produce",
                    "image": "brown-onion.png",
                    "consistency": "solid",
                    "name": "onions",
                    "nameClean": "onion",
                    "original": "70 grams Onions",
                    "originalName": "Onions",
                    "amount": 70,
                    "unit": "grams",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2.469,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 70,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "solid",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "1 teaspoon salt",
                    "originalName": "salt",
                    "amount": 1,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 2032,
                    "aisle": "Spices and Seasonings",
                    "image": "white-pepper.png",
                    "consistency": "solid",
                    "name": "white pepper",
                    "nameClean": "white pepper",
                    "original": "1 teaspoon White pepper",
                    "originalName": "White pepper",
                    "amount": 1,
                    "unit": "teaspoon",
                    "meta": [
                        "white"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                }
            ],
            "id": 643851,
            "title": "Frikadellen German Meat Patties",
            "readyInMinutes": 45,
            "servings": 18,
            "sourceUrl": "http://www.foodista.com/recipe/WNJZYWJ3/frikadellen-german-meat-patties",
            "image": "https://spoonacular.com/recipeImages/643851-556x370.jpg",
            "imageType": "jpg",
            "summary": "Frikadellen German Meat Patties might be just the hor d'oeuvre you are searching for. One serving contains <b>148 calories</b>, <b>9g of protein</b>, and <b>10g of fat</b>. This recipe serves 18 and costs 39 cents per serving. A mixture of salt, ground meat, milk, and a handful of other ingredients are all it takes to make this recipe so flavorful. 1 person were impressed by this recipe. This recipe is typical of European cuisine. From preparation to the plate, this recipe takes about <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 26%</b>. This score is rather bad. Try <a href=\"https://spoonacular.com/recipes/german-hamburgers-frikadellen-470908\">German Hamburgers (Frikadellen)</a>, <a href=\"https://spoonacular.com/recipes/german-potato-patties-410755\">German Potato Patties</a>, and <a href=\"https://spoonacular.com/recipes/buckwheat-meat-patties-709274\">Buckwheat Meat Patties</a> for similar recipes.",
            "cuisines": [
                "German",
                "European"
            ],
            "dishTypes": [
                "antipasti",
                "starter",
                "snack",
                "appetizer",
                "antipasto",
                "hor d'oeuvre"
            ],
            "diets": [],
            "occasions": [],
            "winePairing": {},
            "instructions": "<ol><li>Peel and dice the onions, then saute in oil until transparent. Add sauteed onions to ground meat in a mixing bowl. Stir together breadcrumbs and milk and add to meat mixture.</li><li>Add egg, basil, salt and pepper and mix well. Dampen hands and form meat mixture into palm-sized patties.</li><li>Preheat non-stick skillet with a little oil. Pan-fry the meat patties over medium high heat until browned on both sides. Serve them with salad, fries and tzatziki. Alternatively they can be served with German dumplings and black pepper sauce.</li></ol>",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Peel and dice the onions, then saute in oil until transparent.",
                            "ingredients": [
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 2,
                            "step": "Add sauteed onions to ground meat in a mixing bowl. Stir together breadcrumbs and milk and add to meat mixture.",
                            "ingredients": [
                                {
                                    "id": 18079,
                                    "name": "breadcrumbs",
                                    "localizedName": "breadcrumbs",
                                    "image": "breadcrumbs.jpg"
                                },
                                {
                                    "id": 10023572,
                                    "name": "ground beef",
                                    "localizedName": "ground beef",
                                    "image": "fresh-ground-beef.jpg"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                },
                                {
                                    "id": 1065062,
                                    "name": "meat",
                                    "localizedName": "meat",
                                    "image": "whole-chicken.jpg"
                                },
                                {
                                    "id": 1077,
                                    "name": "milk",
                                    "localizedName": "milk",
                                    "image": "milk.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 405907,
                                    "name": "mixing bowl",
                                    "localizedName": "mixing bowl",
                                    "image": "mixing-bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 3,
                            "step": "Add egg, basil, salt and pepper and mix well. Dampen hands and form meat mixture into palm-sized patties.Preheat non-stick skillet with a little oil. Pan-fry the meat patties over medium high heat until browned on both sides.",
                            "ingredients": [
                                {
                                    "id": 1102047,
                                    "name": "salt and pepper",
                                    "localizedName": "salt and pepper",
                                    "image": "salt-and-pepper.jpg"
                                },
                                {
                                    "id": 2044,
                                    "name": "basil",
                                    "localizedName": "basil",
                                    "image": "basil.jpg"
                                },
                                {
                                    "id": 1065062,
                                    "name": "meat",
                                    "localizedName": "meat",
                                    "image": "whole-chicken.jpg"
                                },
                                {
                                    "id": 1123,
                                    "name": "egg",
                                    "localizedName": "egg",
                                    "image": "egg.png"
                                },
                                {
                                    "id": 4582,
                                    "name": "cooking oil",
                                    "localizedName": "cooking oil",
                                    "image": "vegetable-oil.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ]
                        },
                        {
                            "number": 4,
                            "step": "Serve them with salad, fries and tzatziki. Alternatively they can be served with German dumplings and black pepper sauce.",
                            "ingredients": [
                                {
                                    "id": 1002030,
                                    "name": "black pepper",
                                    "localizedName": "black pepper",
                                    "image": "pepper.jpg"
                                },
                                {
                                    "id": 93777,
                                    "name": "tzatziki",
                                    "localizedName": "tzatziki",
                                    "image": "raita-or-tzaziki.png"
                                },
                                {
                                    "id": 11408,
                                    "name": "french fries",
                                    "localizedName": "french fries",
                                    "image": "french-fries-isolated.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "sauce",
                                    "localizedName": "sauce",
                                    "image": ""
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/frikadellen-german-meat-patties-643851"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "weightWatcherSmartPoints": 16,
            "gaps": "no",
            "lowFodmap": false,
            "aggregateLikes": 1,
            "spoonacularScore": 38,
            "healthScore": 7,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 149.97,
            "extendedIngredients": [
                {
                    "id": 11282,
                    "aisle": "Produce",
                    "image": "brown-onion.png",
                    "consistency": "solid",
                    "name": "onion",
                    "nameClean": "onion",
                    "original": "1/2 cup finely chopped onion",
                    "originalName": "finely chopped onion",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "finely chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 118.294,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 11215,
                    "aisle": "Produce",
                    "image": "garlic.png",
                    "consistency": "solid",
                    "name": "garlic",
                    "nameClean": "garlic",
                    "original": "2 cloves garlic",
                    "originalName": "garlic",
                    "amount": 2,
                    "unit": "cloves",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "cloves",
                            "unitLong": "cloves"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "cloves",
                            "unitLong": "cloves"
                        }
                    }
                },
                {
                    "id": 1001,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "butter-sliced.jpg",
                    "consistency": "solid",
                    "name": "butter",
                    "nameClean": "butter",
                    "original": "2 tablespoons butter",
                    "originalName": "butter",
                    "amount": 2,
                    "unit": "tablespoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 10023572,
                    "aisle": "Meat",
                    "image": "fresh-ground-beef.jpg",
                    "consistency": "solid",
                    "name": "ground chuck",
                    "nameClean": "ground chuck",
                    "original": "2 pounds ground chuck",
                    "originalName": "ground chuck",
                    "amount": 2,
                    "unit": "pounds",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "lb",
                            "unitLong": "pounds"
                        },
                        "metric": {
                            "amount": 907.185,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 1123,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "egg.png",
                    "consistency": "solid",
                    "name": "eggs",
                    "nameClean": "egg",
                    "original": "2 eggs",
                    "originalName": "eggs",
                    "amount": 2,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 1053,
                    "aisle": "Milk, Eggs, Other Dairy",
                    "image": "fluid-cream.jpg",
                    "consistency": "liquid",
                    "name": "cream",
                    "nameClean": "cream",
                    "original": "1/4 cup cream",
                    "originalName": "cream",
                    "amount": 0.25,
                    "unit": "cup",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 59.147,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 6971,
                    "aisle": "Condiments",
                    "image": "dark-sauce.jpg",
                    "consistency": "liquid",
                    "name": "worcestershire sauce",
                    "nameClean": "worcestershire sauce",
                    "original": "2 tablespoons Worcestershire sauce",
                    "originalName": "Worcestershire sauce",
                    "amount": 2,
                    "unit": "tablespoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "solid",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "1 1/2 teaspoons salt",
                    "originalName": "salt",
                    "amount": 1.5,
                    "unit": "teaspoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 1.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 1002030,
                    "aisle": "Spices and Seasonings",
                    "image": "pepper.jpg",
                    "consistency": "solid",
                    "name": "black pepper",
                    "nameClean": "black pepper",
                    "original": "1/2 teaspoon freshly ground black pepper",
                    "originalName": "freshly ground black pepper",
                    "amount": 0.5,
                    "unit": "teaspoon",
                    "meta": [
                        "black",
                        "freshly ground"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 2049,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "thyme.jpg",
                    "consistency": "solid",
                    "name": "fresh thyme",
                    "nameClean": "thyme",
                    "original": "1 tablespoon teaspoon dried thyme, or 1 fresh, finely chopped",
                    "originalName": "teaspoon dried thyme, or 1 fresh, finely chopped",
                    "amount": 1,
                    "unit": "tablespoon",
                    "meta": [
                        "dried",
                        "fresh",
                        "finely chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "Tbsp",
                            "unitLong": "Tbsp"
                        }
                    }
                },
                {
                    "id": null,
                    "aisle": "?",
                    "image": null,
                    "consistency": null,
                    "name": "a comb",
                    "nameClean": null,
                    "original": "1 cup shredded carrots or yellow squash or zucchini, or a comb",
                    "originalName": "shredded carrots or yellow squash or zucchini, or a comb",
                    "amount": 1,
                    "unit": "cup",
                    "meta": [
                        "shredded",
                        "yellow"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                }
            ],
            "id": 664748,
            "title": "Veggie Meatloaf",
            "readyInMinutes": 45,
            "servings": 6,
            "sourceUrl": "https://www.foodista.com/recipe/2G5BFCVQ/veggie-meatloaf",
            "image": "https://spoonacular.com/recipeImages/664748-556x370.jpg",
            "imageType": "jpg",
            "summary": "Veggie Meatloaf is a main course that serves 6. Watching your figure? This gluten free recipe has <b>486 calories</b>, <b>28g of protein</b>, and <b>39g of fat</b> per serving. For <b>$1.5 per serving</b>, this recipe <b>covers 17%</b> of your daily requirements of vitamins and minerals. 1 person were glad they tried this recipe. It is brought to you by Foodista. A mixture of eggs, ground chuck, butter, and a handful of other ingredients are all it takes to make this recipe so flavorful. From preparation to the plate, this recipe takes roughly <b>roughly 45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 36%</b>, which is rather bad. Users who liked this recipe also liked <a href=\"https://spoonacular.com/recipes/herb-and-veggie-meatloaf-221173\">Herb-and-Veggie Meatloaf</a>, <a href=\"https://spoonacular.com/recipes/turkey-and-veggie-meatloaf-minis-286293\">Turkey and Veggie Meatloaf Minis</a>, and <a href=\"https://spoonacular.com/recipes/turkey-veggie-meatloaf-cups-437506\">Turkey Veggie Meatloaf Cups</a>.",
            "cuisines": [],
            "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [
                "gluten free"
            ],
            "occasions": [],
            "winePairing": {
                "pairedWines": [
                    "cabernet sauvignon",
                    "zinfandel"
                ],
                "pairingText": "Meatloaf can be paired with Cabernet Sauvignon and Zinfandel. Meatloaf will work with many red wines. We recommend something bold and fruity, like a Cabernet Sauvignon or Zinfandel. The Caterwaul Napa Cabernet Sauvignon with a 4.9 out of 5 star rating seems like a good match. It costs about 50 dollars per bottle.",
                "productMatches": [
                    {
                        "id": 492336,
                        "title": "Caterwaul Napa Cabernet Sauvignon",
                        "description": "A dark, exotic Cabernet Sauvignon nearly splitting at the seams with fruit and spice notes. The wine exhibits a completely opaque dark purple hue in the glass with a violet halo. Layered aromas suggest black currant, pine bough, pencil shavings and fresh leather. The dense, concentrated palate is marked by macerated blackberry, plum reduction, baking spices, loam, cocoa nib and crushed river rock. This big, complex wine will show it’s true colors after being decanted or with a few years in the cellar.",
                        "price": "$49.99",
                        "imageUrl": "https://spoonacular.com/productImages/492336-312x231.jpg",
                        "averageRating": 0.9800000000000001,
                        "ratingCount": 15,
                        "score": 0.9582608695652175,
                        "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fcaterwaul-napa-cabernet-sauvignon-2017%2F548704"
                    }
                ]
            },
            "instructions": "Preheat the oven to 350 F.\nMelt the butter in a small skillet over medium-low heat; add the onions and cook, stirring frequently, until they are soft and translucent but not brown, about 7  8 minutes.  Add the garlic and cook, stirring frequently, for another minute or two.  Remove from heat and set aside.\nPlace the remaining ingredients to a large mixing bowl; add the onion/garlic mixture.  Gently but thoroughly mix with your hands, then transfer to an 8x8 baking dish and form into a loaf shape.\nBake for 1 hour, then test to see if the center is done.  If it is still pink, cover with foil and bake for another 10 to 15 minutes.  Allow the meatloaf to rest for about 5 minutes before serving.",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Preheat the oven to 350 F.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg",
                                    "temperature": {
                                        "number": 350,
                                        "unit": "Fahrenheit"
                                    }
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Melt the butter in a small skillet over medium-low heat; add the onions and cook, stirring frequently, until they are soft and translucent but not brown, about 7  8 minutes.",
                            "ingredients": [
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ],
                            "length": {
                                "number": 8,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 3,
                            "step": "Add the garlic and cook, stirring frequently, for another minute or two.",
                            "ingredients": [
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 4,
                            "step": "Remove from heat and set aside.",
                            "ingredients": [],
                            "equipment": []
                        },
                        {
                            "number": 5,
                            "step": "Place the remaining ingredients to a large mixing bowl; add the onion/garlic mixture.  Gently but thoroughly mix with your hands, then transfer to an 8x8 baking dish and form into a loaf shape.",
                            "ingredients": [
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404646,
                                    "name": "baking pan",
                                    "localizedName": "baking pan",
                                    "image": "roasting-pan.jpg"
                                },
                                {
                                    "id": 405907,
                                    "name": "mixing bowl",
                                    "localizedName": "mixing bowl",
                                    "image": "mixing-bowl.jpg"
                                }
                            ]
                        },
                        {
                            "number": 6,
                            "step": "Bake for 1 hour, then test to see if the center is done.  If it is still pink, cover with foil and bake for another 10 to 15 minutes.  Allow the meatloaf to rest for about 5 minutes before serving.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                },
                                {
                                    "id": 404765,
                                    "name": "aluminum foil",
                                    "localizedName": "aluminum foil",
                                    "image": "aluminum-foil.png"
                                }
                            ],
                            "length": {
                                "number": 75,
                                "unit": "minutes"
                            }
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/veggie-meatloaf-664748"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": true,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "weightWatcherSmartPoints": 8,
            "gaps": "no",
            "lowFodmap": false,
            "aggregateLikes": 1,
            "spoonacularScore": 49,
            "healthScore": 13,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 129.01,
            "extendedIngredients": [
                {
                    "id": 10023572,
                    "aisle": "Meat",
                    "image": "fresh-ground-beef.jpg",
                    "consistency": "solid",
                    "name": "ground beef",
                    "nameClean": "ground chuck",
                    "original": "1 pound ground beef (grass-fed and organic, if possible)",
                    "originalName": "ground beef (grass-fed and organic, if possible)",
                    "amount": 1,
                    "unit": "pound",
                    "meta": [
                        "organic",
                        "grass-fed",
                        "( and , if possible)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "lb",
                            "unitLong": "pound"
                        },
                        "metric": {
                            "amount": 453.592,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 11821,
                    "aisle": "Produce",
                    "image": "red-pepper.jpg",
                    "consistency": "solid",
                    "name": "red bell pepper",
                    "nameClean": "red pepper",
                    "original": "1 red bell pepper, minced",
                    "originalName": "red bell pepper, minced",
                    "amount": 1,
                    "unit": "",
                    "meta": [
                        "red",
                        "minced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 11477,
                    "aisle": "Produce",
                    "image": "zucchini.jpg",
                    "consistency": "solid",
                    "name": "zucchini",
                    "nameClean": "zucchini",
                    "original": "1 small zucchini, minced",
                    "originalName": "zucchini, minced",
                    "amount": 1,
                    "unit": "small",
                    "meta": [
                        "minced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "small",
                            "unitLong": "small"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "small",
                            "unitLong": "small"
                        }
                    }
                },
                {
                    "id": 11282,
                    "aisle": "Produce",
                    "image": "brown-onion.png",
                    "consistency": "solid",
                    "name": "onion",
                    "nameClean": "onion",
                    "original": "2 tablespoons dried minced onion (or ½ cup fresh chopped onion)",
                    "originalName": "dried minced onion (or ½ cup fresh chopped onion)",
                    "amount": 2,
                    "unit": "tablespoons",
                    "meta": [
                        "dried",
                        "fresh",
                        "minced",
                        "chopped",
                        "(or)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 11549,
                    "aisle": "Canned and Jarred",
                    "image": "tomato-sauce-or-pasta-sauce.jpg",
                    "consistency": "solid",
                    "name": "tomato sauce",
                    "nameClean": "canned tomato sauce",
                    "original": "8 oz tomato sauce",
                    "originalName": "tomato sauce",
                    "amount": 8,
                    "unit": "oz",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 8,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 226.796,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 2009,
                    "aisle": "Spices and Seasonings",
                    "image": "chili-powder.jpg",
                    "consistency": "solid",
                    "name": "chile powder",
                    "nameClean": "chili powder",
                    "original": "1/2 teaspoon chipotle chile powder or 1- 2 chopped (seeds removed) chipot",
                    "originalName": "chipotle chile powder or 1- 2 chopped (seeds removed) chipot",
                    "amount": 0.5,
                    "unit": "teaspoon",
                    "meta": [
                        "seeds removed) chipot",
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 31015,
                    "aisle": "Produce",
                    "image": "chili-peppers-green.jpg",
                    "consistency": "solid",
                    "name": "green chiles",
                    "nameClean": "green chili pepper",
                    "original": "4 oz can diced green chiles",
                    "originalName": "diced green chiles",
                    "amount": 4,
                    "unit": "oz",
                    "meta": [
                        "diced",
                        "green",
                        "canned"
                    ],
                    "measures": {
                        "us": {
                            "amount": 4,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 113.398,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 2047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "solid",
                    "name": "salt",
                    "nameClean": "table salt",
                    "original": "1/2 teaspoon salt",
                    "originalName": "salt",
                    "amount": 0.5,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.5,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 1002030,
                    "aisle": "Spices and Seasonings",
                    "image": "pepper.jpg",
                    "consistency": "solid",
                    "name": "ground pepper",
                    "nameClean": "black pepper",
                    "original": "1/4 teaspoon coarsely ground black pepper",
                    "originalName": "coarsely ground black pepper",
                    "amount": 0.25,
                    "unit": "teaspoon",
                    "meta": [
                        "black"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 0.25,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 16018,
                    "aisle": "Canned and Jarred",
                    "image": "black-beans.jpg",
                    "consistency": "solid",
                    "name": "canned black beans",
                    "nameClean": "canned black beans",
                    "original": "15 oz can black beans, drained and rinsed",
                    "originalName": "black beans, drained and rinsed",
                    "amount": 15,
                    "unit": "oz",
                    "meta": [
                        "drained and rinsed",
                        "canned"
                    ],
                    "measures": {
                        "us": {
                            "amount": 15,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 425.243,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 11913,
                    "aisle": "Frozen",
                    "image": "corn.png",
                    "consistency": "solid",
                    "name": "frozen corn",
                    "nameClean": "frozen corn",
                    "original": "1 cup frozen corn",
                    "originalName": "frozen corn",
                    "amount": 1,
                    "unit": "cup",
                    "meta": [
                        "frozen"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "cup",
                            "unitLong": "cup"
                        },
                        "metric": {
                            "amount": 236.588,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": 11165,
                    "aisle": "Produce;Spices and Seasonings",
                    "image": "cilantro.png",
                    "consistency": "solid",
                    "name": "fresh cilantro",
                    "nameClean": "cilantro",
                    "original": "1/2 cup chopped fresh cilantro",
                    "originalName": "chopped fresh cilantro",
                    "amount": 0.5,
                    "unit": "cup",
                    "meta": [
                        "fresh",
                        "chopped"
                    ],
                    "measures": {
                        "us": {
                            "amount": 0.5,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 118.294,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                }
            ],
            "id": 646778,
            "title": "Hidden Veggie Chipotle Taco Meat",
            "readyInMinutes": 45,
            "servings": 6,
            "sourceUrl": "https://www.foodista.com/recipe/8LSH2VL8/hidden-veggie-chipotle-taco-meat",
            "image": "https://spoonacular.com/recipeImages/646778-556x370.jpg",
            "imageType": "jpg",
            "summary": "The recipe Hidden Veggie Chipotle Taco Meat can be made <b>in about around 45 minutes</b>. For <b>$1.29 per serving</b>, this recipe <b>covers 18%</b> of your daily requirements of vitamins and minerals. Watching your figure? This gluten free and dairy free recipe has <b>309 calories</b>, <b>19g of protein</b>, and <b>16g of fat</b> per serving. This recipe serves 6. This recipe is typical of Mexican cuisine. Head to the store and pick up black beans, corn, chipotle chile powder, and a few other things to make it today. 1 person has tried and liked this recipe. It works well as a main course. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 47%</b>, which is pretty good. If you like this recipe, take a look at these similar recipes: <a href=\"https://spoonacular.com/recipes/hidden-veggie-brownies-675883\">Hidden Veggie Brownies</a>, <a href=\"https://spoonacular.com/recipes/hidden-veggie-crock-pot-sloppy-joes-629082\">(Hidden Veggie) Crock Pot Sloppy Joes</a>, and <a href=\"https://spoonacular.com/recipes/orange-banana-hidden-veggie-smoothie-popsicles-557100\">Orange Banana (Hidden Veggie) Smoothie Popsicles : </a>.",
            "cuisines": [
                "Mexican"
            ],
            "dishTypes": [
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [
                "gluten free",
                "dairy free"
            ],
            "occasions": [],
            "winePairing": {
                "pairedWines": [
                    "pinot noir",
                    "riesling",
                    "sparkling rose"
                ],
                "pairingText": "Pinot Noir, Riesling, and Sparkling rosé are my top picks for Mexican. Acidic white wines like riesling or low-tannin reds like pinot noir can work well with Mexican dishes. Sparkling rosé is a safe pairing too. One wine you could try is Williams Selyem Westside Road Neighbors Pinot Noir. It has 4.7 out of 5 stars and a bottle costs about 140 dollars.",
                "productMatches": [
                    {
                        "id": 436058,
                        "title": "Williams Selyem Westside Road Neighbors Pinot Noir",
                        "description": "A firecracker of a wine, the 2015 Westside Road Neighbors is explosive both in the nose and on the palate. Black raspberry and black cherry aromas are complemented with hints of cedar, allspice, vanilla, and black tea. An intriguing note of celery seed further complexes the outstanding nose. Young and brash, the texture is superb with a backbone of refreshing acidity and loamy earthiness that conveys flavors of bright Bing cherry and raspberry. The wine concludes with refined tea-like tannins and a crushed rock and minerally finish. A wine not to be missed!",
                        "price": "$139.97",
                        "imageUrl": "https://spoonacular.com/productImages/436058-312x231.jpg",
                        "averageRating": 0.9400000000000001,
                        "ratingCount": 5,
                        "score": 0.8775000000000001,
                        "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fwilliams-selyem-westside-road-neighbors-pinot-noir-2015%2F233836"
                    }
                ]
            },
            "instructions": "Brown ground beef in a large skillet over medium-high heat.\nMeanwhile, mince vegetables (food processor is really nice for this). When the beef is almost cooked through, add the minced pepper and zucchini. Cook for 3-4 more minutes until some of the liquid cooks out and the beef is cooked through.\nAdd diced onion, tomato sauce, chipotle powder, diced green chiles, salt, pepper, beans, corn, and 1/2 cup water. Cook another 4-5 minutes until about half of the liquid has cooked out and mixture is nice and saucy.\nStir in cilantro and keep warm until ready to serve.",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Brown ground beef in a large skillet over medium-high heat.",
                            "ingredients": [
                                {
                                    "id": 10023572,
                                    "name": "ground beef",
                                    "localizedName": "ground beef",
                                    "image": "fresh-ground-beef.jpg"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404645,
                                    "name": "frying pan",
                                    "localizedName": "frying pan",
                                    "image": "pan.png"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "Meanwhile, mince vegetables (food processor is really nice for this). When the beef is almost cooked through, add the minced pepper and zucchini. Cook for 3-4 more minutes until some of the liquid cooks out and the beef is cooked through.",
                            "ingredients": [
                                {
                                    "id": 11583,
                                    "name": "vegetable",
                                    "localizedName": "vegetable",
                                    "image": "mixed-vegetables.png"
                                },
                                {
                                    "id": 11477,
                                    "name": "zucchini",
                                    "localizedName": "zucchini",
                                    "image": "zucchini.jpg"
                                },
                                {
                                    "id": 1002030,
                                    "name": "pepper",
                                    "localizedName": "pepper",
                                    "image": "pepper.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "ground meat",
                                    "localizedName": "ground meat",
                                    "image": "fresh-ground-beef.jpg"
                                },
                                {
                                    "id": 23572,
                                    "name": "beef",
                                    "localizedName": "beef",
                                    "image": "beef-cubes-raw.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404771,
                                    "name": "food processor",
                                    "localizedName": "food processor",
                                    "image": "food-processor.png"
                                }
                            ],
                            "length": {
                                "number": 4,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 3,
                            "step": "Add diced onion, tomato sauce, chipotle powder, diced green chiles, salt, pepper, beans, corn, and 1/2 cup water. Cook another 4-5 minutes until about half of the liquid has cooked out and mixture is nice and saucy.",
                            "ingredients": [
                                {
                                    "id": 10011980,
                                    "name": "diced green chiles",
                                    "localizedName": "diced green chiles",
                                    "image": "pickled-jalapenos.png"
                                },
                                {
                                    "id": 1052009,
                                    "name": "ground chipotle chile pepper",
                                    "localizedName": "ground chipotle chile pepper",
                                    "image": "chili-powder.jpg"
                                },
                                {
                                    "id": 11549,
                                    "name": "tomato sauce",
                                    "localizedName": "tomato sauce",
                                    "image": "tomato-sauce-or-pasta-sauce.jpg"
                                },
                                {
                                    "id": 1002030,
                                    "name": "pepper",
                                    "localizedName": "pepper",
                                    "image": "pepper.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "beans",
                                    "localizedName": "beans",
                                    "image": "kidney-beans.jpg"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                },
                                {
                                    "id": 11168,
                                    "name": "corn",
                                    "localizedName": "corn",
                                    "image": "corn.png"
                                },
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "localizedName": "salt",
                                    "image": "salt.jpg"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 5,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 4,
                            "step": "Stir in cilantro and keep warm until ready to serve.",
                            "ingredients": [
                                {
                                    "id": 11165,
                                    "name": "cilantro",
                                    "localizedName": "cilantro",
                                    "image": "cilantro.png"
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/hidden-veggie-chipotle-taco-meat-646778"
        },
        {
            "vegetarian": false,
            "vegan": false,
            "glutenFree": true,
            "dairyFree": false,
            "veryHealthy": false,
            "cheap": false,
            "veryPopular": false,
            "sustainable": false,
            "weightWatcherSmartPoints": 9,
            "gaps": "no",
            "lowFodmap": false,
            "aggregateLikes": 1,
            "spoonacularScore": 42,
            "healthScore": 9,
            "creditsText": "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
            "license": "CC BY 3.0",
            "sourceName": "Foodista",
            "pricePerServing": 131.81,
            "extendedIngredients": [
                {
                    "id": 10023572,
                    "aisle": "Meat",
                    "image": "fresh-ground-beef.jpg",
                    "consistency": "solid",
                    "name": "ground beef",
                    "nameClean": "ground chuck",
                    "original": "1 pound of Ground Beef (80-85%%)",
                    "originalName": "Ground Beef (80-85%%)",
                    "amount": 1,
                    "unit": "pound",
                    "meta": [
                        "(80-85%%)"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "lb",
                            "unitLong": "pound"
                        },
                        "metric": {
                            "amount": 453.592,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 11333,
                    "aisle": "Produce",
                    "image": "green-pepper.jpg",
                    "consistency": "solid",
                    "name": "green bell pepper",
                    "nameClean": "green pepper",
                    "original": "1 Green Pepper, thinly sliced and cut into 1-inch long strips",
                    "originalName": "Green Pepper, thinly sliced and cut into 1-inch long strips",
                    "amount": 1,
                    "unit": "",
                    "meta": [
                        "green",
                        "thinly sliced",
                        "cut into 1-inch long strips"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 10511282,
                    "aisle": "Produce",
                    "image": "brown-onion.png",
                    "consistency": "solid",
                    "name": "yellow onion",
                    "nameClean": "yellow onion",
                    "original": "1 large Yellow Onion, diced",
                    "originalName": "Yellow Onion, diced",
                    "amount": 1,
                    "unit": "large",
                    "meta": [
                        "diced",
                        "yellow"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "large",
                            "unitLong": "large"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "large",
                            "unitLong": "large"
                        }
                    }
                },
                {
                    "id": 11215,
                    "aisle": "Produce",
                    "image": "garlic.png",
                    "consistency": "solid",
                    "name": "garlic",
                    "nameClean": "garlic",
                    "original": "5 large cloves Garlic, minced",
                    "originalName": "Garlic, minced",
                    "amount": 5,
                    "unit": "large cloves",
                    "meta": [
                        "minced"
                    ],
                    "measures": {
                        "us": {
                            "amount": 5,
                            "unitShort": "large cloves",
                            "unitLong": "large cloves"
                        },
                        "metric": {
                            "amount": 5,
                            "unitShort": "large cloves",
                            "unitLong": "large cloves"
                        }
                    }
                },
                {
                    "id": 4053,
                    "aisle": "Oil, Vinegar, Salad Dressing",
                    "image": "olive-oil.jpg",
                    "consistency": "liquid",
                    "name": "olive oil",
                    "nameClean": "olive oil",
                    "original": "3 tablespoons Olive Oil",
                    "originalName": "Olive Oil",
                    "amount": 3,
                    "unit": "tablespoons",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 3,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        },
                        "metric": {
                            "amount": 3,
                            "unitShort": "Tbsps",
                            "unitLong": "Tbsps"
                        }
                    }
                },
                {
                    "id": 11887,
                    "aisle": "Pasta and Rice",
                    "image": "tomato-paste.jpg",
                    "consistency": "solid",
                    "name": "tomato paste",
                    "nameClean": "tomato paste",
                    "original": "1 ounce can tomato paste, 6",
                    "originalName": "tomato paste, 6",
                    "amount": 1,
                    "unit": "ounce",
                    "meta": [
                        "canned"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "oz",
                            "unitLong": "ounce"
                        },
                        "metric": {
                            "amount": 28.35,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 1022027,
                    "aisle": "Spices and Seasonings",
                    "image": "dried-herbs.png",
                    "consistency": "solid",
                    "name": "italian seasoning",
                    "nameClean": "italian seasoning",
                    "original": "2 teaspoons tablespoons Italian Seasoning (If you don't have the mix use 1 each of",
                    "originalName": "tablespoons Italian Seasoning (If you don't have the mix use 1 each of",
                    "amount": 2,
                    "unit": "teaspoons",
                    "meta": [
                        "italian"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "tsps",
                            "unitLong": "teaspoons"
                        }
                    }
                },
                {
                    "id": 19335,
                    "aisle": "Baking",
                    "image": "sugar-in-bowl.png",
                    "consistency": "solid",
                    "name": "sugar",
                    "nameClean": "sugar",
                    "original": "1 teaspoon Sugar",
                    "originalName": "Sugar",
                    "amount": 1,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 1082047,
                    "aisle": "Spices and Seasonings",
                    "image": "salt.jpg",
                    "consistency": "solid",
                    "name": "kosher salt",
                    "nameClean": "kosher salt",
                    "original": "1 teaspoon Sea or Kosher salt",
                    "originalName": "Sea or Kosher salt",
                    "amount": 1,
                    "unit": "teaspoon",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "tsp",
                            "unitLong": "teaspoon"
                        }
                    }
                },
                {
                    "id": 1002030,
                    "aisle": "Spices and Seasonings",
                    "image": "pepper.jpg",
                    "consistency": "solid",
                    "name": "pepper",
                    "nameClean": "black pepper",
                    "original": "Fresh cracked Pepper",
                    "originalName": "Fresh cracked Pepper",
                    "amount": 1,
                    "unit": "serving",
                    "meta": [
                        "fresh"
                    ],
                    "measures": {
                        "us": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        },
                        "metric": {
                            "amount": 1,
                            "unitShort": "serving",
                            "unitLong": "serving"
                        }
                    }
                },
                {
                    "id": 2004,
                    "aisle": "Spices and Seasonings",
                    "image": "bay-leaves.jpg",
                    "consistency": "solid",
                    "name": "bay leaves",
                    "nameClean": "bay leaves",
                    "original": "2 bay leaves",
                    "originalName": "bay leaves",
                    "amount": 2,
                    "unit": "",
                    "meta": [],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "",
                            "unitLong": ""
                        },
                        "metric": {
                            "amount": 2,
                            "unitShort": "",
                            "unitLong": ""
                        }
                    }
                },
                {
                    "id": 10011693,
                    "aisle": "Canned and Jarred",
                    "image": "tomatoes-canned.png",
                    "consistency": "solid",
                    "name": "canned tomatoes",
                    "nameClean": "canned tomatoes",
                    "original": "28 ounces can of crushed tomatoes",
                    "originalName": "crushed tomatoes",
                    "amount": 28,
                    "unit": "ounces",
                    "meta": [
                        "crushed",
                        "canned"
                    ],
                    "measures": {
                        "us": {
                            "amount": 28,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 793.787,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                },
                {
                    "id": 1001026,
                    "aisle": "Cheese",
                    "image": "shredded-cheese-white.jpg",
                    "consistency": "solid",
                    "name": "shredded mozzarella cheese",
                    "nameClean": "shredded mozzarella",
                    "original": "2 cups Mozzarella Cheese, shredded",
                    "originalName": "Mozzarella Cheese, shredded",
                    "amount": 2,
                    "unit": "cups",
                    "meta": [
                        "shredded"
                    ],
                    "measures": {
                        "us": {
                            "amount": 2,
                            "unitShort": "cups",
                            "unitLong": "cups"
                        },
                        "metric": {
                            "amount": 473.176,
                            "unitShort": "ml",
                            "unitLong": "milliliters"
                        }
                    }
                },
                {
                    "id": null,
                    "aisle": "?",
                    "image": null,
                    "consistency": null,
                    "name": "use",
                    "nameClean": null,
                    "original": "26 ounces Cheese Ravioli, frozen, or fresh, use good quality",
                    "originalName": "Cheese Ravioli, frozen, or fresh, use good quality",
                    "amount": 26,
                    "unit": "ounces",
                    "meta": [
                        "fresh",
                        "frozen"
                    ],
                    "measures": {
                        "us": {
                            "amount": 26,
                            "unitShort": "oz",
                            "unitLong": "ounces"
                        },
                        "metric": {
                            "amount": 737.088,
                            "unitShort": "g",
                            "unitLong": "grams"
                        }
                    }
                }
            ],
            "id": 633752,
            "title": "Baked Ravioli & Meat Sauce",
            "readyInMinutes": 45,
            "servings": 8,
            "sourceUrl": "https://www.foodista.com/recipe/PKJT7TDN/baked-ravioli-meat-sauce",
            "image": "https://spoonacular.com/recipeImages/633752-556x370.jpg",
            "imageType": "jpg",
            "summary": "Baked Ravioli & Meat Sauce might be just the main course you are searching for. One portion of this dish contains around <b>18g of protein</b>, <b>23g of fat</b>, and a total of <b>326 calories</b>. This recipe serves 8. For <b>$1.32 per serving</b>, this recipe <b>covers 15%</b> of your daily requirements of vitamins and minerals. From preparation to the plate, this recipe takes roughly <b>roughly 45 minutes</b>. It is brought to you by Foodista. If you have ground beef, cracked pepper, garlic, and a few other ingredients on hand, you can make it. 1 person were impressed by this recipe. It is a good option if you're following a <b>gluten free</b> diet. It is a <b>budget friendly</b> recipe for fans of Mediterranean food. With a spoonacular <b>score of 40%</b>, this dish is not so outstanding. Try <a href=\"https://spoonacular.com/recipes/quick-and-easy-baked-ravioli-with-creamy-meat-sauce-621710\">Quick and Easy Baked Ravioli with Creamy Meat Sauce</a>, <a href=\"https://spoonacular.com/recipes/baked-rice-with-meat-sauce-497918\">Baked Rice with Meat Sauce</a>, and <a href=\"https://spoonacular.com/recipes/baked-penne-with-meat-sauce-139066\">Baked Penne With Meat Sauce</a> for similar recipes.",
            "cuisines": [
                "Mediterranean",
                "Italian",
                "European"
            ],
            "dishTypes": [
                "side dish",
                "lunch",
                "main course",
                "main dish",
                "dinner"
            ],
            "diets": [
                "gluten free"
            ],
            "occasions": [],
            "winePairing": {
                "pairedWines": [
                    "chianti",
                    "trebbiano",
                    "verdicchio"
                ],
                "pairingText": "Chianti, Trebbiano, and Verdicchio are great choices for Ravioli. Italians know food and they know wine. Trebbiano and Verdicchio are Italian white wines that pair well with fish and white meat, while Chianti is a great Italian red for heavier, bolder dishes. The Badian a Coltibuono Cultusboni RS Chianti Classico ( half-bottle) with a 4.3 out of 5 star rating seems like a good match. It costs about 11 dollars per bottle.",
                "productMatches": [
                    {
                        "id": 494502,
                        "title": "Badia a Coltibuono Cultusboni RS Chianti Classico ( half-bottle)",
                        "description": "It is a fruity, soft and typical wine that is particularly food friendly.",
                        "price": "$10.99",
                        "imageUrl": "https://spoonacular.com/productImages/494502-312x231.jpg",
                        "averageRating": 0.86,
                        "ratingCount": 15,
                        "score": 0.8382608695652174,
                        "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fbadia-a-coltibuono-cultusboni-rs-chianti-classico-375ml-half-bottle-2018%2F609295"
                    }
                ]
            },
            "instructions": "Brown the beef and the pepper, onion and garlic in olive oil in a large, heavy bottomed sauce pan.\nWhen browned add the tomato paste, Italian seasonings, sugar, salt, pepper, and bay leaves. Let cook for a few minutes until the tomato paste is heated through.\nAdd the crushed tomatoes and a half of the tomato paste can full of water. Simmer for 25-30 minutes. Taste and re-season halfway through with salt, pepper and herbs if needed and again before serving.\nWhile the sauce is simmering cook the ravioli just until they begin to rise to the top and float. You do not need to cook them all the way through. Drain and toss with a tablespoon of butter or olive oil.\nPreheat oven to 400 degrees. Remove bay leaves from sauce. Toss a liberal amount of sauce with ravioli. Reserve any excess sauce for serving.\nPour into a greased 9x13 casserole pan. Sprinkle top with mozzarella. Bake about 25 minutes or until bubbly.\nBest served with fresh shredded Parmesan, garlic bread, extra sauce and a green salad.",
            "analyzedInstructions": [
                {
                    "name": "",
                    "steps": [
                        {
                            "number": 1,
                            "step": "Brown the beef and the pepper, onion and garlic in olive oil in a large, heavy bottomed sauce pan.",
                            "ingredients": [
                                {
                                    "id": 4053,
                                    "name": "olive oil",
                                    "localizedName": "olive oil",
                                    "image": "olive-oil.jpg"
                                },
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                },
                                {
                                    "id": 1002030,
                                    "name": "pepper",
                                    "localizedName": "pepper",
                                    "image": "pepper.jpg"
                                },
                                {
                                    "id": 11282,
                                    "name": "onion",
                                    "localizedName": "onion",
                                    "image": "brown-onion.png"
                                },
                                {
                                    "id": 0,
                                    "name": "sauce",
                                    "localizedName": "sauce",
                                    "image": ""
                                },
                                {
                                    "id": 23572,
                                    "name": "beef",
                                    "localizedName": "beef",
                                    "image": "beef-cubes-raw.png"
                                }
                            ],
                            "equipment": [
                                {
                                    "id": 404669,
                                    "name": "sauce pan",
                                    "localizedName": "sauce pan",
                                    "image": "sauce-pan.jpg"
                                }
                            ]
                        },
                        {
                            "number": 2,
                            "step": "When browned add the tomato paste, Italian seasonings, sugar, salt, pepper, and bay leaves.",
                            "ingredients": [
                                {
                                    "id": 1022027,
                                    "name": "italian seasoning",
                                    "localizedName": "italian seasoning",
                                    "image": "dried-herbs.png"
                                },
                                {
                                    "id": 11887,
                                    "name": "tomato paste",
                                    "localizedName": "tomato paste",
                                    "image": "tomato-paste.jpg"
                                },
                                {
                                    "id": 2004,
                                    "name": "bay leaves",
                                    "localizedName": "bay leaves",
                                    "image": "bay-leaves.jpg"
                                },
                                {
                                    "id": 1002030,
                                    "name": "pepper",
                                    "localizedName": "pepper",
                                    "image": "pepper.jpg"
                                },
                                {
                                    "id": 19335,
                                    "name": "sugar",
                                    "localizedName": "sugar",
                                    "image": "sugar-in-bowl.png"
                                },
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "localizedName": "salt",
                                    "image": "salt.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 3,
                            "step": "Let cook for a few minutes until the tomato paste is heated through.",
                            "ingredients": [
                                {
                                    "id": 11887,
                                    "name": "tomato paste",
                                    "localizedName": "tomato paste",
                                    "image": "tomato-paste.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 4,
                            "step": "Add the crushed tomatoes and a half of the tomato paste can full of water. Simmer for 25-30 minutes. Taste and re-season halfway through with salt, pepper and herbs if needed and again before serving.",
                            "ingredients": [
                                {
                                    "id": 11693,
                                    "name": "crushed tomatoes",
                                    "localizedName": "crushed tomatoes",
                                    "image": "tomatoes-canned.png"
                                },
                                {
                                    "id": 11887,
                                    "name": "tomato paste",
                                    "localizedName": "tomato paste",
                                    "image": "tomato-paste.jpg"
                                },
                                {
                                    "id": 1002030,
                                    "name": "pepper",
                                    "localizedName": "pepper",
                                    "image": "pepper.jpg"
                                },
                                {
                                    "id": 1002044,
                                    "name": "herbs",
                                    "localizedName": "herbs",
                                    "image": "mixed-fresh-herbs.jpg"
                                },
                                {
                                    "id": 14412,
                                    "name": "water",
                                    "localizedName": "water",
                                    "image": "water.png"
                                },
                                {
                                    "id": 2047,
                                    "name": "salt",
                                    "localizedName": "salt",
                                    "image": "salt.jpg"
                                }
                            ],
                            "equipment": [],
                            "length": {
                                "number": 30,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 5,
                            "step": "While the sauce is simmering cook the ravioli just until they begin to rise to the top and float. You do not need to cook them all the way through.",
                            "ingredients": [
                                {
                                    "id": 93832,
                                    "name": "ravioli",
                                    "localizedName": "ravioli",
                                    "image": "ravioli.png"
                                },
                                {
                                    "id": 0,
                                    "name": "sauce",
                                    "localizedName": "sauce",
                                    "image": ""
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 6,
                            "step": "Drain and toss with a tablespoon of butter or olive oil.",
                            "ingredients": [
                                {
                                    "id": 4053,
                                    "name": "olive oil",
                                    "localizedName": "olive oil",
                                    "image": "olive-oil.jpg"
                                },
                                {
                                    "id": 1001,
                                    "name": "butter",
                                    "localizedName": "butter",
                                    "image": "butter-sliced.jpg"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 7,
                            "step": "Preheat oven to 400 degrees.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ]
                        },
                        {
                            "number": 8,
                            "step": "Remove bay leaves from sauce. Toss a liberal amount of sauce with ravioli. Reserve any excess sauce for serving.",
                            "ingredients": [
                                {
                                    "id": 2004,
                                    "name": "bay leaves",
                                    "localizedName": "bay leaves",
                                    "image": "bay-leaves.jpg"
                                },
                                {
                                    "id": 93832,
                                    "name": "ravioli",
                                    "localizedName": "ravioli",
                                    "image": "ravioli.png"
                                },
                                {
                                    "id": 0,
                                    "name": "sauce",
                                    "localizedName": "sauce",
                                    "image": ""
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 9,
                            "step": "Pour into a greased 9x13 casserole pan.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404635,
                                    "name": "casserole dish",
                                    "localizedName": "casserole dish",
                                    "image": "casserole-dish.png"
                                }
                            ]
                        },
                        {
                            "number": 10,
                            "step": "Sprinkle top with mozzarella.",
                            "ingredients": [
                                {
                                    "id": 1026,
                                    "name": "mozzarella",
                                    "localizedName": "mozzarella",
                                    "image": "mozzarella.png"
                                }
                            ],
                            "equipment": []
                        },
                        {
                            "number": 11,
                            "step": "Bake about 25 minutes or until bubbly.",
                            "ingredients": [],
                            "equipment": [
                                {
                                    "id": 404784,
                                    "name": "oven",
                                    "localizedName": "oven",
                                    "image": "oven.jpg"
                                }
                            ],
                            "length": {
                                "number": 25,
                                "unit": "minutes"
                            }
                        },
                        {
                            "number": 12,
                            "step": "Best served with fresh shredded Parmesan, garlic bread, extra sauce and a green salad.",
                            "ingredients": [
                                {
                                    "id": 1033,
                                    "name": "parmesan",
                                    "localizedName": "parmesan",
                                    "image": "parmesan.jpg"
                                },
                                {
                                    "id": 11215,
                                    "name": "garlic",
                                    "localizedName": "garlic",
                                    "image": "garlic.png"
                                },
                                {
                                    "id": 18064,
                                    "name": "bread",
                                    "localizedName": "bread",
                                    "image": "white-bread.jpg"
                                },
                                {
                                    "id": 0,
                                    "name": "sauce",
                                    "localizedName": "sauce",
                                    "image": ""
                                }
                            ],
                            "equipment": []
                        }
                    ]
                }
            ],
            "originalId": null,
            "spoonacularSourceUrl": "https://spoonacular.com/baked-ravioli-meat-sauce-633752"
        }
    ];

    const [menu, setMenu] = useState([]);

    const [priceOfMenu, setPriceOfMenu] = useState([]);

    const [healthScoreOfMenu, setHealthScoreOfMenu] = useState([]);

    const addToMenu = (item) => {
        if (menu.length >= 4) {
            alert("You've reached 4 dishes limit");
        } else if (item.vegan && checkVeganLimit() === 2) {
            alert("You've reached 2 vegan dishes limit");
        } else if (!item.vegan && checkNonVeganLimit() === 2) {
            alert("You've reached 2 non vegan dishes limit");
        } else {
            setMenu([...menu, item]);
        }
    }


    const checkVeganLimit = () => {
        const veganDishes = menu.filter(dish => dish.vegan);
        console.log(veganDishes.length);
        return veganDishes.length;
    }

    const checkNonVeganLimit = () => {
        const nonVeganDishes = menu.filter(dish => !dish.vegan);
        console.log(nonVeganDishes.length);
        return nonVeganDishes.length;
    }

    useEffect(function () {
        let temp_priceOfMenu = 0;
        let temp_healthScoreOfMenu = 0;
        menu.forEach(function (dish) {
            temp_priceOfMenu += dish.pricePerServing;
            temp_healthScoreOfMenu += dish.healthScore;

        });
        temp_healthScoreOfMenu = temp_healthScoreOfMenu / menu.length;
        setPriceOfMenu(temp_priceOfMenu);
        setHealthScoreOfMenu(temp_healthScoreOfMenu);
    }, [menu])

    const removeFromMenu = (item) => {
        let temp_menu = [...menu];
        temp_menu = temp_menu.filter((dish) => {
            return dish.id !== item.id;
        });
        setMenu([...temp_menu]);
    }

    const checkIsOnMenu = (id) => {
        return menu.some(dish => dish.id === id);
    }

    const context_value = {
        testMode: testMode,
        test__initialResponse: test__initialResponse,
        test__finalResponse: test__finalResponse,
        menu: menu,
        priceOfMenu: priceOfMenu,
        healthScoreOfMenu: healthScoreOfMenu,
        addToMenu: addToMenu,
        removeFromMenu: removeFromMenu,
        checkIsOnMenu: checkIsOnMenu
    }




    return (
        <Provider value={context_value}>
            {children}
        </Provider>
    )
}

export { context, Provider, CustomProvider };