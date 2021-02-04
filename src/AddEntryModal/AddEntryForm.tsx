import React from 'react';
import { Field, Formik, Form } from "formik";
import { HealthCheckRating, HealthCheckEntry } from '../types';
import { RatingOptions } from './FormFieldEntry';

type NewHealthCheckEntry = Omit<HealthCheckEntry, "id">;



const ratingOptions: RatingOptions[] = [
    { value: HealthCheckRating.Healthy, label: 0},
    { value: HealthCheckRating.LowRisk, label: 1},
    { value: HealthCheckRating.HighRisk, label: 2},
    { value: HealthCheckRating.CriticalRisk, label: 3}
];