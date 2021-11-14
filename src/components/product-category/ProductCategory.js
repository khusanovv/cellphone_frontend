import React, { Suspense } from 'react';
import ProductSkeleton from '../skeletons/product_sk/ProductSkeleton';
import './ProductCategory.css';
const Product = React.lazy(() => import("../product/Product"));


function ProductCategory({title, data}) {
    return (
        <div className='product__category'>
            <h1>{title}</h1>
            <div className="product__wrapper">
                {
                data &&
                data?.map(customerProduct => 
                    <Suspense fallback={ new Array(data).fill(8).map(product => 
                        <ProductSkeleton/> )}>
                        <Product data={customerProduct}/>  
                    </Suspense>  
                )
                }
            </div>
        </div>
    )
}

export default ProductCategory
