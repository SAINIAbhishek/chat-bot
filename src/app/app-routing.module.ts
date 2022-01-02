import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './modules/login/login.component';
import {AuthGuard} from './guards/auth.guard';
import {ChatDefaultPageComponent} from './modules/chat/chat-area/chat-default-page/chat-default-page.component';
import {ChatComponent} from './modules/chat/chat.component';
import {ChatRoomComponent} from './modules/chat/chat-area/chat-room/chat-room.component';

const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ChatDefaultPageComponent
      },
      {
        path: 'room/:id',
        component: ChatRoomComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
