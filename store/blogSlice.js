import { createSlice } from "@reduxjs/toolkit";
import STATUSES from "../src/global/statuses/statuses";
import API from "../src/http";

const blogSlice = createSlice({
    name : 'blog',
    initialState : {
        inputData :[],
        status : null,
        deleteStatus : false,
        editStatus : null

    },
    reducers : {
        setInputData(state,action){
            state.inputData = action.payload
        },
        setStatus(state,action){
            state.status = action.payload
        },
        setDeleteStatus(state,action){
            state.deleteStatus = action.payload
        },
        setEditStatus(state,action){
            state.editStatus = action.payload
        },
        resetDeleteStatus: (state) => {
            state.deleteStatus = false;
          }
    },
    extraReducers: (builder) => {
        builder
          // eslint-disable-next-line no-unused-vars
          .addCase(deleteBLog.fulfilled, (state,action) => {
            state.deleteStatus = true;
          })
          .addCase(fetchSingleBlog.fulfilled, (state, action) => {
            state.inputData = action.payload;
          });
      },
    
})

export const {setInputData,setStatus, setDeleteStatus,setEditStatus, resetDeleteStatus} = blogSlice.actions 



export default blogSlice.reducer

export function createBlog(data){
    return async function createBlogThunk(dispatch){
     dispatch(setStatus(STATUSES.LOADING)) 
     try {
        const response =   await API.post('http://localhost:3000/book/',data)
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
        const response =   await API.get('http://localhost:3000/book/')
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
            const response = await API.get(`http://localhost:3000/book/${id}`)
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

export function deleteBLog(id){
    return async function deleteBlogThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING))
        try{
           const response = await API.delete(`http://localhost:3000/book/${id}`)
           if(response.status === 200){
            dispatch(setDeleteStatus(true))
           
        }else{
            dispatch(setDeleteStatus(null))
           }
        }catch(error){
            dispatch(setDeleteStatus(false))
        }
    }

}

export function editBlog(id,data){
    return async function editBlogThunk(dispatch){
        dispatch(setStatus(STATUSES.LOADING) )
        try {
            const response = await API.patch(`blog/${id}`,data)
            if (response.status === 200){
                dispatch(setEditStatus(true))
            }
            else{
                dispatch(setEditStatus(null))
            }
        }catch(error){
            dispatch(setStatus(STATUSES.ERROR))
        }
    }
}