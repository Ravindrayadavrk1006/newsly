import { HeaderComponent } from './common/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadlinesComponent } from './headlines/headlines.component';
import { HeadlinesDetailsComponent } from './headlines-details/headlines-details.component';
import {HttpClientModule} from '@angular/common/http';
import {from} from 'rxjs';
import { FooterComponent } from './common/footer/footer.component';//can be removed too
@NgModule({
  declarations: [
    AppComponent,
    HeadlinesComponent,
    HeadlinesDetailsComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
