import React,{useState} from "react";
import { ListGroup,ListGroupItem,Input,Form } from "reactstrap";
import {useQuery,useQueryClient,useMutation} from 'react-query'
import {allTodos,addTodo,delTodo,updateTodo} from './utils'

export const Todo = ({ setIsLoggedIn }) => {
    // Access the client
   const queryClient = useQueryClient()
   const {data,status}=useQuery('todos',allTodos)

   const [newItem,setNewItem]=useState('')
 
   status=="success" && console.log(data.data)
  
   // Mutations
   const mutationAdd = useMutation(addTodo, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('todos')
      setNewItem('')
    },
  })
  const mutationDel = useMutation(delTodo, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('todos')
    },
  })
  const mutationUpdate = useMutation(updateTodo, {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries('todos')
    },
  })

  return (
    <div className="container text-center todo">
      <h3>My Todos</h3>

      <Form className="mb-1 d-flex">
          <Input placeholder="add todo" value={newItem} onChange={(e)=>setNewItem(e.target.value)}/>
          <i className="fa-solid fa-plus btn btn-primary fa-2x" onClick={()=>mutationAdd.mutate({newTodo: newItem})}></i>
      </Form>

      <ListGroup className="">
        {status=="loading" && <p>data is loading...</p>}
        {status=="error" && <p>error fetching data!!!</p>}
        {status=="success" && data.data.map(obj=>
           <ListGroupItem key={obj.id} className="d-flex justify-content-between">
              <i className="fa-solid fa-check  fa-2x" 
                style={ {color:obj.status==1 ? "green":"gray"}}
                onClick={()=>mutationUpdate.mutate({id:obj.id})}></i>
              <span className={obj.status==1? "done" : ""}>{obj.name}</span>
              <i className="fa-solid fa-trash text-danger " onClick={()=>mutationDel.mutate({id:obj.id})}></i>
          </ListGroupItem>
          )}
       
      </ListGroup>
      <div className="btn btn-primary" onClick={() => setIsLoggedIn(false)}>
        logout
      </div>
    </div>
  );
};
