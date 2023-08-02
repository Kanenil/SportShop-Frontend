import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from "./components/layout/layout.module";
import {PagesModule} from "./components/pages/pages.module";
import { ClickedOutsideDirective } from './directives/clicked-outside.directive';
import { TruncatePipe } from './pipes/truncate.pipe';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LayoutModule,
        PagesModule,
      HttpClientModule
    ],
    providers: [],
  exports: [


  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
