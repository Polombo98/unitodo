import { FC } from "react";
import "./index.css";
import { useRecoilState } from "recoil";
import {
  activeFolder as activeFolderAtom,
  folders as foldersAtom,
} from "../../atmos";

type AddModalProps = {
  activeFolder: number;
};

const AddModal: FC<AddModalProps> = ({ activeFolder }) => {
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
    <div>
      <h2>Введіть назву примітки:</h2>
      <input></input>
      <div>
        <button>Прийняти</button>
        <button>Відмінити</button>
      </div>
    </div>
  );
};

export default AddModal;
