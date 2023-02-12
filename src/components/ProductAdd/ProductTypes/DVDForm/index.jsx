import React from 'react';

function DVDForm({ setSize, size }) {
    return (
        <div id='DVD'>
            <div className='value-box'>
                <label htmlFor='size'>Size (MG)</label>
                <input
                    type='text'
                    name='SIZE'
                    id='size'
                    required
                    onChange={(e) => setSize(e.target.value)}
                />
            </div>
            {!/^(([0-9.]?)*)+$/.test(size) && (
                <p style={{ color: 'red' }}>
                    Please, provide the data of indicated type
                </p>
            )}
            <br></br>
            <p>Please provide the data size of the DVD in MB</p>
        </div>
    );
}

export default DVDForm;
