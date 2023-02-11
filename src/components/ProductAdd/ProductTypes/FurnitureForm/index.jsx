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
        setDimensions(heightWidthLength);
    }, [measurements]);

    return (
        <div id='Furniture'>
            <label id='height'>
                <p>HEIGHT(CM)</p>
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
            </label>
            {!/^(([0-9.]?)*)+$/.test(measurements.height) && (
                <p style={{ color: 'red' }}>
                    Please, provide the data of indicated type
                </p>
            )}
            <label id='width'>
                <p>WIDTH(CM)</p>
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
            </label>
            {!/^(([0-9.]?)*)+$/.test(measurements.width) && (
                <p style={{ color: 'red' }}>
                    Please, provide the data of indicated type
                </p>
            )}
            <label id='length'>
                <p>LENGTH(CM)</p>
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
            </label>
            {!/^(([0-9.]?)*)+$/.test(measurements.length) && (
                <p style={{ color: 'red' }}>
                    Please, provide the data of indicated type
                </p>
            )}

            <p>Please provide the dimensions of the item in HxWxL format</p>
        </div>
    );
}

export default FurnitureForm;
