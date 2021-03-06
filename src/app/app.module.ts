import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuComponent } from './menu/menu.component';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatChipsModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatInputModule, MatCheckboxModule
} from '@angular/material';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SettingsComponent } from './settings/settings.component';
import { FeedComponent } from './feed/feed.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { HelpPageComponent } from './help-page/help-page.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageDetailsComponent } from './message-details/message-details.component';
import {environment} from '../environments/environment';
import { LogOnComponent } from './log-on/log-on.component';
import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MenuComponent,
    UserProfileComponent,
    SettingsComponent,
    FeedComponent,
    HelpPageComponent,
    MessagesComponent,
    MessageDetailsComponent,
    LogOnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatExpansionModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  providers: [ AngularFirestore ],
  bootstrap: [AppComponent]
})
export class AppModule { }
