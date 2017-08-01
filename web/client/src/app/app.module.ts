import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { ProjectService } from './app.service';
import { FormsModule } from '@angular/forms';

@NgModule({

  declarations: [
    AppComponent
  ],
  imports: [
  	FormsModule,
    BrowserModule,
    HttpModule
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
