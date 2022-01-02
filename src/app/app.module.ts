import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './modules/chat-container/sidebar/sidebar.component';
import { ChatComponent } from './modules/chat/chat.component';
import {FormsModule} from '@angular/forms';
import {PickerModule} from '@ctrl/ngx-emoji-mart';
import { LoginComponent } from './modules/login/login.component';
import { ChatContainerComponent } from './modules/chat-container/chat-container.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { ChatDefaultPageComponent } from './modules/chat-container/chat-default-page/chat-default-page.component';
import { ChatAreaComponent } from './modules/chat-container/chat-area/chat-area.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ChatComponent,
    LoginComponent,
    ChatContainerComponent,
    ChatDefaultPageComponent,
    ChatAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PickerModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
