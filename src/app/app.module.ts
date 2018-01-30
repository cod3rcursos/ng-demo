import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { ROUTES } from './app.routes';
import { MenuComponent } from './header/menu/menu.component';
import { UploadComponent } from './upload/upload.component'

import { UploadService } from './upload/upload.service';
import { ProgressComponent } from './progress/progress.component';
import { InputFileDirective } from './upload/input-file.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    MenuComponent,
    UploadComponent,
    ProgressComponent,
    InputFileDirective,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
