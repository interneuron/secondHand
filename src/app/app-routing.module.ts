import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ContactsComponent} from "./block/contacts/contacts.component";
import {HomeComponent} from "./block/home/home.component";


@NgModule({
    imports: [
        RouterModule.forRoot([
            {path: 'home', component: HomeComponent},
            {path: 'contacts', component: ContactsComponent},
            {path: '', component: HomeComponent}
        ])],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
