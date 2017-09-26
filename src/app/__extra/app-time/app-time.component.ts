import {Component, OnInit, Attribute, Output, EventEmitter} from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'now',
    templateUrl: './app-time.component.html'
})

export class AppTimeComponent implements OnInit {
    private format;
    private time: string;
    private status: string;
    private work = {"work": 'Мы открыты!', 'no': 'Мы закрыты!', "weekend": 'Выходной'};
    private style: string;

    @Output() istyle: EventEmitter<string> = new EventEmitter<string>();

    constructor(@Attribute("format") format) {

        setInterval(() => {
            let hour = moment().hour();
            let day = moment().day();

            this.time = moment().locale('ru').format("LTS").toString();
            if (day < 6) {
                if (hour >= 10 && hour < 16) {
                    this.status = this.work.work;
                    this.checkStatus('i_green');
                } else {
                    this.status = this.work.no;
                    this.checkStatus('i_red');
                }
            } else {
                this.status = this.work.weekend;
                this.checkStatus('i_orange');
            }
        }, 1000);
    }

//Проверяем цвет иконки
    checkStatus(value: string): void {
        if (this.style != value) {
            this.style = value;
            this.istyle.emit(value);
        }
    }

    ngOnInit() {
    }

}
