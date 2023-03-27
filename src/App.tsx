import './App.css';
import AboutPage from './pages/About/AboutPage';
import GoalsPage from './pages/Goals/GoalsPage';
import { HomePage } from './pages/Home/HomePage';
import PassionsPage from './pages/Passions/PassionsPage';
import SkillsButPage from './pages/Skills/SkillsBut/SkillsButPage';
import SkillsPage from './pages/Skills/SkillsPage';
import SkillsPersoPage from './pages/Skills/SkillsPerso/SkillsPersoPage';


function App() {
  const queryParameters = new URLSearchParams(window.location.search)
  const page = queryParameters.get("page");
  const section = queryParameters.get("section");
  if (page === "about"){
    return (<AboutPage></AboutPage>);
  }else if (page === "skills"){
    if(section === "but") return(<SkillsButPage></SkillsButPage>)
    else if (section === "perso") return(<SkillsPersoPage></SkillsPersoPage>)
    return(<SkillsPage></SkillsPage>)
  }else if (page === 'passions'){
    return (<PassionsPage></PassionsPage>)
  }else if (page === 'goals'){
    return (<GoalsPage></GoalsPage>)
  }
  return (<HomePage></HomePage>);
}

export default App;
