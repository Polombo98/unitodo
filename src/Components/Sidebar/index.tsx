import { useEffect } from "react";
import "./index.css";
import Folder from "../Folder";
import { useRecoilValue } from "recoil";
import { folders as foldersAtom } from "../../atmos";

const Sidebar = () => {
  const folders = useRecoilValue(foldersAtom);

  return (
    <div className="sidebar">
      {folders.map(({ id }) => (
        <Folder id={id} title={`Папка ${id + 1}`} key={id} />
      ))}
      <Folder id={-1} title="Додати папку" isAddButton />
    </div>
  );
};

export default Sidebar;
