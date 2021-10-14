import { ServerDetailComponent } from './server-detail/server-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServersComponent } from './servers/servers.component';

const routes: Routes = [
  { path: '', component: ServersComponent},
  { path: ':uuid', component: ServerDetailComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServerRoutingModule { }
