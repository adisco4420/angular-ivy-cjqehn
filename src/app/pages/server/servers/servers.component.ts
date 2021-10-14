import { IServer } from './../../../interfaces/server';
import { Observable } from 'rxjs';
import { ServerService } from './../../../services/server.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  servers$?: Observable<IServer[]>
  modalRef?: BsModalRef;

  constructor(
    private serverSrv: ServerService,
    private modalService: BsModalService) { }

  ngOnInit(): void {
    this.getServers();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  getServers() {
    this.servers$ = this.serverSrv.fetchServers();
  }
  addServer(form: NgForm) {
    if(form.valid) {
      this.serverSrv.createServer(form.value).subscribe(res => {
       this.modalRef?.hide()
      })
    }
    
  }

}
