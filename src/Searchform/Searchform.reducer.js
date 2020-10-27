import {CHANGE_SEARCH_FILED,
        REQUEST_PICTURES_FAILED,
        REQUEST_PICTURES_PENDING,
        REQUEST_PICTURES_SUCCESS} 
from './Searchform.constants';

const searchFormState={
inputFiled:''
}

const picturesState = {
    pictures:[],
    isPending: false,
    error:''
}

export const searchPictures = (state= searchFormState, action= {})=> {
    switch (action.type) {
        case CHANGE_SEARCH_FILED:
            return {...state, inputFiled:action.payload}
        default:
            return state;
    }
}

export const RequestPictures = (state= picturesState, action= {})=> {
switch (action.type) {
    case REQUEST_PICTURES_PENDING:
        return {...state, isPending:true}
    case REQUEST_PICTURES_SUCCESS:
        return {...state, isPending:false, pictures:action.payload}
    case REQUEST_PICTURES_FAILED:
        return {...state, isPending:false, error:action.payload}
    default:
        return state;
}

}
