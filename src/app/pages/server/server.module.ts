import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServerRoutingModule } from './server-routing.module';
import { ServersComponent } from './servers/servers.component';


@NgModule({
  declarations: [
    ServersComponent
  ],
  imports: [
    CommonModule,
    ServerRoutingModule
  ]
})
export class ServerModule { }
