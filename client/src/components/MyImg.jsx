import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

export const MyImg = ({ product }) => (
  <div>
    <LazyLoadImage
    style={{ width: "30rem", }}
      alt={product.name}
      effect="blur"
      src={product.imgUrl} // use normal <img> attributes as props
    />
    <span>{product.name}</span>
  </div>
);
