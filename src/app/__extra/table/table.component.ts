import {Component, OnInit, ViewChild} from '@angular/core';
import {DatatableComponent} from "@swimlane/ngx-datatable";

import {
    DataService,
    price
} from "../../__service/index";


@Component({
    moduleId: module.id,
    selector: 'app-table',
    templateUrl: 'table.component.html',
    styleUrls: ['table.component.less'],
    providers: [DataService],

})

export class TableComponent implements OnInit {
    isAdmin: boolean = false;
    //Переменные таблица
    private rows: Array<Object>;
    private temp: Array<Object>;
    //Динамические размеры
    nameWidth: string = "230px";
    catWidth: string = "150px";
    countryWidth: string = "150px";
    pricePdf: string = "прайс.pdf";
    priceXls: string = "прайс.xls";
    selected = [];
    res: boolean = true;
    columns = [
        {prop: 'name', name: 'Наименование', minWidth: "300", maxWidth: "300", resizeable: this.res},
        {
            prop: 'quality',
            name: 'Категория',
            canAutoResize: true,
            minWidth: "120",
            maxWidth: "120",
            resizeable: this.res
        },
        {prop: 'country', name: 'Страна', canAutoResize: true, minWidth: "100", maxWidth: "100", resizeable: this.res},
        {prop: 'count', name: 'Наличие', canAutoResize: true, minWidth: "100", maxWidth: "100", resizeable: this.res},
        {
            prop: 'weigth',
            name: 'Вес мешка',
            canAutoResize: true,
            minWidth: "100",
            maxWidth: "100",
            resizeable: this.res
        },
        {prop: 'netto', name: 'Еще вес', canAutoResize: true, minWidth: "110", maxWidth: "110", resizeable: this.res},
        {prop: 'price', name: 'Стоимость', canAutoResize: true, minWidth: "110", maxWidth: "110", resizeable: this.res},
        // {prop: 'amount', name: 'Еще что-то', canAutoResize: true, minWidth: "80", resizeable: true},
    ];
    //Переменные для Select ---------------------------------------------
    category: Array<{ value: string, viewValue: string }> = [];
    country: Array<{ value: string, viewValue: string }> = [];
    //---------------------------------------------
    @ViewChild(DatatableComponent) table: DatatableComponent;

    constructor(private dataSrv: DataService) {
    }

    ngOnInit() {
        this.table.bodyHeight = 600;
        this.dataSrv
            .getPrice()
            .then(res => {
                this.rows = res;
                this.temp = res;
                let mass: Array<string> = [];
                let country: Array<string> = [];
                for (let a of res) {
                    let item: string = a.quality;
                    if (mass.indexOf(item) == -1) {
                        mass.push(item);
                        this.category.push({value: item, viewValue: item})
                    }
                    item = a.country;
                    if (country.indexOf(item) == -1) {
                        country.push(item);
                        this.country.push({value: item, viewValue: item})
                    }
                }
            });
    }

    //Select events -----------------------------------------------------

    //-------------------------------------------------------------------
    onSelect({selected}) {
        console.log('Select Event', selected, this.selected);
    }

    onActivate(event) {
        // console.log('Activate Event', event);
    }

    resizeHeader(e) {
        console.log(e);
        if (e.newValue < 250) {
            e.column.name == this.columns[0].name ? this.nameWidth = e.newValue + 'px' : console.log(1);
            e.column.name == this.columns[1].name ? this.catWidth = e.newValue + 'px' : console.log(2);
            e.column.name == this.columns[2].name ? this.countryWidth = e.newValue + 'px' : console.log(3);
        }
    }

    sortingItems(name, cat, state) {
        let find: Array<string> = ['', ''];
        name.value ? name.value = '' : false;
        (cat.value) && (cat.value !== "Сбросить фильтр") ? find[0] = (cat.value.toLowerCase()) : console.log(2);
        (state.value) && (state.value !== "Сбросить фильтр") ? find[1] = (state.value.toLowerCase()) : console.log(3);
        console.log(find);

        let temp = this.temp.filter(d => {
            return d['quality'].toLowerCase().indexOf(find[0]) !== -1 || !find[0]
        });
        temp = temp.filter(d => {
            return d['country'].toLowerCase().indexOf(find[1]) !== -1 || !find[1]
        });

        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;

    }

//Сортировка категории
    onMouseOutCategory(val) {
        if (val.value == "Сбросить фильтр") {
            this.category.shift();
            val.focused = false;
            console.log(val);
        } else {
            if (this.category[0].value !== "Сбросить фильтр") {
                console.log("Добавили сбросить фильтр");
                this.category.unshift({value: 'Сбросить фильтр', viewValue: 'Сбросить фильтр'});
            }
        }
        console.log('Убрали мышку');
    }

    onMouseOutCountry(item) {
        if (item.value == "Сбросить фильтр") {
            this.country.shift();
            item.focused = false;
        } else {
            if (this.country[0].value !== "Сбросить фильтр") {
                this.country.unshift({value: 'Сбросить фильтр', viewValue: 'Сбросить фильтр'});
            }
        }
    }

    //-----------------------------------------------------------------------------------------------------------------
    updateFilter(e, cat, state) {
        const val = e.target.value.toLowerCase();
        //clear select
        this.category[0].value == "Сбросить фильтр" ? this.category.shift() : false;
        this.country[0].value == "Сбросить фильтр" ? this.country.shift() : false;

        cat.value ? cat.value = "" : false;
        state.value ? state.value = "" : false;

        // filter our data
        const temp = this.temp.filter(d => {
            return d['name'].toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.rows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }
}
