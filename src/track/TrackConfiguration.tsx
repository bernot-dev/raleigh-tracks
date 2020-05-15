import React, { ChangeEvent } from 'react';
import './TrackConfiguration.css';

const TrackConfiguration: React.FC<any> = (props) => {
    const { trackSize, setTrackSize } = props;
    const handleTrackSizeChange = (event: ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value);
        setTrackSize(event.target.value);
    }

    const styleRef = getComputedStyle(document.documentElement);
    let evenColor = styleRef.getPropertyValue('--even-color');
    let oddColor = styleRef.getPropertyValue('--odd-color');
    let lineColor = styleRef.getPropertyValue('--line-color');
    const handleOddColorChange = (event: ChangeEvent<HTMLInputElement>) => {
        document.documentElement.style.setProperty('--odd-color', event.target.value);
    };
    const handleEvenColorChange = (event: ChangeEvent<HTMLInputElement>) => {
        document.documentElement.style.setProperty('--even-color', event.target.value);
    }
    const handleLineColorChange = (event: ChangeEvent<HTMLInputElement>) => {
        document.documentElement.style.setProperty('--line-color', event.target.value);
    }
    
    return (
        <form>
            <label htmlFor="trackSize">
                Track Size: 
            </label>
            <select id="trackSize" defaultValue={trackSize} onChange={handleTrackSizeChange}>
                <option value="200m">200m</option>
                <option value="400m">400m</option>
            </select>
            <label>Odd lane color: </label>
            <input type="text" defaultValue={oddColor} onChange={handleOddColorChange} />
            <label>Even lane color: </label>
            <input type="text" defaultValue={evenColor} onChange={handleEvenColorChange} />
            <label>Line color: </label>
            <input type="text" defaultValue={lineColor} onChange={handleLineColorChange} />
        </form>
    );
}

export default TrackConfiguration;