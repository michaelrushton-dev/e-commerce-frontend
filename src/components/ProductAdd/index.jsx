import React from 'react';
import SaveButton from './SaveButton';
import CancelButton from './CancelButton';
import ProductForm from './ProductForm';

function ProductAdd() {
    return (
        <div>
            <div id='main-page'>
                <div id='heading'>
                    <h1>Product Add</h1>
                    <div id='button-container'>
                        <SaveButton />
                        <CancelButton />
                    </div>
                </div>
                <div>
                    <ProductForm />
                </div>
            </div>
        </div>
    );
}

export default ProductAdd;
