import React from 'react';

function DVDForm({ setSize, size }) {
    return (
        <div id='DVD'>
            <label>
                <p>SIZE(MB)</p>
                <input
                    type='text'
                    name='SIZE'
                    id='size'
                    required
                    onChange={(e) => setSize(e.target.value)}
                />
            </label>
            {!/^(([0-9.]?)*)+$/.test(size) && (
                <p style={{ color: 'red' }}>
                    Please, provide the data of indicated type
                </p>
            )}

            <p>Please provide the data size of the DVD in MB</p>
        </div>
    );
}

export default DVDForm;
