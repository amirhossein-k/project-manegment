export interface Item {
  title: string;
  subtitle?: string;
  id: number | string;
  createAt?: any;
  updateAt?: any;
  owerId?: string;
}

export interface prodcutItem {
  title: string;
  subtitle?: string;
  id: string;
  createAt: any;
  updateAt: any;
  owerId: string;
}
export interface List {
  // id: string;
  // car: string;
  // model?: string | null;
  // body?: string | null;
  // som?: string | null;
  // prope?: string | null;
  // buy: string;
  // sale: string;
  // kom: string;
  time?: string;
  list: prodcutItem[];
  id: string;
  createAt: any;
  updateAt: any;
}
