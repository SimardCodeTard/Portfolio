import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import NavButton from "../../../components/BackButton/NavButton";

export default function SkillsPersoPage(){
    return(<main id="persoSkillsPage">
        SkillsPersoPage works !
        <NavButton iconsHref={[{icon:faArrowLeft,href:'./'},{icon:faHome,href:'./'}]}></NavButton>
    </main>)
}