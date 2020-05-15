import React, { useState } from 'react';
import './Track.css';
import TrackComponent from './TrackComponent';
import TrackConfiguration from './TrackConfiguration';

export interface TrackProps {
    size?: string;
}

const Track: React.FC<TrackProps> = (props) => {
    const [ trackSize, setTrackSize ] = useState('200m');
    return <>
        <TrackComponent size={trackSize} />
        <h2>Customize the Track</h2>
        <TrackConfiguration trackSize={trackSize} setTrackSize={setTrackSize} />
    </>
}

export default Track;