import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
@Component({
  selector: 'app-ben-detail',
  templateUrl: './ben-detail.component.html',
  styleUrls: ['./ben-detail.component.css']
})
export class BenDetailComponent implements OnInit {

  private url = `http://api.openweathermap.org/data/2.5/weather?q=$London&units=metric&appid=6dab1701e01913d4cd3dcfd0aad308c8`;


  constructor(private http: Http) {
    this.getData();
  }

  getData() {
    console.log(this.http.get(this.url));
  }
  ngOnInit() {
  }

}
