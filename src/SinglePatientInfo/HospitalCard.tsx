import React from 'react';
import { HospitalEntry } from '../types';

type HospitalEntryProps = Omit<HospitalEntry, 'id' | 'type' | 'discharge'>;

const HospitalCard: React.FC<HospitalEntryProps> = (props) => {

    return (
        <div>
            <h1>{props.date}</h1>
            <p>{props.description}</p>
            <div>{props.diagnosisCodes ? props.diagnosisCodes : null}</div>
            <div>Specialist: {props.specialist}</div>
        </div>
    );

};

export default HospitalCard;