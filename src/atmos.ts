import { atom } from "recoil";
import { Folder } from "./types";
export const folders = atom<Folder[]>({
  key: "folders",
  default: [],
});

export const activeFolder = atom({
  key: "activeFolder",
  default: 0,
});
