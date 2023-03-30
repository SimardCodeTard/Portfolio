import NavButton from "../../components/BackButton/NavButton";
import BackButton from "../../components/BackButton/NavButton";
import Section from "../../components/Section/Section";
import styles from './AboutPage.module.css';
import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";
export default function AboutPage(){
    return (
        <main id={styles.aboutRoot}>
            <Section title1='Mes passions' title2="Parlons de ce que j'aime" text="Sciences, histoire et bien sûr, informatique "
            links={[
                {route:'../?page=passions',text:'Allons y >>'}
            ]}
            ></Section>
            <Section title1='Mes compétences' title2='Découvrez ce que je sais faire' text='Java, React, SQL et bien plus encore...'
            links={[
                {route:'../?page=skills&section=but',text:'Mes compétences scolaires >>', description:'Une liste des compétences prodiguées par ma formation'},
                {route:'../?page=skills&section=perso',text:'Mes compétences personnelles >>', description:'Les compétences que j\'ai acquérit par moi même'}

            ]}
            ></Section>
            <Section title1='Mes objectifs' title2='Mes ambitions et mes rêves' text="Web, jeux vidéos et IA"
            links={[
                {route:'../?page=goals',text:'Par ici >>'}
            ]}
            ></Section>
            <NavButton iconsHref={[{icon:faArrowLeft,href:'./'},{icon:faHome,href:'./'}]}></NavButton>
        </main>
    )
}