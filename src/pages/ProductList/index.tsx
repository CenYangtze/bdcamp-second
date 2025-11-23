import React from 'react';
import { observer } from 'mobx-react-lite';
import { useProductStore, useFilterStore } from '../../stores';

const ProductList = observer(() => {
    const productStore = useProductStore();
    const filterStore = useFilterStore();

    const paginatedProducts = productStore.getPaginatedProducts(filterStore.currentPage);

    return (
        <div>
            {/* Implement pagination and product listing here */}
            <ul>
                {paginatedProducts.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
});

export default ProductList;