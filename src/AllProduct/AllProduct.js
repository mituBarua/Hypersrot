import React from 'react';
import { Card } from 'react-bootstrap';
import './AllProduct.css';
const AllProduct = ({ product }) => {
    const { title, price, description, category, image, rating } = product;
    return (
        <div>
            <Card className="product pt-2" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <h6>{category}</h6>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>{description.slice(0,100)}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AllProduct;