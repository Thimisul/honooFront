import { Component, OnInit } from '@angular/core';
import { EventsApiService } from './shared/events-api.service';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor(public eventsApiService: EventsApiService) { 
  
  }

  ngOnInit() {
    this.eventsApiService.getAllEvents
    
  }

}
