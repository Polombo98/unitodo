import { FC } from "react";
import "./index.css";
import { Folder as FolderType } from "../../types";
import { folders as foldersAtom } from "../../atmos";
import { useRecoilState } from "recoil";
import { activeFolder as activeFolderAtom } from "../../atmos";

type FolderProps = {
  title: string;
  id: number;
  isAddButton?: boolean;
};

const Folder: FC<FolderProps> = ({ id, title, isAddButton = false }) => {
  const [folders, setFolders] = useRecoilState<FolderType[]>(foldersAtom);
  const [activeFolder, setActiveFolder] = useRecoilState(activeFolderAtom);

  const addFolder = () => {
    setFolders([...folders, { items: [], id: folders.length }]);
  };

  const handleClick = () => {
    isAddButton ? addFolder() : setActiveFolder(id);
    console.log(activeFolder);
  };

  return (
    <div
      className={`folder${activeFolder === id ? " active" : ""}`}
      onClick={handleClick}
    >
      {title}
    </div>
  );
};

export default Folder;
