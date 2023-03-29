import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './BackButton.module.css'
export default function BackButton(props:any){
    return(
    <div className={styles.backButton}>
        <FontAwesomeIcon onClick={()=>{
            window.location.href=props.href;
        }} icon={faArrowLeft}></FontAwesomeIcon>
    </div>)
}