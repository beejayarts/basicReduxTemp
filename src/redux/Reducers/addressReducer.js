

import {SET_ADDRESS} from '../Types/types';

const initialState = {
    data: []
  };

export const addressReducer = (state=initialState,action) => {
  switch(action.type){
    case SET_ADDRESS:
        return{
            ...state,
            data:[...state.data, action.payload]
        };
        default:
        return state;
  }
};
