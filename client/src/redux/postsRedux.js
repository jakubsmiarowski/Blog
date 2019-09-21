import axios from 'axios';
import { API_URL } from '../config';

// Selectors

export const getPosts = ({ posts }) => posts.data;
export const getPostsNumber = ({ posts }) => posts.data.length;
export const getRequest = ({ posts }) => posts.request;

// Thunk

export const loadPostsRequest = () => {
    return async dispatch => {

        try {

            let res = await axios.get(`${API_URL}/posts`);
            await new Promise((resolve, reject) => setTimeout(resolve, 2000));
            dispatch(loadPosts(res.data));
            dispatch(endRequest());

        } catch (e) {
            dispatch(errorRequest(e.message));
        }

    };
};

// action name creator

const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

// Actions

export const LOAD_POSTS = createActionName('LOAD_POSTS');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');

// creator actions

export const loadPosts = payload => ({ payload, type: LOAD_POSTS });
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });

// Initial State

const initialState = {
    data: [],
    request: {
        pending: false,
        error: null,
        success: null,
    },
};

// Reducer

export default function reducer(statePart = initialState, action = {}) {
    switch (action.type) {
        case LOAD_POSTS:
            return {...statePart, data: action.payload };
        case START_REQUEST:
            return {...statePart, request: { pending: true, error: null, success: null } };
        case END_REQUEST:
            return {...statePart, request: { pending: false, error: null, success: true } };
        case ERROR_REQUEST:
            return {...statePart, request: { pending: false, error: action.error, success: false } };
        default:
            return statePart;
    }
};