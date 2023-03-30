import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import NavButton from "../../components/BackButton/NavButton";
import BackButton from "../../components/BackButton/NavButton";

export default function GoalsPage(){
    return (
    <main id="goalsRoot">
         GoalsPage works!
         <NavButton iconsHref={[{icon:faArrowLeft,href:'./?page=about'},{icon:faHome,href:'./'}]}></NavButton>
    </main>)
}