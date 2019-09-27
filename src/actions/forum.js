import axios from 'axios';

export const fetchCategories = () => async dispatch => {
    const res = await axios.get(`http://localhost:8080/forum_backend/api`);
    console.log(res.data)
    dispatch({ type: FETCH_CATEGORIES, payload: res.data.categories });


};

const baseState = { categories: [] };
export default (state = baseState, action) => {
    switch (action.type) {
        case FETCH_CATEGORIES:
            return { ...state, categories: action.payload }
        default:
            return state;
    }
}