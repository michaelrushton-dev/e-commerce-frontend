import React, { useState } from 'react';
import DVDForm from '../ProductTypes/DVDForm';
import FurnitureForm from '../ProductTypes/FurnitureForm';
import BookForm from '../ProductTypes/BookForm';

function ProductForm() {
    // CONTROLLED INPUTS
    //state of type switcher which will conditionally render the product entry option (default DVD)
    const [type, setType] = useState('DVD');

    //state of input target values for each field
    const [sku, setSku] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [value, setValue] = useState('');

    //checks that all fields are valid (switched to false by any eroneous entries)
    const [isValid, setIsValid] = useState();

    async function handleSubmit(e) {
        //prevents page refresh on submit
        e.preventDefault();
        //constructing object as per db schema
        const newProduct = {
            sku,
            name,
            price,
            type,
            value,
        };
        console.log(newProduct);

        //regex checking that price and value are of correct value type before submit is allowed
        if (/^(([0-9.]?)*)+$/.test(price) && /^(([0-9.]?)*)+$/.test(value)) {
            try {
                const response = await fetch(
                    'http://localhost/scandiweb_proj/api/add_item.php',
                    { method: 'POST', body: JSON.stringify(newProduct) }
                );
                console.log(JSON.stringify(newProduct));
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.log('There was an error', error);
            }
        } else {
            alert('Please correct the input errors before submitting');
        }
    }
    console.log(isValid);

    return (
        <>
            <form id='product_form' onSubmit={handleSubmit}>
                <label>
                    <p>SKU</p>
                    <input
                        type='text'
                        name='SKU'
                        id='sku'
                        required
                        value={sku}
                        onChange={(e) => {
                            setSku(e.target.value);
                        }}
                        onInvalid={(e) => {
                            e.target.setCustomValidity(
                                'Please, submit required data'
                            );
                        }}
                        onInput={(e) => e.target.setCustomValidity('')}
                    />
                </label>
                <label>
                    <p>NAME</p>
                    <input
                        type='text'
                        name='NAME'
                        id='name'
                        required
                        value={name}
                        onInvalid={(e) => {
                            e.target.setCustomValidity(
                                'Please, submit required data'
                            );
                        }}
                        onInput={(e) => e.target.setCustomValidity('')}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                {/* {/\d/.test(name) && (
                    <p style={{ color: 'red' }}>Name can not contain numbers</p>
                )} */}
                <label>
                    <p>PRICE($)</p>
                    <input
                        type='text'
                        name='PRICE'
                        id='price'
                        required
                        value={price}
                        onInvalid={(e) => {
                            e.target.setCustomValidity(
                                'Please, submit required data'
                            );
                        }}
                        onChange={(e) => {
                            if (
                                e.target.value.toUpperCase() ==
                                e.target.value.toLowerCase()
                            ) {
                                console.log('is a number');
                                setPrice(e.target.value);
                            } else {
                                console.log('isnt a number');
                                setPrice(e.target.value);
                            }
                        }}
                        onInput={(e) => e.target.setCustomValidity('')}
                    />
                </label>

                {!/^(([0-9.]?)*)+$/.test(price) && (
                    <p style={{ color: 'red' }}>
                        Please enter only numerical values
                    </p>
                )}
                <br></br>
                <select
                    id='productType'
                    name='product-switcher'
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value='DVD'>DVD</option>
                    <option value='Furniture'>Furniture</option>
                    <option value='Book'>Book</option>
                </select>
                <div id='product-option'>
                    {type == 'DVD' ? (
                        <DVDForm setSize={setValue} size={value} />
                    ) : type == 'Furniture' ? (
                        <FurnitureForm setDimensions={setValue} />
                    ) : (
                        <BookForm setWeight={setValue} weight={value} />
                    )}
                </div>
            </form>
        </>
    );
}

export default ProductForm;
