import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { exampleTypes, exampleActions } from "../../states/example";

const Home = () => {

    const dispatch = useDispatch();
    const resetGetRequest = () => dispatch(exampleActions.resetGetRequest());
    const resetPostRequest = () => dispatch(exampleActions.resetPostRequest());

    const getRequestResponse = useSelector(({ example }) => example.getRequestResponse);
    const postRequestResponse = useSelector(({ example }) => example.postRequestResponse);

    const [getRequestState, setGetRequestState] = useState(null);
    const [postRequestState, setPostRequestState] = useState(null);

    useEffect(() => {
        dispatch(exampleActions.getRequest());
        dispatch(exampleActions.postRequest());
    }, []);

    useEffect(() => {
        const { type, message } = getRequestResponse;
        
        if (type === exampleTypes.GET_REQUEST_SUCCESS) {
            resetGetRequest();
            setGetRequestState(message);
           
        }

        if (type === exampleTypes.GET_REQUEST_FAIL) {
            resetGetRequest();
            setGetRequestState(message);
        }

    }, [getRequestResponse]);

    useEffect(() => {
        const { type, message } = postRequestResponse;

        if (type === exampleTypes.POST_REQUEST_SUCCESS) {
            resetPostRequest();
            setPostRequestState(message);
        }

        if (type === exampleTypes.POST_REQUEST_FAIL) {
            resetPostRequest();
            setPostRequestState(message);
        }

    }, [postRequestResponse]);

    return (
        <div>
            <h1>Home Page</h1>

            <div>
                <p>Initial state for getRequestResponse: {getRequestResponse.type}</p>
                <p>Initial state for postRequestResponse: {postRequestResponse.type}</p>
            </div>

            <div>
                <p>Message for getRequestResponse: {getRequestState}</p>
                <p>Message for postRequestResponse: {postRequestState}</p>
            </div>
        </div>
    )
};

export default (Home);