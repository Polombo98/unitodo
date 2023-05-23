export type ContextValues = {
  data: {
    activeFolder?: number;
    folders: Folder[];
  };
  setData: () => void;
};

export type Folder = {
  id: number;
  items: Item[];
};

export type Item = {
  date: string;
  value: string;
};
