import BackButton from "../../components/BackButton/BackButton";
import Section from "../../components/Section";
export default function ProjectsPage(){
    return(
        <main id="projectsPageRoot">
            <Section title1="Mon premier projet" title2="Une application console" text="Un annuaire téléphonique, algorithmes de tri" links={[
                {route:'https://forge.univ-lyon1.fr/p2102858/sae-c-annuaire-menard-benkacem',text:'Source >>'}
            ]} isGrowing={false}></Section>
            <Section title1="Mon premier projet en Java" title2="Une application de manipulation de graphes" text="Plus proche chemin, nombre de voisins, filtrage par type d'arrête ..." links={[
                {route:'https://forge.univ-lyon1.fr/p2102858/sae-grama/-/tree/main/src',text:"Source >>"}
            ]} isGrowing={false}></Section>
            <Section title1="Un autre projet Java" title2="Une application de gestion de tournois" text="Réalisée dans le contexte d'un projet avec deux applications et une base de données" links={[
                {route:'https://forge.univ-lyon1.fr/g4s3-s4b-2022-23/b2/sae-s3',text:"Source  >>"}
            ]} isGrowing={false}></Section>
            <Section id="loneSection" title1="Ce portfolio" title2="Une application web développée avec React" links={[
                {route:'https://github.com/Gerard2par2/Portfolio',text:"Source >>"}
            ]} isGrowing={false}></Section>
            <BackButton href='./'></BackButton>
        </main>
    )
}