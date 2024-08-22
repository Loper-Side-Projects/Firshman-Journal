import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HelloWorldResponse } from '../models/HelloWorldResponse';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'FishermanJournal';
  message!: string;

  constructor(private http: HttpClient){}

  ngOnInit(): void {
    this.http.get<HelloWorldResponse>("https://localhost:7244/User").subscribe({
      next: value => {
        console.log(this.message)
        this.message = value.greeting
      },
      error: err => this.message = err
    });
  }
}
