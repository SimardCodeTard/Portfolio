import './Competence.css'
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Section from "../../../../components/Section";
import BackButton from '../../../../components/BackButton/BackButton';

export default function Competence(props:{comp:string,semester:string}){
    const compData = require('../Semester/compData.json')

    const semester = Number(props.semester)-1;
    const competence = Number(props.comp)-1;

    const [dataRow,setDataRow] = useState(compData.competences[semester][competence]);
    const [competenceIndex,setCompetenceIndex] = useState(competence);
    const [semesterIndex,setSemesterIndex] = useState(semester)
    const children = (
    <>
        <h3>{dataRow.children.title}</h3>
        <p>{dataRow.children.text}</p>
    </>
    )
    return(
        <>
            <div className='picker'>
                <div className='rowContainer'>
                    <h1> 
                        <p>Semestre</p>
                        {semesterIndex > 0 ? <FontAwesomeIcon icon={faArrowLeft} onClick={()=>{
                            const oldSemesterIndex = semesterIndex;
                            setSemesterIndex(semesterIndex-1)
                            setDataRow(compData.competences[oldSemesterIndex-1][competenceIndex])
                        }}></FontAwesomeIcon> : null}
                        {semesterIndex+1}
                        {semesterIndex < 3 ? <FontAwesomeIcon icon={faArrowRight} onClick={()=>{
                            const oldSemesterIndex = semesterIndex;
                            setSemesterIndex(semesterIndex+1)
                            setDataRow(compData.competences[oldSemesterIndex+1][competenceIndex])
                        }}></FontAwesomeIcon> : null}        
                    </h1>
                </div>
                <div className='rowContainer'>
                    <h1> 
                        <p>Compétence</p>
                        {competenceIndex > 0 ? <FontAwesomeIcon icon={faArrowLeft} onClick={()=>{
                            const oldIndex = competenceIndex;
                            setCompetenceIndex(competenceIndex-1);
                            setDataRow(compData.competences[semesterIndex][oldIndex-1]);
                        }}></FontAwesomeIcon> : null}
                        {competenceIndex+1}
                        {competenceIndex< 5 ? <FontAwesomeIcon icon={faArrowRight} onClick={()=>{
                            const oldIndex = competenceIndex;
                            setCompetenceIndex(competenceIndex+1);
                            setDataRow(compData.competences[semesterIndex][oldIndex+1]);
                        }}></FontAwesomeIcon> : null}        
                    </h1>
                </div>
            </div>
            <Section title1={dataRow.title1} title2={dataRow.title2} text={dataRow.text} isGrowing={false} childrenNodes={[children]}></Section>
            <BackButton href='./?page=skills&section=but'></BackButton>
        </>
        )
}