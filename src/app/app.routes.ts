import {Routes} from '@angular/router'

import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'upload', component: UploadComponent},
  {path: '**', component: NotFoundComponent}
]
