import logo from './logo.svg';
import './App.css';
import CountUp from 'react-countup';
import Router from './router/Router'
import {LangProvider} from './context/langContext'
function App() {
  return (
    <div className="todalapp">
    <LangProvider >
    <Router/>

    </LangProvider>
    </div>
    // <div className="App">
    
    //   <NavBar/>
    //   <div style={{fontSize:'150px' }}>
    //     <CountUp
    //       start={0}
    //       end={10000}
    //       duration={6}z
    //     />    
    //   </div>
    // </div>
  );
}

export default App;
