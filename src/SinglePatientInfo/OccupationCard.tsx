import React from 'react';
import { OccupationalHealthCareEntry } from '../types';

type OccupationProps = Omit<OccupationalHealthCareEntry, 'id' | 'type' | 'sickLeave' | 'specialist'>;

const OccupationCard: React.FC<OccupationProps> = (props) => {
    return (
        <div>
            <h1>{props.date}</h1>
            <div>Employer name: {props.employerName}</div>
            <div>Desc: {props.description}</div>
            <div>Diagnosis: {props.diagnosisCodes ? props.diagnosisCodes : "No codes available"}</div>
        </div>
    );
};

export default OccupationCard;
