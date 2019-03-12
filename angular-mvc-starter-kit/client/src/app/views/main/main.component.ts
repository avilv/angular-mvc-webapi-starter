import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private http : HttpClient) { }

  public text : Observable<string>;

  ngOnInit() {
    this.text = this.http.get<string>("./api/text");
  }

}
