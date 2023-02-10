import React from 'react';

function BookForm() {
    return (
        <div id='Book'>
            <label>
                <p>WEIGHT(KG)</p>
                <input type='text' name='WEIGHT' id='weight' />
            </label>

            <p>Please provide the weight of the book in KG</p>
        </div>
    );
}

export default BookForm;
