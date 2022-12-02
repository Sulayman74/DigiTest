import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './card/card.component';
import { ChatComponent } from './components/chat/chat.component';
import { ExoComponentsComponent } from './components/exo-components/exo-components.component';
import { ExoModalComponent } from './modals/exo-modal/exo-modal.component';
import { HelloComponent } from './components/hello/hello.component';
import { HttpClientModule } from '@angular/common/http';
import { MainContentComponent } from './components/main-content/main-content.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from '@angular/material/select';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { SlideBarComponent } from './components/slideLeft-bar/slide-bar.component';
import { SlideBarRightComponent } from './components/slide-bar-right/slide-bar-right.component';
import { TestModalComponent } from './modals/test-modal/test-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    MainContentComponent,
    SlideBarComponent,
    SlideBarRightComponent,
    NavbarComponent,
    ExoComponentsComponent,
    HelloComponent,
    ChatComponent,
    ExoModalComponent,
    TestModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatAutocompleteModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
