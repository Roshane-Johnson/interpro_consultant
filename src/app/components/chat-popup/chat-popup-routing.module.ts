import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatPopupComponent } from './chat-popup.component';

const routes: Routes = [{ path: '', component: ChatPopupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatPopupRoutingModule { }
