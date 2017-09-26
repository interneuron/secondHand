import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import {MdSelectModule, MdInputModule} from "@angular/material";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//--------------------------------------------------------
import {NgxDatatableModule} from "@swimlane/ngx-datatable";

//--------------------------------------------------------------
import {
    ContactsComponent,
    HeaderComponent,
    MainmenuComponent,
    HomeComponent,
    AppTimeComponent,
    TableComponent,
    AppRoutingModule
} from "./index";
import {DataService} from "./__service/data.service";
//--------------------------------------------------------------

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        AppTimeComponent,
        MainmenuComponent,
        ContactsComponent,
        HomeComponent,
        TableComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        NgxDatatableModule,
        FormsModule,
        ReactiveFormsModule,
        MdSelectModule,
        MdInputModule,
        BrowserAnimationsModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
