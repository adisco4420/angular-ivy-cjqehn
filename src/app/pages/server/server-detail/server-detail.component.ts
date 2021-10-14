import { ServerService } from './../../../services/server.service';
import { Observable } from 'rxjs';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { IServer } from 'src/app/interfaces/server';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-server-detail',
  templateUrl: './server-detail.component.html',
  styleUrls: ['./server-detail.component.scss']
})
export class ServerDetailComponent implements OnInit {
  server$?: Observable<IServer>;
  serverId: string;
  modalRef?: BsModalRef;
  serverDetails?: IServer;

  constructor(
    private serverSrv: ServerService,
    private modalService: BsModalService,
    private route: ActivatedRoute,
    private router: Router,
    ) {
      this.serverId = this.route.snapshot.params.uuid;
     }

  ngOnInit(): void {
    this.getServer();
  }
  openModal(template: TemplateRef<any>, server: IServer) {
    this.serverDetails = server;    
    this.modalRef = this.modalService.show(template);
  }
  getServer() {
    this.server$ = this.serverSrv.getServer(this.serverId);
  }
  updateServer(form: NgForm) {
    if(form.valid) {
      this.serverSrv.updateServer(this.serverId, form.value).subscribe(res => {
        this.getServer()
        this.modalRef?.hide()
      })
    }
  }
  confirm(): void {
    // this.message = 'Confirmed!';
    this.serverSrv.deleteServer(this.serverId).subscribe(res => {
      this.modalRef?.hide();
      this.router.navigateByUrl('/')
    })
  }
 
  decline(): void {
    // this.message = 'Declined!';
    this.modalRef?.hide();
  }


}

