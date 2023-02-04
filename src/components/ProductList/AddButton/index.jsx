import React from 'react';
import { NavLink } from 'react-router-dom';
function AddButton() {
    return (
        <>
            <NavLink to='add-product'>
                <button id='add-button'>ADD</button>
            </NavLink>
        </>
    );
}

export default AddButton;
