import { useState } from 'react';

function FurnitureForm({ setDimensions }) {
    const [measurements, setMeasurements] = useState({
        height: '',
        width: '',
        length: '',
    });

    function updateDimensions() {
        console.log(measurements);
        setDimensions(measurements);
    }

    // const [height, setHeight] = useState('');
    // const [width, setWidth] = useState('');
    // const [length, setLength] = useState('');

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
                        updateDimensions();
                    }}
                />
            </label>
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
                        updateDimensions();
                    }}
                />
            </label>
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
                        updateDimensions();
                    }}
                />
            </label>

            <p>Please provide the dimensions of the item in HxWxL format</p>
        </div>
    );
}

export default FurnitureForm;
