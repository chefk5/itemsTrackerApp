export interface Item {
  id: string;
  name?: string;
  count?: number;
}

export interface ItemData {
  name: string;
  count: number;
}

export interface ItemsState {
  items: Array<Item>;
}
