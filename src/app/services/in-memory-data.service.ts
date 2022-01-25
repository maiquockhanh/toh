import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Iron Man' },
      { id: 2, name: 'Hulk' },
      { id: 3, name: 'Captain America' },
      { id: 4, name: 'Thor' },
      { id: 5, name: 'Black Widow' },
      { id: 6, name: 'Haweye' },
      { id: 7, name: 'Scarlet Witch' },
      { id: 8, name: 'Dr Strange' },
      { id: 9, name: 'Spiderman' },
      { id: 10, name: 'Black Panther' }
    ];
    return {heroes};
  }


  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}