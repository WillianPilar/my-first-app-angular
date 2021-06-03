import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  idServer : number = 10;
  statusServer : string = "Offline";
  ativarNewServer = false;
  serverCriado = "Nenhum server foi criado."
  serverName;
  serverCreated = false;
  
  constructor() { 
    setTimeout(() => {
      this.ativarNewServer = true;      
    }, 2000);
  }

  ngOnInit(): void {
  }

  getIDServer(){
    return this.idServer;
  }

  onCreateNewServer(){
    this.serverCriado = this.serverName + " foi criado!";
    this.statusServer = "Online";
    this.serverCreated = true;
  }

  onUpdateServerName(event : any){
    console.log(event);
    this.serverName = event.target.value;
  }
}
