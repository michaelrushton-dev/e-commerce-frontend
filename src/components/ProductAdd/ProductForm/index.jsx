import React, { useState, useContext, useEffect } from 'react';
import DVDForm from '../ProductTypes/DVDForm';
import FurnitureForm from '../ProductTypes/FurnitureForm';
import BookForm from '../ProductTypes/BookForm';
import { useNavigate } from 'react-router-dom';
//bringing in list context to check for existing SKUs
import { ListContext } from '../../../App';

function ProductForm() {
    //context of list of products with values listState and listDispatch
    const listContext = useContext(ListContext);
    //react-router hook, used to redirect to '/' home once handleSubmit is called
    const navigate = useNavigate();

    // CONTROLLED INPUTS
    //state of type switcher which will conditionally render the product entry option (default DVD)
    const [type, setType] = useState('DVD');

    //state of input target values for each field
    const [sku, setSku] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [value, setValue] = useState('');

    const [skuClash, setSkuClash] = useState(false);

    useEffect(() => {
        for (const item of listContext.listState) {
            if (item.sku == sku) {
                setSkuClash(true);
                return;
            } else {
                setSkuClash(false);
            }
        }
    }, [sku]);

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

        //regex checking that price and value are of correct value type and that sku is unique before submit is allowed
        if (
            /^(([0-9.]?)*)+$/.test(price) &&
            /^(([0-9.x]?)*)+$/.test(value) &&
            !skuClash
        ) {
            try {
                const response = await fetch(
                    'http://localhost/scandiweb_proj/api/add_item.php',
                    { method: 'POST', body: JSON.stringify(newProduct) }
                );
                console.log(JSON.stringify(newProduct));
                const data = await response.json();
                console.log(data);
                //refreshes the ProductList by triggering a fetch GET on db table
                listContext.listDispatch({ type: 'trigger' });
                //redirects browser to home
                navigate('/');
            } catch (error) {
                console.log('There was an error', error);
            }
        } else {
            alert('Please correct the input errors before submitting');
        }
    }

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
                {skuClash && <p style={{ color: 'red' }}>SKU already in use</p>}
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
