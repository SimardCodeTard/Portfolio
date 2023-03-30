import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import NavButton from "../../components/BackButton/NavButton";
import BackButton from "../../components/BackButton/NavButton";
import Section from "../../components/Section/Section";
import styles from './PassionPage.module.css'

export default function PassionsPage(){
    return(
        <main id={styles.passionsRoot}>
            <Section title1="Science" title2="Astronomie, biologie ..." text="" isGrowing={false}></Section>
            <Section title1="Histoire" isGrowing={false}></Section>
            <Section title1="Informatique" isGrowing={false}></Section>
            <NavButton iconsHref={[{icon:faArrowLeft,href:'./?page=about'},{icon:faHome,href:'./'}]}></NavButton>
        </main>
    )
}