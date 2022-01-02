import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './modules/login/login.component';
import {ChatContainerComponent} from './modules/chat-container/chat-container.component';
import {AuthGuard} from './guards/auth.guard';
import {ChatDefaultPageComponent} from './modules/chat-container/chat-default-page/chat-default-page.component';


const routes: Routes = [
  {
    path: '',
    component: ChatContainerComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ChatDefaultPageComponent },
    ]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
