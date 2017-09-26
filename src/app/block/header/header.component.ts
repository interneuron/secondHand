import {Component, OnInit} from '@angular/core';
import {DataService} from "../../__service/data.service";


@Component({
    moduleId: module.id,
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.less'],
    providers: [DataService]
})
export class HeaderComponent implements OnInit {
    imgSrc: string = 'assets/img/main_logo.png';
    workTime: string = 'assets/img/worktime.png';
    location: Array<string> = ['Санкт-Петербург','Москва'];
    contacts: Array<string> = ['+7 962 937-95-16', '+7 958 558-11-97']
    data: Array<number>;
    istyle: string;


    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        console.log('Получили данные из сервиса', this.data);
    }

    changeStyleI(style: any) {
        this.istyle = style;
        console.log((this.istyle));
    }

}
