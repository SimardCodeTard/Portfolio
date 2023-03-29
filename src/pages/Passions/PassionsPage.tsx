import BackButton from "../../components/BackButton/BackButton";
import Section from "../../components/Section/Section";
import styles from './PassionPage.module.css'

export default function PassionsPage(){
    return(
        <main id={styles.passionsRoot}>
            <Section title1="Science" title2="Astronomie, biologie ..." text="" isGrowing={false}></Section>
            <Section title1="Histoire" isGrowing={false}></Section>
            <Section title1="Informatique" isGrowing={false}></Section>
            <BackButton href="./?page=about"></BackButton>
        </main>
    )
}