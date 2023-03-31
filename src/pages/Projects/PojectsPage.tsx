import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import NavButton from "../../components/BackButton/NavButton";
import Section from "../../components/Section/Section";
import AssiociatedSkillsPage from "./AssociatedSkills/AssociatedSkillsPage";
import styles from  './ProjectsPage.module.css'
export default function ProjectsPage(){

    type Props={
        fileName?:string,
        state?:boolean,
        classNames?:string
    }
    type competenceType = {
        semester:number,
        competence:number
    }

    const [cVisible,setCVisible] = useState(false);
    const [gramaVisible,setGramaVisible] = useState(false);
    const [planetEpsortVisible,setPlanetEpsortVisible] = useState(false);
    const [portfolioVisible,setPortfolioVisible] = useState(false);
    const [mathSlaveVisible, setMathSlaveVisible] = useState(false);
    const [notesAppVisible, setNotesAppVisible] = useState(false);
    
    const [associatedSkills, setAssociatedSkills] = useState< Array<competenceType> | undefined>(undefined);

    const ProjectImage = ({fileName,state,classNames}:Props)=>{
        return (
            <img className={state ? styles.projectImage : styles.hidden}src={`/assets/images/${fileName}.png`}></img>
        )
    }

    const getClassNameString = (classNames: string[] | undefined): string => {
        if (!classNames) return '';
        return classNames.map((className) => styles[className] ?? '').join(' ');
    };

    const cProjectSkillsProps = ():Array<competenceType> => {
        return[
            {semester:1, competence:1},
            {semester:1, competence:2},
        ]
    }
    const gramaProjectSkillsProps = ():Array<competenceType> => {
        return[
            {semester:2, competence:1},
            {semester:2, competence:2},
            {semester:2, competence:5},
            {semester:2, competence:6}
        ]
    }
    const planetEpsortProjectSkillsProps = ():Array<competenceType> => {
        return[
            {semester:3, competence:1},
            {semester:3, competence:2},
            {semester:3, competence:3},
            {semester:3, competence:4},
            {semester:3, competence:5},
            {semester:3, competence:6},
        ]
    }


    if(!associatedSkills){
        return(
            <main id={styles.projectsPageRoot}>
                <Section linksDivClasses={["contactLinksDiv","centeredLinksDiv"]} title1="Premier développement, en C" title2="Une application console" text="Un annuaire téléphonique : algorithmes de tri, recherche et filres" links={[
                    {route:'', text:'Competences de ma formation associées >>', onClickEvent:(e)=>{e.preventDefault(); setAssociatedSkills(cProjectSkillsProps())}},
                    {route:'https://forge.univ-lyon1.fr/p2102858/sae-c-annuaire-menard-benkacem',text:'Source >>', onMouseEnter:()=>setCVisible(true) ,onMouseLeave:()=>setCVisible(false)}
                ]}></Section>
                <Section linksDivClasses={["contactLinksDiv","centeredLinksDiv"]} title1="Première IHM, en Java" title2="Une application Swing" text="Manipulation de graphe : Structures de données, algorithmes de parcours du graphe..." links={[
                    {route:'', text:'Competences de ma formation associées >>', onClickEvent:(e)=>{e.preventDefault(); setAssociatedSkills(gramaProjectSkillsProps())}},
                    {route:'https://forge.univ-lyon1.fr/p2102858/sae-grama/-/tree/main/src',text:"Source >>", onMouseEnter:()=>setGramaVisible(true) ,onMouseLeave:()=>setGramaVisible(false)}
                ]}></Section>
                <Section linksDivClasses={["contactLinksDiv","centeredLinksDiv"]} title1="Un autre projet Java" title2="Une deuxième application Swing" text="Une applciation de gestion de tournois : génération de brackets, entrée de données affichées sur un site web" links={[
                    {route:'', text:'Competences de ma formation associées >>', onClickEvent:(e)=>{e.preventDefault(); setAssociatedSkills(planetEpsortProjectSkillsProps())}},
                    {route:'https://forge.univ-lyon1.fr/g4s3-s4b-2022-23/b2/sae-s3',text:"Source  >>", onMouseEnter:()=>setMathSlaveVisible(true) ,onMouseLeave:()=>setMathSlaveVisible(false)}
                ]}></Section>
                <Section  id="loneSection" title1="Ce portfolio" title2="Une application web développée avec React" links={[
                    {route:'https://github.com/Gerard2par2/Portfolio',text:"Source >>", onMouseEnter:()=>setPortfolioVisible(true) ,onMouseLeave:()=>setPortfolioVisible(false)} 
                ]}></Section>
                <NavButton iconsHref={[{icon:faArrowLeft,href:'./'},{icon:faHome,href:'./'}]}></NavButton>
                <Section title1="D'autres petits projets" title2="Des projets moins aboutis" text="Un projet qui m'a permis d'apprendre à utiliser NextJS et un autre utilisant Angular, mis en pause mais pas oublié !" links={[
                    {route:'https://github.com/Gerard2par2/Notes-App', text:'Application Next JS >>', description:'Notes-App, une application très simple de prise de notes', onMouseEnter:()=>setNotesAppVisible(true) ,onMouseLeave:()=>setNotesAppVisible(false)},
                    {route:'https://github.com/Gerard2par2/MathsHelper', text:'Application Angular >>', description:'Maths helper, une application de gestion de budget pour des colocataires ou groupes d\'amis', onMouseEnter:()=>setMathSlaveVisible(true) ,onMouseLeave:()=>setMathSlaveVisible(false)}
                ]} ></Section>
                <Section isGrowing={false} title1="To be continued ..."></Section>
            </main>
        )
        }else{
            return(<AssiociatedSkillsPage competences={associatedSkills}></AssiociatedSkillsPage>)
        }
}