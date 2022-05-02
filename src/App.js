import logo from "./logo.svg";
import "./App.css";
import Router from "./router/Router";
import { LangProvider } from "./context/langContext";
function App() {
  return (
    <div className="todalapp">
      <LangProvider>
        <Router />
      </LangProvider>
    </div>
  );
}

export default App;
