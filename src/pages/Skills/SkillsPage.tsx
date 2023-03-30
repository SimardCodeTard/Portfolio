import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import NavButton from "../../components/BackButton/NavButton";
import Section from "../../components/Section/Section";
import styles from './SkillsPage.module.css'
export default  function SkillsPage(){
    return(
        <main id={styles.skillsRoot}>
            <Section className="skillsPageSection" title1='BUT' title2="Mes compétences scolaires" text="Une liste des compétences prodiguées par ma formation" links={[
                {route:'./?page=skills&section=but', text:"C'est par ici >>"}
            ]}></Section>
            <Section className='skillsPageSection' title1="Personnelles" title2="Mes compétences personnelles" text="Les compétences que j'ai acquérit par moi même" links={[
                {route:'./?page=skills&section=perso', text:"Juste là >>"}
            ]}></Section>
            <NavButton iconsHref={[{icon:faArrowLeft,href:'./?page=about'},{icon:faHome,href:'./'}]}></NavButton>
        </main>
    )
}