import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import AllProduct from "../AllProduct/AllProduct";
import './AllProducts.css';
import ProductModal from "../ProductModal/ProductModal";
const AllProducts = () => {
  const [Products, setAllProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [countProduct, setCountProduct] = useState([]);

  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => {
        setAllProducts(result);
        setDisplayProducts(result);
      });
  }, []);
  useEffect(() => {
    let data = [
      "electronics",
      "jewelery",
      "men's clothing",
      "women's clothing"
    ]

    let filteredProduct = [];

    data.map((it) => {
      let filteredLength = Products.filter((item) => item.category == it);
      filteredProduct.push(filteredLength.length);
    });
    setCountProduct(filteredProduct);
  }, [Products])
  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchedProducts = Products.filter((product) =>
      product.category?.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayProducts(matchedProducts);
  };
  const handleSelect = (event) => {
    const selectText = event.target.value;
    const matchedProducts = Products.filter((product) =>
      product.category?.toLowerCase().includes(selectText.toLowerCase())
    );
    setDisplayProducts(matchedProducts);
  }
 




  return (
    <div>
      <div className="search-select">
        <input type="text" onChange={handleSearch} placeholder="Search Product" />
        <br />
        <select onChange={handleSelect} placeholder="Select Category">
          <option value="" selected disabled  >Select Category</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelery</option>
          <option selected value="men's clothing">Men's clothing</option>
          <option value="women's clothing">Women's clothing</option>
        </select>
      </div>
      <div className="container my-3">
        <h1 >All Products</h1>
        <Row className="py-3 my-2">
          {displayProducts.map((product) => (
            <Col md={4} sm={6} className="my-2">
              <AllProduct key={product.id} product={product}></AllProduct>{" "}
            </Col>
          ))}
        </Row>
        <div className="analyse"> <Button onClick={() => setModalShow(true)}>Analyse</Button></div>
        <ProductModal key={Products.id} show={modalShow} product={Products} countProduct= {countProduct} onHide={() => setModalShow(false)} />
      </div>
    </div>
  );
};

export default AllProducts;
