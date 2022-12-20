import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SearchPipe } from '../pipes/search.pipe';
import { FormComponent } from './form/form.component';
import { ConcatNamesPipe } from '../pipes/concat-names.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    MainComponent,
    SearchPipe,
    FormComponent,
    ConcatNamesPipe
  ],
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
