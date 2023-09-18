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
//
export interface prodcutItemList {
  title: string;
  subtitle: string;
  id: string;
  createAt: any;
  updateAt: any;
  owerId: string | null;
}
export interface ListGet {
  list: prodcutItemList[];
  id: string;
  createAt: any;
  updateAt: any;
}

export const headerr = [
  {subtitle: "ماشین", id: 1, title: "car"},
  {subtitle: "مدل", id: 2, title: "model"},
  {subtitle: "بدنه", id: 3, title: "body"},
  {subtitle: "ویژگی", id: 4, title: "prope"},
  {subtitle: "شراکتی", id: 5, title: "som"},
  {subtitle: "خرید", id: 6, title: "buy"},
  {subtitle: "فروش", id: 7, title: "sale"},
  {subtitle: "کومیسیون", id: 8, title: "kom"},
  {subtitle: "سود", id: 9, title: "sod"},
  {subtitle: "ادیت", id: 10, title: "edite"},
];
