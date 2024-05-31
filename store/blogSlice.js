import { createSlice } from "@reduxjs/toolkit";
import STATUSES from "../src/global/statuses/statuses";
import API from "../src/http";

const blogSlice = createSlice({
    name : 'blog',
    initialState : {
        inputData : null,
        status : null

    },
    reducers : {
        setInputData(state,action){
            state.inputData = action.payload
        },
        setStatus(state,action){
            state.status = action.payload
        }
    }
    
})

export const {setInputData,setStatus} = blogSlice.actions



export default blogSlice.reducer

export function createBlog(data){
    return async function createBlogThunk(dispatch){
     dispatch(setStatus(STATUSES.LOADING)) 
     try {
        const response =   await API.post('blog',data)
        if(response.status === 201){
            dispatch(setStatus(STATUSES.SUCCESS))
        }else{
            dispatch(setStatus(STATUSES.ERROR))
        }
     } catch(error){
        dispatch(setStatus(STATUSES.ERROR))
     }
    }
}
export function fetchBlog(){
    return async function fetchBlogThunk(dispatch){
     dispatch(setStatus(STATUSES.LOADING)) 
     try {
        const response =   await API.get('blog')
        if(response.status === 200 && response.data.data.length > 0){
            dispatch(setInputData(response.data.data))
            dispatch(setStatus(STATUSES.SUCCESS))
        }else{
            dispatch(setStatus(STATUSES.ERROR))
        }
     } catch(error){
        dispatch(setStatus(STATUSES.ERROR))
     }
    }
}
 
export function fetchSingleBlog(id){
    return async function fetchSingleBlogThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
        try {
            const response = await API.get(`blog/${id}`)
            if(response.status === 200){
                dispatch(setInputData(response.data.data))
                dispatch(setStatus(STATUSES.SUCCESS))
            }else{
                dispatch(setStatus(STATUSES.ERROR))
            }

        }catch(error){
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}