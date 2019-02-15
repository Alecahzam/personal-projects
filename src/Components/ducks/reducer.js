import axios from "axios";

const initialState = {
  user: {},
  error: false
};

const LOGIN = "LOGIN";
const GET_USER= "GET_USER"

export const login = (username, password) => {
  return { type: LOGIN, payload: axios.post("/api/login", {username: username, password: password }) };
};

export const getUser = () => {
    return {
        type: GET_USER,
        payload: axios.get("/api/me")
    }
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN + '_FULFILLED':
    console.log(action.payload)
    return {
        ...state,
        user: action.payload.data
    }

    case LOGIN + "_REJECTED":
    return {
        ...state,
        error: true
    }

    case `${GET_USER}_FULFILLED`:
    return {
        ...state,
        user: action.payload.data
    }

    default:
      return state;
  }
}
