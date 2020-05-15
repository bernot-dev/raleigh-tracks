import React, { ChangeEvent } from 'react';
import { SketchPicker, ColorResult } from 'react-color';

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
    const handleOddColorChange = (color: ColorResult) => {
        document.documentElement.style.setProperty('--odd-color', color.hex);
    };
    const handleEvenColorChange = (color: ColorResult) => {
        document.documentElement.style.setProperty('--even-color', color.hex);
    }
    const handleLineColorChange = (color: ColorResult) => {
        document.documentElement.style.setProperty('--line-color', color.hex);
    }
    
    return (
        <form>
            <div className="track-size-selector">
                <label htmlFor="trackSize">
                    Track Size
                </label>
                <br />
                <select id="trackSize" defaultValue={trackSize} onChange={handleTrackSizeChange}>
                    <option value="200m">200m</option>
                    <option value="400m">400m</option>
                </select>
            </div>
            <div className="color-pickers">
                <label>
                    Odd lane color
                    <SketchPicker color={oddColor} disableAlpha={true} onChange={handleOddColorChange} />
                </label>
                <label>
                    Even lane color
                    <SketchPicker color={evenColor} disableAlpha={true} onChange={handleEvenColorChange} />
                </label>
                <label>
                    Line color
                    <SketchPicker color={lineColor} disableAlpha={true} onChange={handleLineColorChange} />
                </label>
            </div>
        </form>
    );
}

export default TrackConfiguration;