import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IServer } from '../interfaces/server';
import { v4 as uuidv4 } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class ServerService {
  private servers = [
    {
    "mem": 1, 
    "state": "stopped", 
    "cpu":7, 
    "uuid": "cb1cb873-0a46-41d6-affc-a1ed41955fbf", 
    "name": "My Server 1"
    },
    {
    "mem": 2, 
    "state": "running", 
    "cpu":8, 
    "uuid": "01e3021c-cd5c-4d3f-b39a-6b2dd3f706ba", 
    "name": "My Server 2"
    }, 
    {
    "mem": 4, 
    "state": "stopped", 
    "cpu":9, 
    "uuid": "1d76a4b0-6887-43cc-97b3-8229c05b1fa1", 
    "name": "My Server 3"
  },
  {
    "mem":  3, 
    "state": "running", 
    "cpu":4, 
    "uuid": "cb1cb873-0a46-41d6-affc-a1ed41955fbd", 
    "name": "My Server 4"
    },
    {
    "mem": 7, 
    "state": "stopped", 
    "cpu": 3, 
    "uuid": "01e3021c-cd5c-4d3f-b39a-6b2dd3f706bs", 
    "name": "My Server 5"
    }, 
    {
    "mem": 6, 
    "state": "running", 
    "cpu": 1, 
    "uuid": "1d76a4b0-6887-43cc-97b3-8229c05b1fa2", 
    "name": "My Server 6"
  }
  ]
        
  constructor() { }

  fetchServers(): Observable<IServer[]> {
    return new Observable((observer) => {
      observer.next(this.servers)
    })
  }
  createServer(payload: IServer) { 
    return new Observable((observer) => {
      payload.uuid = uuidv4()
      this.servers.unshift(payload);
      observer.next(this.servers)
    })
  }
  updateServer(uuid: string, payload: IServer) {
    return new Observable((observer) => {
      const serverIndex = this.servers.findIndex(server => server.uuid === uuid);
      if(serverIndex && this.servers[serverIndex]) {
        this.servers[serverIndex] = {...payload, uuid};
      }
      observer.next(this.servers)
    })
  }
  deleteServer(uuid: string) {
    return new Observable((observer) => {
      this.servers = this.servers.filter(server => server.uuid !== uuid);
      observer.next(this.servers)
    })
  }
  getServer(uuid: string): Observable<IServer> {
    return new Observable((observer) => {
      const server = this.servers.find(server => server.uuid == uuid);
      observer.next(server)
    })
  }

}
