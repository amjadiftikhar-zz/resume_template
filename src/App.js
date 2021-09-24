import './App.css';
import {Container} from "reactstrap";
import Resume from './resume.components/Resume';
import PrintEducation from './resume.components/components/print.components/PrintEducation'
import GlobalStyles from "./styles/global";

function App() {
  return (
    <Container className="app">
      <PrintEducation>
        <Resume/>
      </PrintEducation>
      <GlobalStyles/>
    </Container>
  );
}

export default App;