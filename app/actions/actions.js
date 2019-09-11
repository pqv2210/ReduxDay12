// Copyright (c) 2019-present vantuan88291, Personal. All Rights Reserved.
import {ADD_CONTACT, REMOVE_CONTACT, EDIT_CONTACT, ADD_DATA, GET_VALUE_TEXT_INPUT} from './ActionTypes'
import data from '../services/data'

export const addData = () => {
    return {
        type: ADD_DATA,
        data,
    }
}

export const addContact = (data) => {
    return {
        type: ADD_CONTACT,
        item: {
            id: data.id,
            full_name: data.full_name,
            phone_number: data.phone_number,
            avatar_url: 'https://placeimg.com/150/150/dog',
            gmail: data.gmail,
        },
    }
}

export const removeContact = (id) => {
    return {
        type: REMOVE_CONTACT,
        id,
    }
}

export const editContact = (data) => {
    return {
        type: EDIT_CONTACT,
        data: {
            id: data.id,
            full_name: data.full_name,
            phone_number: data.phone_number,
            avatar_url: 'https://placeimg.com/140/140/dog',
            gmail: data.gmail,
        },
    }
}

export const getValueTextInput = (text1, text2, text3) => {
    return {
        type: GET_VALUE_TEXT_INPUT,
        payload: {
            text1,
            text2,
            text3,
        },
    }
}