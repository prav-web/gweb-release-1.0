import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services-page/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { ContactService } from 'src/assets/services/contact.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
