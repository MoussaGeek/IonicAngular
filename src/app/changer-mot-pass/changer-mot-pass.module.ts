import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangerMotPassPageRoutingModule } from './changer-mot-pass-routing.module';

import { ChangerMotPassPage } from './changer-mot-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangerMotPassPageRoutingModule
  ],
  declarations: [ChangerMotPassPage]
})
export class ChangerMotPassPageModule {}
