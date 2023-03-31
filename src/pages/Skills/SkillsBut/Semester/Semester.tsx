import Section from "../../../../components/Section/Section";
import styles from './Semester.module.css'
type Props={semester:number};
const compData = require('../../../../data/compData.json');
export default function Semester({semester}:Props){
    return(
    <main id={styles.semesterRoot}>
        {compData.competences[semester-1].map((el:any,key:number)=>{
                return <Section className="butSkillsPageSection" key={key} title1={el.title1}  links={el.links} isGrowing={false}></Section>
            })
        }
    </main>)
}