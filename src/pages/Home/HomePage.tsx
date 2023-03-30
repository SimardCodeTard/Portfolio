import styles from "./HomePage.module.css"
import { faGitlab, faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { library, SizeProp } from "@fortawesome/fontawesome-svg-core";
import Section from "../../components/Section/Section";
import CopyPopup from '../../components/popups/copyPopup/CopyPopup';
import { useRef } from "react";
library.add(faGithub,faGitlab,faEnvelope);

export function HomePage(){
    interface CopyPopupRefType{
        displayPopup():void;
    }
    
    const popupRef = useRef<CopyPopupRefType>();
    const contactMailClick = (e:Event) => {
        e.preventDefault();
        if(popupRef.current)popupRef.current.displayPopup();
    }
    return (
        <main id={styles.homeRoot}>
            <Section className="homeSection" id="git" title1='Découvrez mes projets' links ={[
                {route:'https://forge.univ-lyon1.fr/p2102858',text:'GitLab',icon:faGitlab,iconSize:'2x' as SizeProp},
                {route:'https://github.com/Gerard2par2',text:'GitHub',icon:faGithub,iconSize:'2x' as SizeProp},
                {route:'./?page=projects',text:"Quelques projets >>", class:"centeredLink"}
            ]}
            ></Section>

            <Section className="homeSection" id='about' title1 ='Simon Menard' title2 = 'Etudiant en informatique' links={[
                {route:'./?page=about',text:"Plus d'informations >>", class:"centeredLink"}]}
            ></Section>

            <Section className="homeSection" id='contact' title1="Contact" links={[
                {id:'mail',route:'./',text:'simon.menardp03@gmail.com',icon:faEnvelope ,onClickEvent:contactMailClick as any},
                {id:'discord', route:'https://discordapp.com/users/1069754391374082139',text:'Slimar#9537', icon:faDiscord}
            ]}
            ></Section>
            <CopyPopup ref={popupRef}></CopyPopup>
        </main>
    );
}