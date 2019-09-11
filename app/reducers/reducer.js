// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {ADD_CONTACT, REMOVE_CONTACT, EDIT_CONTACT, ADD_DATA, GET_VALUE_TEXT_INPUT} from '../actions/ActionTypes'

export default function reducer(state = {}, action) {
    switch (action.type) {
    case ADD_DATA :
        return {
            ...state,
            data: action.data,
        }
    case ADD_CONTACT :
        return {
            ...state,
            data: state.data.concat([action.item]),
        }
    case REMOVE_CONTACT :
        return {
            ...state,
            data: state.data.filter((item) => item.id !== action.id),
        }
    case EDIT_CONTACT:
        const newItem = action.data
        const newData = state.data.map((item) => {
            if (newItem.id === item.id) {
                return {
                    ...newItem,
                }
            } else {
                return {
                    ...item,
                }
            }
        })
        return {
            ...state,
            data: newData,
        }
    case GET_VALUE_TEXT_INPUT:
        return {
            ...state,
            text1: action.text1,
            text2: action.text2,
            text3: action.text3,
        }
    default:
        return state
    }
}
