import React from 'react';
import { NavLink } from 'react-router-dom';

function SaveButton() {
    return (
        <div>
            <button form='product_form' type='submit'>
                Save
            </button>
        </div>
    );
}

export default SaveButton;
