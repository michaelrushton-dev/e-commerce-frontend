import React, { useState } from 'react';
import DVDForm from '../ProductTypes/DVDForm';
import FurnitureForm from '../ProductTypes/FurnitureForm';
import BookForm from '../ProductTypes/BookForm';

function ProductForm() {
    const [type, setType] = useState('DVD');
    function handleProduct(e) {
        setType(e.target.value);
    }
    return (
        <>
            <div>ProductForm</div>
            <form id='product_form'>
                <label>
                    <p>SKU</p>
                    <input type='text' name='SKU' id='sku' />
                </label>
                <label>
                    <p>NAME</p>
                    <input type='text' name='NAME' id='name' />
                </label>
                <label>
                    <p>PRICE($)</p>
                    <input type='text' name='PRICE' id='price' />
                </label>

                <input type='submit' value='Submit' />

                <br></br>
                <select
                    id='productType'
                    name='product-switcher'
                    onChange={handleProduct}
                >
                    <option value='DVD'>DVD</option>
                    <option value='Furniture'>Furniture</option>
                    <option value='Book'>Book</option>
                </select>
                <div id='product-option'>
                    {type == 'DVD' ? (
                        <DVDForm />
                    ) : type == 'Furniture' ? (
                        <FurnitureForm />
                    ) : (
                        <BookForm />
                    )}
                </div>
            </form>
        </>
    );
}

export default ProductForm;
