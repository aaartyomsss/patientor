import React from 'react';
import { HealthCheckEntry } from '../types';

type HospitalEntryProps = Omit<HealthCheckEntry, 'id' | 'type' | 'specialist'>;

const HealthCheckCard: React.FC<HospitalEntryProps> = (props) => {

    return (
        <div>
            <h1>{props.date}</h1>
            <div>{props.description}</div>
            <div>Diagnosis: {props.diagnosisCodes ? props.diagnosisCodes : "No codes available"}</div>
            <div>Health rating: {props.healthCheckRating}</div>
        </div>
    );

};

export default HealthCheckCard;