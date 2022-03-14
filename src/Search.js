import { useEffect, useState, useContext } from "react";
import DishesContainer from "./DishesContainer";
import axios from 'axios';
import { context } from "./context/MenuContext";

const Search = () => {

    const { menu, testMode, test__initialResponse, test__finalResponse } = useContext(context);

    const [query, setQuery] = useState([]);
    const [initialResponse, setInitialResponse] = useState([]);
    const [finalResponse, setFinalResponse] = useState([]);


    const apiKey = "ccd446e043f74c7cae7790969ca272ca";
    // const apiKey = "2f417f9912e94a46bd1da895e7a69cd6";

    // 1) GET INITIAL RESPONSE
    const getInitialResponse = () => {
        if (testMode) {
            setInitialResponse(test__initialResponse);
        } else {
            axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
                params: {
                    apiKey: apiKey,
                    query: query
                }
            })
                .then(function (response) {
                    setInitialResponse(response);
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }

    // 2) GET DETAILED INFO OF DISH
    const getRecipeInformation = (id) => {
        axios.get(`https://api.spoonacular.com/recipes/${id}/information`, {
            params: {
                apiKey: apiKey
            }
        })
            .then(function (response) {
                console.log(response);
                return response;
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    // 3) GET FINAL RESPONSE

    const getFinalResponse = () => {
        if (testMode) {
            console.log("here");
            setFinalResponse(test__finalResponse);
        } else if (initialResponse.data.results.length !== 0) {
            let dishes = [];
            let promises = [];
            for (let i = 0; i < initialResponse.data.results.length; i++) {
                promises.push(
                    axios.get(`https://api.spoonacular.com/recipes/${initialResponse.data.results[i].id}/information`, {
                        params: {
                            apiKey: apiKey
                        }
                    }).then(response => {
                        dishes.push(response.data);
                    })
                )
            }
            Promise.all(promises).then(function () {
                console.log(dishes);
                setFinalResponse(dishes);
            });
        } else {
            console.log("No dishes on initialResponse.");
        }
    }

    useEffect(() => {
        if (initialResponse && initialResponse.length !== 0) {
            console.log("initialResponse");
            console.log(initialResponse);
            getFinalResponse();
        }
    }, [initialResponse]);

    useEffect(() => {
        console.log("finalResponse");
        console.log(finalResponse);
        // console.log("menu");
        // console.log(menu);
    }, [finalResponse]);



    //     4) SET FINAL RESPONSE

    //     useEffect(() => {
    //         finalResponse.map(dish => {
    // return dish.
    //         })
    //     }, [finalResponse]);



    const handleSubmit = (e) => {
        e.preventDefault();
        getInitialResponse(query);
    }
    const handleChange = (e) => {
        setQuery(e.target.value);
    }




    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <input placeholder={"Enter your query"} minLength={2} onChange={handleChange} type="text" value={query} />
                <button type="submit">Search</button>
            </form>
            <DishesContainer dishesToDisplay={finalResponse} />
        </div>

    )
}

export default Search;