import { Component, OnInit } from '@angular/core';

abstract class PopulatedPlace {
  constructor(public name: string) {}

  abstract getPopulationDensity(): number;
  abstract getPopulation(): number;
  abstract getArea(): number;
}

export class Village extends PopulatedPlace {
  constructor(name: string, public numberOfHouses: number, public numberOfResidentsPerHouse: number, public area: number) {
    super(name);
  }

  getPopulationDensity(): number {
    return (this.numberOfHouses * this.numberOfResidentsPerHouse) / this.getArea();
  }

  getPopulation(): number {
    return this.numberOfHouses * this.numberOfResidentsPerHouse;
  }

  getArea(): number {
    return this.area;
  }
}

class City extends PopulatedPlace {
  constructor(name: string, public population: number, public area: number) {
    super(name);
  }

  getPopulationDensity(): number {
    return this.population / this.getArea();
  }

  getPopulation(): number {
    return this.population;
  }

  getArea(): number {
    return this.area;
  }
}

@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.page.html',
  styleUrls: ['./lab4.page.scss'],
})
export class Lab4Page implements OnInit {
  populatedPlaces: PopulatedPlace[] = [
    new Village('Village 1', 100, 4, 2),
    new City('City 1', 50000, 20),
    new Village('Village 2', 80, 5, 1.5),
    new City('City 2', 100000, 25),
    new Village('Village 3', 120, 3, 2.5)
  ];

  constructor() {}

  ngOnInit(): void {}

  getLowestPopulationDensity(): number {
    return Math.min(...this.populatedPlaces.map(place => place.getPopulationDensity()));
  }
}
