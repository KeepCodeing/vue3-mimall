export interface IMenuList {
  name: string;
  link?: string;
}

export interface IHeader {
  menuList?: IMenuList[];
  showMenus?: boolean;
  showActions?: boolean;
}
