import React from "react";
import {useParams,useNavigate} from 'react-router-dom'
import {Card,CardTitle,CardText,CardBody,Button} from 'reactstrap'
import {data} from '../products'
import { MyImg } from "./MyImg";

export const Product = () => {
    const navigate=useNavigate()
    const params=useParams()
    //console.log(params.id)
    const product=data.find(obj=> obj.id == params.id)
    //console.log(product)

  return (
    <Card  style={{ width: "30rem", }}>
        <MyImg product={product}/>
      {/*<img alt="Sample" src={product.imgUrl} />*/}
      <CardBody>
        <CardTitle tag="h5">{product.name}</CardTitle>        
        <CardText> Price:{product.price} </CardText>
        <Button onClick={() =>navigate('/products')}>back to all products...</Button>
      </CardBody>
    </Card>
  );
};
