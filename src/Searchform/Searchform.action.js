import {CHANGE_SEARCH_FILED,
        REQUEST_PICTURES_FAILED,
        REQUEST_PICTURES_PENDING,
        REQUEST_PICTURES_SUCCESS} 
from './Searchform.constants';


export const setSearchFiled = (text)=> {
    return{
        type:CHANGE_SEARCH_FILED,
        payload:text
    }
}

export const requestPictures = (p) => (dispatch)=>{
    console.log(p);
    dispatch({type:REQUEST_PICTURES_PENDING});
    fetch("https://pixabay.com/api/?key=18739075-8840b55cd2f755b50c01e67ae&q=casablanca").then(
        response => response.json()
    ).then(
       data =>{
           dispatch(
               {
                   type:REQUEST_PICTURES_SUCCESS,
                   payload:data
               }
           )  
       }
    ).catch(
        error=>{
            dispatch(
               { type:REQUEST_PICTURES_FAILED,
                payload: error
            }
            )
        }
    )
}