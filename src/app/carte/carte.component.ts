import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { ClanService } from '../services/clan.service';
import { Clan } from '../models/clan.interface'


@Component({
  selector: 'ra-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  public clan = []; 

  constructor(private cs: ClanService) { }

  ngOnInit() {
    
    this.clan = this.cs.getdataclan()
        .subscribe(data => this.clan = data);
  }

}
