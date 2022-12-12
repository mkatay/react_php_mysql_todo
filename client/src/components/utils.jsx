import axios from 'axios'
const url='http://localhost/REACT_PHP_MYSQL/todo/server/'

export const allTodos =async () =>{
    const response=await axios.get(url+'allTodos.php')
    const data=await response
    return data
}
export const addTodo =async ({newTodo}) =>{
    const config= {
        headers: {
        "Content-type": "multipart/form-date"
    }}
    const formdata=new FormData()
    formdata.append("newTodo",newTodo)
    const response=await axios.post(url+'addTodo.php',formdata,config)
    const data=await response
    return data
}
export const delTodo =async ({id}) =>{
    const response=await axios.delete(url+'delTodo.php?id='+id)
    const data=await response
    return data
}
//a put-al csak a 2.kattintásra működik, miért????????????????????????
export const updateTodo =async ({id}) =>{
    const response=await axios.get(url+'updateTodo.php?id='+id)
    const data=await response
    return data
}