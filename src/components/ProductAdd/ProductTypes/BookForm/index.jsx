import React from 'react';

function BookForm({ setWeight, weight }) {
    return (
        <div id='Book'>
            <div className='value-box'>
                <label htmlFor='weight'>Weight (KG)</label>
                <input
                    type='text'
                    name='WEIGHT'
                    id='weight'
                    required
                    onChange={(e) => {
                        setWeight(e.target.value);
                    }}
                />
            </div>

            {!/^(([0-9.]?)*)+$/.test(weight) && (
                <p style={{ color: 'red' }}>
                    Please, provide the data of indicated type
                </p>
            )}
            <br></br>
            <p>Please provide the weight of the book in KG</p>
        </div>
    );
}

export default BookForm;
