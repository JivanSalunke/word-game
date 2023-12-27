import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WordServiceService } from './word-service.service';
import { SpinnerComponent } from './spinner/spinner.component';
import { MirrorWordComponent } from './mirror-word/mirror-word.component';
import { AppRoutingModule } from './app-routing.module';
import { JumbledWordComponent } from './jumbled-word/jumbled-word.component';
import { A11yModule } from '@angular/cdk/a11y';
import {AlertComponent} from './alert/alert.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  providers: [WordServiceService],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    A11yModule,
  ],
  declarations: [
    AppComponent,
    SpinnerComponent,
    MirrorWordComponent,
    JumbledWordComponent,
    AlertComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
