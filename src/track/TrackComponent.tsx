import React from 'react';

import TrackComponentPropsInterface from './TrackComonentPropsInterface';

import './TrackComponent.css';
import {ReactComponent as Track200SVG} from './200m-track.svg';
import {ReactComponent as Track400SVG} from './400m-track.svg';

const TrackComponent: React.FC<TrackComponentPropsInterface> = (props) => {
    switch (props.size) {
        case '200m':
            return <Track200SVG />;
        case '400m':
        default:
            return <Track400SVG />;
    }
}

export default TrackComponent;