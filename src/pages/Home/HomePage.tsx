import styles from "./HomePage.module.css"
import { faGitlab, faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { library, SizeProp } from "@fortawesome/fontawesome-svg-core";
import Section from "../../components/Section/Section";
import CopyPopup from '../../components/popups/copyPopup/CopyPopup';
import { ReactNode, useRef } from "react";
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

    const getClassNameString = (classNames: string[] | undefined): string => {
        if (!classNames) return '';
        return classNames.map((className) => styles[className] ?? '').join(' ');
      };

      type ChildSection = {
        title?:string
        subtitle?:string
        text?:string
        children?:ReactNode
        classNames?:string[]
      }

      type Props = {
        title?:string
        childSections?:ChildSection[]
    }

    const ProfileSubSection = ({title, childSections}:Props ) => {        
        return(
            <div className={styles.profilSubSection}>
                {title ? <h1 className = {styles.subSectionTitle} >{title}</h1> : undefined}
                {childSections ? childSections.map((childSection:ChildSection) => {
                    return(
                        SubSectionChild(childSection)
                    )
                }) : undefined
                }
            </div>
        )
    }    
    const SubSectionChild = ({title,text,subtitle,classNames,children}:ChildSection) => {
        return(
            <div className={styles.subSectionChild}>
                {title ? <h2 className={styles.subSectionChildTitle}>{title}</h2> : undefined}
                {subtitle ? <h3 className={styles.subSectionChildSubTitle}>{subtitle}</h3> : undefined}
                {text ? <p className={styles.subSectionText}>{text}</p> : undefined}
                {children ? children : null}
            </div>
        )
    }
    return (
        <main id={styles.homeRoot}>
            <Section className="homeSection" linksDivClasses = {["gitLinksDiv"]} id="git" title1='Découvrez mes projets' links ={[
                {route:'https://forge.univ-lyon1.fr/p2102858',text:'GitLab',icon:faGitlab, classNames:['homeGitLink'], iconSize:'2x' as SizeProp},
                {route:'https://github.com/Gerard2par2',text:'GitHub',icon:faGithub, classNames:['homeGitLink'], iconSize:'2x' as SizeProp},
                {route:'./?page=projects',text:"Quelques projets >>", classNames:["centeredLink"]}
            ]}
            ></Section>

            <Section className= "homeSection" title1='Simon Menard' title2="Curieux universel" text="Grand passioné de sciences, d'histoire et bien sûr, d'informatique"
            contentChildrenNodes={[<ProfileSubSection title="Etudiant en informatique"></ProfileSubSection>]}
            ></Section>


            {/* <Section className="homeSection" id='about' title1 ='Simon Menard' title2 = 'Etudiant en informatique' links={[
                {route:'./?page=about',text:"Plus d'informations >>", classNames:["centeredLink"]}]}
            ></Section> */}

            <Section className = "homeSection" title1='Mes compétences' title2='Découvrez ce que je sais faire' text='Java, React, SQL et bien plus encore...'
            links={[
                {route:'../?page=skills&section=but',text:'Mes compétences scolaires >>', description:'Une liste des compétences prodiguées par ma formation'},
                {route:'../?page=skills&section=perso',text:'Mes compétences personnelles >>', description:'Les compétences que j\'ai acquérit par moi même'}
            ]}
            ></Section>

            {/* <Section className="homeSection" linksDivClasses = {["contactLinksDiv"]} id='contact' title1="Contact" links={[
                {id:'mail',route:'./',text:'simon.menardp03@gmail.com',icon:faEnvelope ,onClickEvent:contactMailClick as any},
                {id:'discord', route:'https://discordapp.com/users/1069754391374082139',text:'Slimar#9537', icon:faDiscord}
            ]}
            ></Section> */}
            <CopyPopup ref={popupRef}></CopyPopup>
        </main>
    );
}