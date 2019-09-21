import axios from 'axios';
import { API_URL } from '../config';

// Selectors

// Actions

// Thunk

export const loadPostsRequest = () => {
    return async dispatch => {

        try {

            let res = await axios.get(`${API_URL}/posts`);
            dispatch(loadPosts(res.data));

        } catch (e) {
            console.log(e.message);
        }

    };
};

// action name creator
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;
export const loadPosts = payload => ({ payload, type: LOAD_POSTS });
export const getPosts = ({ posts }) => posts;
export const LOAD_POSTS = createActionName('LOAD_POSTS');


// Initial State

const initialState = [];

// Reducer

export default function reducer(statePart = initialState, action = {}) {
    switch (action.type) {
        case LOAD_POSTS:
            return [...action.payload];
        default:
            return statePart;
    }
};