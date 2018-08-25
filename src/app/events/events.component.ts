import { Component, OnInit } from '@angular/core';
import { SeoService, SeoModel } from '../services/seo.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(seoService: SeoService) {
    let seoModel = <SeoModel>{
       title: 'Next Events',
       description: 'List of next events technical in Ireland',
       robots: 'Index, Flows',
       keywords: 'events,workshops,meetings,lectures'
    }

    seoService.setSeoData(seoModel);
  }

  ngOnInit() {
  }

}
