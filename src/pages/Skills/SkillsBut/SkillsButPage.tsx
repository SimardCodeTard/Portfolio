import './SkillsButPage.css'
import { useState } from "react";
import Semester from "./Semester/Semester";
import Competence from './Competence/Competence';
import BackButton from '../../../components/BackButton/BackButton';

export default function SkillsButPage(){
    const queryParameters = new URLSearchParams(window.location.search)
    const subsection = queryParameters.get("subsection");
    const compentence = queryParameters.get('competence') as string;
    const s = queryParameters.get('s') as string;  
    console.log('in skills but page');
    return(
        <main id='butSkillsPage'>
            <h1>Les compétences du but</h1>
            {!subsection ?
            <>
                <Semester semester={1}></Semester>
            </>
            :<Competence semester={s} comp={compentence}></Competence>
        }
        <BackButton href='./?page=skills'></BackButton>
        </main>
    )
}