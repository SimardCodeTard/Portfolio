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
    const [mathSlaveVisible, setMathSlaveVisible] = useState(false);
    const [notesAppVisible, setNotesAppVisible] = useState(false);

    // interface LinkRefType{displayImage():void};
    // const cProjectRef = useRef<LinkRefType>();
    // const gramaProjectRef = useRef<LinkRefType>();
    // const planetEpsortProjectRef = useRef<LinkRefType>();
    // const portfolioProjectRef = useRef<LinkRefType>();
    // const notesAppProjectRef = useRef<LinkRefType>();
    type Props={
        fileName?:string,
        state?:boolean,
        classNames?:string
    }

    const ProjectImage = ({fileName,state,classNames}:Props)=>{
        return (
            <img className={state ? styles.projectImage : styles.hidden}src={`/assets/images/${fileName}.png`}></img>
        )
    }

    const getClassNameString = (classNames: string[] | undefined): string => {
        if (!classNames) return '';
        return classNames.map((className) => styles[className] ?? '').join(' ');
      };
    return(
        <main id={styles.projectsPageRoot}>
            <Section title1="Mon premier projet" title2="Une application console" text="Un annuaire téléphonique, algorithmes de tri" links={[
                {route:'https://forge.univ-lyon1.fr/p2102858/sae-c-annuaire-menard-benkacem',text:'Source >>', onMouseEnter:()=>setCVisible(true) ,onMouseLeave:()=>setCVisible(false)}
            ]}></Section>
            <Section title1="Mon premier projet en Java" title2="Une application de manipulation de graphes" text="Plus proche chemin, nombre de voisins, filtrage par type d'arrête ..." links={[
                {route:'https://forge.univ-lyon1.fr/p2102858/sae-grama/-/tree/main/src',text:"Source >>", onMouseEnter:()=>setGramaVisible(true) ,onMouseLeave:()=>setGramaVisible(false)}
            ]}></Section>
            <Section title1="Un autre projet Java" title2="Une application de gestion de tournois" text="Réalisée dans le contexte d'un projet avec deux applications et une base de données" links={[
                {route:'https://forge.univ-lyon1.fr/g4s3-s4b-2022-23/b2/sae-s3',text:"Source  >>", onMouseEnter:()=>setMathSlaveVisible(true) ,onMouseLeave:()=>setMathSlaveVisible(false)}
            ]} contentChildrenNodes={[<ProjectImage state = {planetEpsortVisible} fileName="projet-planet-esport"></ProjectImage>]} ></Section>
            <Section id="loneSection" title1="Ce portfolio" title2="Une application web développée avec React" links={[
                {route:'https://github.com/Gerard2par2/Portfolio',text:"Source >>", onMouseEnter:()=>setPortfolioVisible(true) ,onMouseLeave:()=>setPortfolioVisible(false)} 
            ]}></Section>
            <NavButton iconsHref={[{icon:faArrowLeft,href:'./'},{icon:faHome,href:'./'}]}></NavButton>
            <Section title1="D'autres petits projets" title2="Des projets moins aboutis" text="Un projet 'test' qui m'a permis d'apprendre à utiliser NextJS et un autre utilisant Angular, encore très early" links={[
                {route:'https://github.com/Gerard2par2/Notes-App', text:'Application Next JS >>', description:'Notes-App, une application très simple de prise de notes', onMouseEnter:()=>setNotesAppVisible(true) ,onMouseLeave:()=>setNotesAppVisible(false)},
                {route:'https://github.com/Gerard2par2/MathsHelper', text:'Application Angular >>', description:'Maths helper, une application de gestion de budget pour des colocataires ou groupes d\'amis', onMouseEnter:()=>setMathSlaveVisible(true) ,onMouseLeave:()=>setMathSlaveVisible(false)}
            ]} ></Section>
            <Section isGrowing={false} title1="To be continued ..."></Section>
        </main>
    )
}