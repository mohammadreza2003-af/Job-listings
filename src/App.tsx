import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import { GContext } from "./contexts/globalContext";

function App() {
  return (
    <GContext>
      <div className="w-full overflow-hidden font-leagueSparten">
        <div className="w-full flex justify-center items-center">
          <Navbar />
        </div>
        <div className="w-full bg-secondary">
          <div className="sm:px-16 px-6 flex items-center justify-center">
            <div className="xl:max-w-[1280px] w-full">
              <Main />
            </div>
          </div>
        </div>
      </div>
    </GContext>
  );
}

export default App;
