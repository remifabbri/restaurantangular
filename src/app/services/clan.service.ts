import { Injectable } from '@angular/core';
import { Clan } from '../models/clan.interface';

@Injectable({
  providedIn: 'root'
})
export class ClanService {

  clan: Clan[] = [
    {
      tag: '#RYYRLV',
      name: 'TREPALIUM',
      type: 'open',
      description: 'RECRUTE de bon tarba prét à faire tomber des tours en GDC 👊 Clan détente 🦉🔞. Discord 📣 https://discord.gg/g5rPFkr',
      badgeId: 16000107,
      clanScore: 45073,
      location: {
        id: 57000087,
        name: 'France',
        isCountry: true,
        countryCode: 'FR'
      },
      requiredTrophies: 4000,
      donationsPerWeek: 8978,
      clanChestStatus: 'inactive',
      clanChestPoints: 1600,
      clanChestLevel: 10,
      clanChestMaxLevel: 10,
      members: 49,
      memberList: [
        {
          tag: '#228VJ0JP',
          name: 'KRASH',
          role: 'leader',
          expLevel: 13,
          trophies: 4926,
          arena: {
            id: 54000015,
            name: 'League 4'
          },
          clanRank: 2,
          previousClanRank: 2,
          donations: 50,
          donationsReceived: 280,
          clanChestPoints: 50
        },
      ]
    }
  ]

  constructor() { }

  getClan(): Clan[] {
    return this.clan;
  }
}