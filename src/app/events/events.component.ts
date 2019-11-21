import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { EventsApiService } from './event/shared/events-api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  model: any = {};
 
  dataFromServer: any = [];
 
  constructor(
    private authService: AuthService,
    private eventsApiService: EventsApiService
  ) { }
 
  ngOnInit() {
    this.getSomePrivateStuff();
  }
 
  getAllEvents(){
  }

  getSomePrivateStuff() {
    this.model.action = 'stuff';
    this.authService.getData(this.model).subscribe(response => {
       if (response.status === 'success') {
        this.dataFromServer = response['data']['Coords'];
       }
    }, error => {
      this.authService.logout();
    });
  }
 
  logout(){
    this.authService.logout();
  }

}
