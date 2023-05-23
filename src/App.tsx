import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Sidebar from "./Components/Sidebar";
import { useLocalStorage } from "./Hooks";
import { Folder } from "./types";
import { RecoilRoot } from "recoil";

function App() {
  const { storedValue: activeFolder } = useLocalStorage("activeFolder", 0);
  const { storedValue: folders } = useLocalStorage<Folder[]>("folders", []);
  const [contextValues, setContextValues] = useState({
    activeFolder,
    folders,
  });
  return (
    <RecoilRoot>
      <Header />
      <div>
        <Sidebar />
      </div>
      <Footer />
    </RecoilRoot>
  );
}

export default App;
