import React, { useState } from 'react';

const ProductCard = ({ product, onAddToCart }) => {
    const [successMessage, setSuccessMessage] = useState('');

    const handleAddToCart = () => {
        onAddToCart(product);
        setSuccessMessage('Product added to cart successfully!');
    };

    return (
        <div>
            <h3>{product.name}</h3>
            <button onClick={handleAddToCart}>Add to Cart</button>
            {successMessage && <p>{successMessage}</p>}
        </div>
    );
};

export default ProductCard;