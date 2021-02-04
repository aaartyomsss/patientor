import React from 'react';
import { useParams } from 'react-router-dom';
import { useStateValue } from "../state";
import { Patient } from '../types';
import { Icon } from 'semantic-ui-react';
import axios from 'axios';
import { apiBaseUrl } from '../constants';
import { addAdditionalData } from '../state/reducer';
import EntryElement from './EntryElement';

const SinglePatientInfo: React.FC = () => {

    const { id } = useParams<{ id: string }>();

    const [ { patients }, dispatch ] = useStateValue();

    const patientToDisplay = Object.values(patients).find((obj: Patient) => obj.id === id);
    console.log(patientToDisplay?.occupation);

    React.useEffect(() => {
        const fetchAllData = async () => {
            try {
                const { data: patient } = await axios.get<Patient>(`${apiBaseUrl}/${id}`);
                dispatch(addAdditionalData(patient));
            } catch (error) {
                console.error(error.message);
            }
        };
        if (!patientToDisplay?.occupation){
            fetchAllData();
        }
    }, [dispatch]);

    const entriesToDisplay = patientToDisplay?.entries ? patientToDisplay.entries.map(e => <EntryElement key={e.id} entry={e}/>) : 'Loading';

    return (
        <div>
            <h1>{patientToDisplay?.name} {patientToDisplay?.gender.valueOf() === 'male' ? <Icon name='mars stroke'/> : <Icon name='venus'/> }</h1>
            <p>Social security number: {patientToDisplay?.ssn}</p>
            <p>Occupation: {patientToDisplay?.occupation}</p>
            <p>Date of birth: {patientToDisplay?.dateOfBirth}</p>
            <div>{entriesToDisplay === 'Loading' ? 'Loading' : entriesToDisplay}</div>
        </div>
    );
};

export default SinglePatientInfo;