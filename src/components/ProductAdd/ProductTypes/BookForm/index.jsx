import React from 'react';

function BookForm({ setWeight }) {
    return (
        <div id='Book'>
            <label>
                <p>WEIGHT(KG)</p>
                <input
                    type='text'
                    name='WEIGHT'
                    id='weight'
                    required
                    onChange={(e) => {
                        setWeight(e.target.value);
                    }}
                />
            </label>

            <p>Please provide the weight of the book in KG</p>
        </div>
    );
}

export default BookForm;
