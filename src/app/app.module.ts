import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './modules/chat/sidebar/sidebar.component';
import { ChatComponent } from './modules/chat/chat.component';
import { FormsModule } from '@angular/forms';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatDefaultPageComponent } from './modules/chat/chat-area/chat-default-page/chat-default-page.component';
import { MaterialModule } from './shared/material/material.module';
import { ChatAreaComponent } from './modules/chat/chat-area/chat-area.component';
import { LoginComponent } from './modules/login/login.component';
import { ChatRoomComponent } from './modules/chat/chat-area/chat-room/chat-room.component';
import { SidebarContentComponent } from './modules/chat/sidebar/sidebar-content/sidebar-content.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ChatComponent,
    ChatDefaultPageComponent,
    ChatAreaComponent,
    LoginComponent,
    ChatRoomComponent,
    SidebarContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PickerModule,
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
