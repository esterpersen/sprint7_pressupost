import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanellComponent } from './panell/panell.component';
import { PressupostComponent } from './pressupost/pressupost.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ModalComponent } from './modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'pressupost', component: PressupostComponent },
];

@NgModule({
  declarations: [AppComponent, PanellComponent, PressupostComponent, WelcomeComponent, ModalComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, RouterModule.forRoot(routes), NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
