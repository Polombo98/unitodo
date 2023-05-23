import { FC } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import "./index.css";
import {
  folders as foldersAtom,
  activeFolder as activeFolderAtom,
} from "../../atmos";

const Header = () => {
  const [folders, setFolders] = useRecoilState(foldersAtom);
  const activeFolder = useRecoilValue(activeFolderAtom);
  const handleAdd = () => {
    const foldersCopy = [...folders];
    foldersCopy[activeFolder].items = [
      ...foldersCopy[activeFolder].items,
      { date: new Date().toString(), value: "" },
    ];
    setFolders(foldersCopy);
  };
  return (
    <header>
      <h1>Щоденник📒</h1>
      <input />
      <div>
        <button onClick={handleAdd}>Додати</button>
        <button>Час</button>
      </div>
    </header>
  );
};

export default Header;
