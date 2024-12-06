import axios from "axios"
import baseURL from "./baseUrl"
import toast from "react-hot-toast"

//get all todo
export const getAllTodo=()=>{
    return axios.get(`${baseURL}tasks`)
}


//update todo
export const updateTodo=(id,data)=>{

    return axios.put(`${baseURL}tasks/${id}`,data)
}


//post todo
export const postTodo=(todo)=>{
  
            return axios.post(`${baseURL}tasks`,{todo})
        
}


//delete  todo
export const deleteTodo=(id)=>{
    return axios.delete(`${baseURL}tasks/${id}`)
}

