import { React, useState } from 'react';
import AddButton from './AddButton/index.jsx';
import MassDeleteButton from './MassDeleteButton/index.jsx';
import './product-list.css';
import ProductTile from './ProductTile/index.jsx';

//Main page
function ProductList({ list }) {
    const [checked, setChecked] = useState([]);
    // console.log(list);
    console.log({ checked });
    return (
        <>
            <div id='main-page'>
                <div id='heading'>
                    <h1>Product List</h1>
                    <div id='button-container'>
                        <AddButton />
                        <MassDeleteButton
                            checked={checked}
                            setChecked={setChecked}
                        />
                    </div>
                </div>

                {/* Container displaying tiles */}
                <div id='product-display'>
                    {list &&
                        list.map((item) => {
                            return (
                                <ProductTile
                                    list={item}
                                    key={item.id}
                                    setChecked={setChecked}
                                    checked={checked}
                                />
                            );
                        })}
                </div>
            </div>
        </>
    );
}

export default ProductList;
