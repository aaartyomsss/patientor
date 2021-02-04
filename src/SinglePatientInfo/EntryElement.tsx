import React from 'react';
import { Entry } from '../types';
import HospitalCard from './HospitalCard';
import OccupationCard from './OccupationCard';
import HealthCheckCard from './HealthCheckCard';

const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

const EntryElement: React.FC<{ entry: Entry}> = ({ entry }) => {
    switch (entry.type) {
        case "OccupationalHealthcare":
            return <OccupationCard date={entry.date} diagnosisCodes={entry.diagnosisCodes} description={entry.description} employerName={entry.employerName}/>;
        case "HealthCheck":
            return <HealthCheckCard date={entry.date} diagnosisCodes={entry.diagnosisCodes} description={entry.description} healthCheckRating={entry.healthCheckRating}/>;
        case "Hospital":
            return <HospitalCard date={entry.date} diagnosisCodes={entry.diagnosisCodes} description={entry.description} specialist={entry.specialist}/>;
        default:
            return assertNever(entry);
    }
};

export default EntryElement;
