import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ra-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pasta = 'assets/images/pasta.jpg';

  constructor() { }

  ngOnInit() {
  }

}
