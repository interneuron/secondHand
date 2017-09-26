import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from "@angular/forms";
import {MdSelectModule, MdInputModule} from "@angular/material";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//--------------------------------------------------------
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {NgxGalleryModule} from 'ngx-gallery';

//--------------------------------------------------------------
import {
    ContactsComponent,
    HeaderComponent,
    MainmenuComponent,
    HomeComponent,
    AppTimeComponent,
    TableComponent,
    AppRoutingModule,
    GalleryComponent
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
        TableComponent,
        GalleryComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        NgxDatatableModule,
        FormsModule,
        ReactiveFormsModule,
        MdSelectModule,
        MdInputModule,
        BrowserAnimationsModule,
        NgxGalleryModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
