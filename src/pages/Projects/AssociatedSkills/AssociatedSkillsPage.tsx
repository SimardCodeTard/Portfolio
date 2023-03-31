import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons"
import NavButton from "../../../components/BackButton/NavButton"
import Competence from "../../Skills/SkillsBut/Competence/Competence"
import styles from './AssociatedSkillsPage.module.css'

type Props = {
    competences:Array<{
        semester:number,
        competence:number
    }>
}

export default function AssociatedSkillsPage({competences}:Props){
    const data = require('../../../data/compData.json');
    let dataRows:any = [];
    for(let competence of competences){
        dataRows.push(data.competences[competence.semester-1][competence.competence-1])
    }
    
    return(
        <>
            <main className = {styles.associatedSkillsPageRoot}>{
                dataRows.map((dataRow:any,key:number)=>{
                    const children = (
                        <>
                            <h3>{dataRow.children.title}</h3>
                            <p>{dataRow.children.text}</p>
                        </>
                    )
                    return(
                        <div key={key}>
                            <Competence dataRow={dataRow} children={children}></Competence>
                        </div>
                    )
                })    
            }</main>
            <NavButton iconsHref={[{icon:faArrowLeft,href:'./?page=projects'},{icon:faHome,href:'./'}]}></NavButton>
        </>
        
        
    )
}