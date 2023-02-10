import React from 'react';
import { NavLink } from 'react-router-dom';

function CancelButton() {
    return (
        <NavLink to='/'>
            <button>Cancel</button>
        </NavLink>
    );
}

export default CancelButton;
