import {Injectable} from '@angular/core';
import {price} from './dataPrice';

export const iconColor: string = 'green';

export const menuItems = [
    {route: "home", title: "О компании", styleName: "active"},
    {route: "route-1", title: "Доставка", styleName: "active"},
    {route: "route-1", title: "Оплата", styleName: "active"},
    {route: "route-1", title: "Обзор лотов", styleName: "active"},
    {route: "route-1", title: "Заявка", styleName: "nav_bay"},
    {route: "price", title: "Прайс", styleName: "nav_price"},
    {route: "contacts", title: "Контакты", styleName: "nav_contact"},
]

let menuPromise = Promise.resolve(menuItems);
let pricePromice = Promise.resolve(price);

@Injectable()
export class DataService {
    // private data = data;
    private iconColor = iconColor;

    constructor() {
    }

    getMenuList() {
        return menuPromise;
    }

    getPrice() {
        return pricePromice;
    }

    // getData() {
    //     return this.data;
    // }

    getIconColor() {
        return this.iconColor;
    }
}
