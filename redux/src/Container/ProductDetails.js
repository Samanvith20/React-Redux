import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {  removeSelectedProduct, selectproduct } from '../Redux/actions/ProductActions';
import { useDispatch, useSelector } from 'react-redux';

const ProductDetails = () => {
  const { productID } = useParams();
  console.log(productID)
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();

  const fetchProductDetail = async (id) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
      dispatch(selectproduct(response.data));
      //console.log(response)
    } catch (err) {
      console.log('Err:', err);
    }
  };

  useEffect(() => {
    if (productID && productID !== '') {
      fetchProductDetail(productID);
    }
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productID, dispatch]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <div className="ui teal tag label">${price}</div>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
