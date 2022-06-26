import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';
import { ClientComponent } from './pages/client/client.component';
import { CarmodelComponent } from './pages/carmodel/carmodel.component';
import { DocumentsComponent } from './pages/documents/documents.component';
import { NotesComponent } from './pages/notes/notes.component';
import { SignatureComponent } from './pages/signature/signature.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { DemoDirective } from './directive/demo.directive';
import { DamagesComponent } from './pages/damages/damages.component';
import { DamagesOverviewComponent } from './pages/damages-overview/damages-overview.component';
import { IsActiveDirective } from './directive/is-active.directive';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ClientComponent,
    CarmodelComponent,
    DocumentsComponent,
    NotesComponent,
    SignatureComponent,
    PhotosComponent,
    DemoDirective,
    DamagesComponent,
    DamagesOverviewComponent,
    IsActiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
