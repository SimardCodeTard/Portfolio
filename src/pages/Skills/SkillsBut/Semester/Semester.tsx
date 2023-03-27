import Section from "../../../../components/Section";
import './Semester.css'
type Props={semester:number};
const compData = require('./compData.json');
export default function Semester({semester}:Props){
    return(
    <main id="semesterSection">
        {compData.competences[semester-1].map((el:any,key:number)=>{
                return <Section key={key} title1={el.title1} links={el.links} isGrowing={false}></Section>
            })
        }
    </main>)
}