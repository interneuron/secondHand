import {Component, OnInit} from '@angular/core';
import {DataService} from "../../__service/data.service";

@Component({
    moduleId: module.id,
    selector: 'app-mainmenu',
    templateUrl: 'mainmenu.component.html',
    styleUrls: ['mainmenu.component.less'],
    providers:[DataService]
})
export class MainmenuComponent implements OnInit {
    private menu;

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.dataService
            .getMenuList()
            .then(result => this.menu = result);
        console.log(this.menu)
    }

    clicked(val) {
        console.log('Click', val);
    }
}
