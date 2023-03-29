import { icon, IconProp } from "@fortawesome/fontawesome-svg-core";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './BackButton.module.css'
type Props ={
    // an array of font awesome icons and links
    iconsHref ?: {icon:IconProp,href:string}[],
};
export default function NavButton(props:Props){
    if(props.iconsHref){
        return(
            <>
            {props.iconsHref.map((iconHref:{icon:IconProp,href:string},key:number)=>{
                <div key={key} className={styles.navButton}>
                    <FontAwesomeIcon icon={iconHref.icon} onClick = {()=>window.location.href = iconHref.href}></FontAwesomeIcon>
                </div>
            })}
            </>
        )
    }
    return null;
}