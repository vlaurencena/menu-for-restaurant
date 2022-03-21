import { useEffect, useState, useContext } from "react";
import DishesContainer from "./DishesContainer";
import axios from 'axios';
import { context } from "./context/MenuContext";
import { ToastContainer } from 'react-toastify';
import { SyncLoader } from "react-spinners";


const Search = () => {

    const { menu, testMode, test__initialResponse, test__finalResponse } = useContext(context);

    const [query, setQuery] = useState([]);
    const [initialResponse, setInitialResponse] = useState([]);
    const [finalResponse, setFinalResponse] = useState([]);
    const [dishesToDisplay, setDishesToDisplay] = useState([]);
    const [showMore, setShowMore] = useState(false);
    const [offset, setOffset] = useState(0);
    const [showLoader, setShowLoader] = useState(false);
    const numberOfResults = 3;


    const apiKey = "ccd446e043f74c7cae7790969ca272ca";
    // const apiKey = "2f417f9912e94a46bd1da895e7a69cd6";

    const loaderColor = "#7FFFD4";

    // TODO ARREGLAR SYNCLOADER

    // 1) GET INITIAL RESPONSE
    const getInitialResponse = () => {
        setShowLoader(true);
        if (testMode) {
            setInitialResponse(test__initialResponse);
        } else {
            axios.get(`https://api.spoonacular.com/recipes/complexSearch`, {
                params: {
                    apiKey: apiKey,
                    query: query,
                    number: numberOfResults,
                    offset: offset * numberOfResults,
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

    useEffect(() => {
        if (initialResponse.length !== 0) {
            setFinalResponse([]);
            getFinalResponse();
        }
    }, [initialResponse]);

    // 2) GET FINAL RESPONSE

    const getFinalResponse = () => {
        if (testMode) {
            setTimeout(function () {
                setFinalResponse(test__finalResponse);
            }, 2000);
        } else
            if (initialResponse.data.results.length !== 0) {
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
        if (finalResponse.length !== 0) {
            // setShowLoader(false);
            console.log("finalResponse");
            if (offset === 0) {
                setDishesToDisplay(finalResponse);
            } else {
                setDishesToDisplay([...dishesToDisplay, ...finalResponse])
            }
        }
    }, [finalResponse]);

    useEffect(() => {
        if (offset !== 0) {
            console.log("offset");
            getInitialResponse();
        }
    }, [offset]);

    useEffect(() => {
        const dishesToDisplayOnLS = localStorage.getItem("dishesToDisplay");
        dishesToDisplayOnLS && setDishesToDisplay(JSON.parse(dishesToDisplayOnLS));
        const queryOnLS = localStorage.getItem("queryOnLS");
        queryOnLS && setDishesToDisplay(JSON.parse(queryOnLS));
    }, []);

    useEffect(() => {
        if (dishesToDisplay.length !== 0) {
            localStorage.setItem("dishesToDisplay", JSON.stringify(dishesToDisplay));
            localStorage.setItem("query", query);
        }
        if (initialResponse.length !== 0) {
            initialResponse.data.totalResults > initialResponse.data.number * initialResponse.data.offset && setShowMore(true);
        }
    }, [dishesToDisplay]);


    const handleSubmit = (e) => {
        e.preventDefault();
        getInitialResponse();
    }
    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    const handleShowMore = () => {
        setOffset(offset + 1);
    }

    return (
        <div className="search-container">
            <form onSubmit={handleSubmit}>
                <input placeholder={"Enter your query"} minLength={2} onChange={handleChange} type="text" value={query} />
                <button type="submit">Search</button>
            </form>
            <SyncLoader color={loaderColor} loading={showLoader} />ﬂ
            {!showLoader && <DishesContainer dishesToDisplay={dishesToDisplay} />}
            {showMore && <div className="search-container__show-more" onClick={handleShowMore}>Show more...</div>}
            <ToastContainer />
        </div>

    )
}

export default Search;