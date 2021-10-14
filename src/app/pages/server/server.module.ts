import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalModule } from 'ngx-bootstrap/modal';

import { ServerRoutingModule } from './server-routing.module';
import { ServersComponent } from './servers/servers.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ServersComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ServerRoutingModule,
    ModalModule.forRoot()
  ]
})
export class ServerModule { }
