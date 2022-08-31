import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatPopupRoutingModule } from './chat-popup-routing.module';
import { ChatPopupComponent } from './chat-popup.component';


@NgModule({
  declarations: [
    ChatPopupComponent
  ],
  imports: [
    CommonModule,
    ChatPopupRoutingModule
  ]
})
export class ChatPopupModule { }
