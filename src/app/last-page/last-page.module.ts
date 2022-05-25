import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LastPagePageRoutingModule } from './last-page-routing.module';

import { LastPagePage } from './last-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LastPagePageRoutingModule
  ],
  declarations: [LastPagePage]
})
export class LastPagePageModule {}
