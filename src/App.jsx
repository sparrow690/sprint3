import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Trends from "./Components/Trends";
import { useState } from "react"
import TweetContext from "./data/context";
import data from "./data/initial-data.json"

function App() {
  let [donnee, setData] = useState(data)
  return (
    <>
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="timeline">
        <TweetContext.Provider value={[donnee, setData]}>
          <Outlet />
        </TweetContext.Provider>
        </div>
        <div className="trends">
          <Trends />
        </div>
    </>
  );
}

export default App;
