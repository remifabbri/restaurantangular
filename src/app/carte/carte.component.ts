import { Component, OnInit } from '@angular/core';
import { ClanService } from '../services/clan.service';
import { Clan } from '../models/clan.interface'


@Component({
  selector: 'ra-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {

  dogs = [
    { race: 'berger allemand', name: 'wolfy' },
  ];

  clan: Clan[]; 

  constructor(private cs: ClanService) { }

  ngOnInit() {
    this.clan = this.cs.getClan();
  }

}
