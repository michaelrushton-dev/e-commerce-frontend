import React from 'react';
import AddButton from './AddButton';
import MassDeleteButton from './MassDeleteButton';
import './product-list.css';

function ProductList({ list }) {
    console.log(list);
    return (
        <>
            <div id='main-page'>
                <div id='heading'>
                    <h1>Product List</h1>
                    <div id='button-container'>
                        <AddButton />
                        <MassDeleteButton />
                    </div>
                </div>
                <div id='product-display'>
                    {list &&
                        list.map((item) => {
                            return <p>{item.name}</p>;
                        })}
                </div>
            </div>
        </>
    );
}

export default ProductList;
