import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { QuickLunchService } from '../services/quick-lunch.service';
import { Food } from '../models/food.interface'

@Component({
  selector: 'ra-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent implements OnInit{

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: "Burgers", cols: 2, rows: 1, id: 'bgr' },
          { title: "Galettes/crêpes", cols: 2, rows: 1, id: 'glt' },
          { title: "Pizza", cols: 2, rows: 1, id: 'pzz' }
        ];
      }

      return [
        { title: "Burgers", cols: 2, rows: 1, id: 'bgr' },
        { title: "Galettes/crêpes", cols: 2, rows: 1, id: 'glt' },
        { title: "Pizza", cols: 2, rows: 1, id: 'pzz' }
      ];
    })
  );

  burgers: Food[];
  pizzas: Food[]; 
  galettes: Food[];  

  constructor(private qls: QuickLunchService, private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.burgers = this.qls.getBurgers();
    this.pizzas = this.qls.getPizzas(); 
    this.galettes = this.qls.getGalettes(); 

  }
}
