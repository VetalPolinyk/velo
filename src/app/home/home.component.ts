import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
    images: Array<string> = ['../../assets/dostavkaa-1500x480.jpg', '../../assets/podr-1500x480.jpg'];
  constructor(config: NgbCarouselConfig) {
    config.interval = 5000;
    config.wrap = false;
    config.keyboard = false;
   }

  ngOnInit() {

  }

}
