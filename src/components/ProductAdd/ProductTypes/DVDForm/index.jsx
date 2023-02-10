import React from 'react';

function DVDForm() {
    return (
        <div id='DVD'>
            <label>
                <p>SIZE(MB)</p>
                <input type='text' name='SIZE' id='size' />
            </label>

            <p>Please provide the data size of the DVD in MB</p>
        </div>
    );
}

export default DVDForm;
