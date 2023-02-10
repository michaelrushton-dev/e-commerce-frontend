import React from 'react';

function FurnitureForm() {
    return (
        <div id='Furniture'>
            <label>
                <p>HEIGHT(CM)</p>
                <input type='text' name='SIZE' id='size' />
            </label>
            <label>
                <p>WIDTH(CM)</p>
                <input type='text' name='SIZE' id='size' />
            </label>
            <label>
                <p>LENGTH(CM)</p>
                <input type='text' name='SIZE' id='size' />
            </label>

            <p>Please provide the dimensions of the item in HxWxL format</p>
        </div>
    );
}

export default FurnitureForm;
