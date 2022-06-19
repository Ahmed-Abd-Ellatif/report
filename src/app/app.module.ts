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
    DemoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
