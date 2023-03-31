import styles from './Competence.module.css';
import { faArrowLeft, faArrowRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Section from "../../../../components/Section/Section";
import NavButton from '../../../../components/BackButton/NavButton';
import Competence from './Competence';

export default function CompetencePage(props:{comp:string|number,semester:string|number}){
    const compData = require('../../../../data/compData.json')

    const semester = (Number.isInteger(props.semester) ? props.semester : Number(props.semester)) as number -1;
    const competence = (Number.isInteger(props.comp) ? props.comp : Number(props.comp)) as number -1;

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
        <main id={styles.competenceRoot}>
            <div className={styles.picker}>
                <div className={styles.rowContainer}>
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
                <div className={styles.rowContainer}>
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
            <Competence dataRow={dataRow as {title1:string,title2:string,text:string}} children={[children]}></Competence>
            <NavButton iconsHref={[{icon:faArrowLeft,href:'./?page=skills&section=but'},{icon:faHome,href:'./'}]}></NavButton>
        </main>)
}