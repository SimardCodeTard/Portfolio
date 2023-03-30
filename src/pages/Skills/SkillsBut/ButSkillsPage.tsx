import styles from  './ButSkillsPage.module.css'
import Semester from "./Semester/Semester";
import Competence from './Competence/Competence';
import { faArrowLeft, faHome } from '@fortawesome/free-solid-svg-icons';
import NavButton from '../../../components/BackButton/NavButton';

export default function ButSkillsPage(){
    const queryParameters = new URLSearchParams(window.location.search)
    const subsection = queryParameters.get("subsection");
    const compentence = queryParameters.get('competence') as string;
    const s = queryParameters.get('s') as string;  
    return(
        <main id={styles.butSkillsRoot}>
            <h1 id={styles.butSkillsTitle}>Les compétences du but</h1>
            {!subsection 
            ?<Semester semester={1}></Semester>
            :<Competence semester={s} comp={compentence}></Competence>}
            <NavButton iconsHref={[{icon:faArrowLeft,href:'./?page=about'},{icon:faHome,href:'./'}]}></NavButton>
        </main>
    )
}