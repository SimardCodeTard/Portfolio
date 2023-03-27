import Section from "../../components/Section";
import '../Home/HomePage.css'
export default function AboutPage(){
    return (
        <main id='aboutRoot'>
            <Section title1='Mes passions' title2="Parlons de ce que j'aime" text="Sciences, histoire et bien sûr, informatique "
            links={[
                {route:'../?page=passions',text:'Allons y >>'}
            ]}
            ></Section>
            <Section title1='Mes compétences' title2='Découvrez ce que je sais faire' text='Java, React, SQL et bien plus encore...'
            links={[
                {route:'../?page=skills',text:'Voyons ça >>'}
            ]}
            ></Section>
            <Section title1='Mes objectifs' title2='Mes ambitions et mes rêves' text="Web, jeux vidéos et IA"
            links={[
                {route:'../?page=goals',text:'Par ici >>'}
            ]}
            ></Section>
        </main>
    )
}