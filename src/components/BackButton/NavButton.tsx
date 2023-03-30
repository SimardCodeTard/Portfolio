import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './NavButton.module.css'

type Props ={
  // an array of font awesome icons and links
  iconsHref ?: {icon:IconProp,href:string}[],
};

export default function NavButton(props:Props){
  if(props.iconsHref){
    return(
      <div className={styles.navButton}>
        {props.iconsHref.map((iconHref:{icon:IconProp,href:string},key:number)=>{
          return (
            <div key={key}>
              <FontAwesomeIcon icon={iconHref.icon} onClick = {()=>window.location.href = iconHref.href} />
            </div>
          );
        })}
      </div>
    );
  }
  return null;
}
