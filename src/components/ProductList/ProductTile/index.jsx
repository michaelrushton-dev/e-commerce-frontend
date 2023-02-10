import React from 'react';
import './product-tile.css';

function ProductTile({ list, setChecked, checked }) {
    function handleChange(e) {
        console.log(e.target.checked);
        //if not checked, set state to be filtered to not contain the current id
        const previousState = checked.filter((elem) => elem !== list.id);
        e.target.checked
            ? setChecked([...checked, list.id])
            : setChecked(previousState);
    }

    return (
        <>
            <div className='product-tile'>
                <div className='checkbox-container'>
                    <input
                        type='checkbox'
                        className='delete-checkbox'
                        onChange={handleChange}
                    ></input>
                </div>
                <div className='product-info'>
                    <p>{list.id}</p>
                    <p>{list.sku}</p>
                    <p>{list.name}</p>
                    <p>{list.price}$</p>
                    <p>
                        {list.type === 'Book'
                            ? 'Weight '
                            : list.type === 'DVD'
                            ? 'Size '
                            : 'Dimensions '}
                        {list.value}
                        {list.type === 'Book'
                            ? 'KG'
                            : list.type === 'DVD'
                            ? 'MB'
                            : ''}
                    </p>
                </div>
            </div>
        </>
    );
}

export default ProductTile;
