import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  idServer : number = 0;
  serverStatus : string = "Offline";
  ativarNewServer = false;
  serverCriado = "Nenhum server foi criado."
  serverName;
  serverCreated = false;
  servers = ["Teste"];
  
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
    this.serverStatus = "Online";
    this.idServer = this.idServer + 1;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event : any){
    console.log(event);
    this.serverName = event.target.value;
  }

  getServerStatusColor(){
    return this.serverStatus === "Online" ? "white" : "red";
  }
}
