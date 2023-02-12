import { useState, useEffect } from 'react';

function FurnitureForm({ setDimensions }) {
    const [measurements, setMeasurements] = useState({
        height: '',
        width: '',
        length: '',
    });

    //useEffect updates dimensions(state in parent) whenever measurements state has a change (dependency list)[]
    // prevents react rendering one step behind on every event change (key press in field)
    useEffect(() => {
        const heightWidthLength = `${measurements.height}x${measurements.width}x${measurements.length}`;
        if (measurements.height && measurements.width && measurements.length) {
            setDimensions(heightWidthLength);
        }
    }, [measurements]);

    return (
        <div id='Furniture'>
            <div className='value-box'>
                <label htmlFor='height'>Height (CM)</label>
                <input
                    type='text'
                    name='HEIGHT'
                    id='height'
                    required
                    onChange={(e) => {
                        const height = e.target.value;
                        setMeasurements({ ...measurements, height });
                    }}
                />
            </div>

            {!/^(([0-9.]?)*)+$/.test(measurements.height) && (
                <p style={{ color: 'red' }}>
                    Please, provide the data of indicated type
                </p>
            )}
            <div className='value-box'>
                <label htmlFor='width'>Width(CM)</label>
                <input
                    type='text'
                    name='WIDTH'
                    id='width'
                    required
                    onChange={(e) => {
                        const width = e.target.value;
                        setMeasurements({ ...measurements, width });
                    }}
                />
            </div>

            {!/^(([0-9.]?)*)+$/.test(measurements.width) && (
                <p style={{ color: 'red' }}>
                    Please, provide the data of indicated type
                </p>
            )}
            <div className='value-box'>
                <label htmlFor='length'>Length (CM)</label>
                <input
                    type='text'
                    name='LENGTH'
                    id='length'
                    required
                    onChange={(e) => {
                        const length = e.target.value;
                        setMeasurements({ ...measurements, length });
                    }}
                />
            </div>
            {!/^(([0-9.]?)*)+$/.test(measurements.length) && (
                <p style={{ color: 'red' }}>
                    Please, provide the data of indicated type
                </p>
            )}
            <br></br>
            <p>Please provide the dimensions of the item in HxWxL format</p>
        </div>
    );
}

export default FurnitureForm;
