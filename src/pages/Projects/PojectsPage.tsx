import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import NavButton from "../../components/BackButton/NavButton";
import Section from "../../components/Section/Section";
import styles from  './ProjectsPage.module.css'
export default function ProjectsPage(){
    const [cVisible,setCVisible] = useState(false);
    const [gramaVisible,setGramaVisible] = useState(false);
    const [planetEpsortVisible,setPlanetEpsortVisible] = useState(false);
    const [portfolioVisible,setPortfolioVisible] = useState(false);
    interface LinkRefType{displayImage():void};
    const cProjectRef = useRef<LinkRefType>()
    const ProjectImage = ({fileName,state}:{fileName:string,state:boolean})=>(<img className={state ? styles.projectImage : styles.hidden}src={`/assets/images/${fileName}.png`}></img>)
    return(
        <main id={styles.projectsPageRoot}>
            <Section title1="Mon premier projet" title2="Une application console" text="Un annuaire téléphonique, algorithmes de tri" links={[
                {route:'https://forge.univ-lyon1.fr/p2102858/sae-c-annuaire-menard-benkacem',text:'Source >>'}
            ]} contentChildrenNodes={[<ProjectImage state = {cVisible} fileName="projet-c"></ProjectImage>]} ></Section>
            <Section title1="Mon premier projet en Java" title2="Une application de manipulation de graphes" text="Plus proche chemin, nombre de voisins, filtrage par type d'arrête ..." links={[
                {route:'https://forge.univ-lyon1.fr/p2102858/sae-grama/-/tree/main/src',text:"Source >>"}
            ]} contentChildrenNodes={[<ProjectImage state = {gramaVisible} fileName="projet-grama"></ProjectImage>]} ></Section>
            <Section title1="Un autre projet Java" title2="Une application de gestion de tournois" text="Réalisée dans le contexte d'un projet avec deux applications et une base de données" links={[
                {route:'https://forge.univ-lyon1.fr/g4s3-s4b-2022-23/b2/sae-s3',text:"Source  >>"}
            ]} contentChildrenNodes={[<ProjectImage state = {planetEpsortVisible} fileName="projet-planet-esport"></ProjectImage>]} ></Section>
            <Section id="loneSection" title1="Ce portfolio" title2="Une application web développée avec React" links={[
                {route:'https://github.com/Gerard2par2/Portfolio',text:"Source >>"} 
            ]} contentChildrenNodes = {[<ProjectImage state = {portfolioVisible} fileName="projet-portfolio"></ProjectImage>]} ></Section>
            <NavButton iconsHref={[{icon:faArrowLeft,href:'./'},{icon:faHome,href:'./'}]}></NavButton>
        </main>
    )
}