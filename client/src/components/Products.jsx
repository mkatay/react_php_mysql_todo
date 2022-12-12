import React, { useState } from "react";
import { data } from "../products";
import { ListGroup,ListGroupItem } from "reactstrap";
import {useNavigate} from 'react-router-dom'

export const Products = () => {
  const [products, setProducts] = useState(data);
  const navigate=useNavigate()

  return (
    <div>
      <h1>Products</h1>
      <ListGroup>
        {products.map(obj=>
             <ListGroupItem onClick={()=>navigate('/products/'+obj.id)} 
                className="btn btn-primary" key={obj.id}>
                    {obj.name}
            </ListGroupItem>
            )}  
      </ListGroup>
    </div>
  );
};
