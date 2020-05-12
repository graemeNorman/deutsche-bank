import { Component } from '@angular/core';
import _ from 'lodash';
import { environment } from '../environments/environment';
import { DataService } from './services/data.service';
import { InitialData, MappedData } from './models/models';
const states = require('../data/states.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Deutsche Bank Tech Test';
  logo: string;
  regionData: MappedData[];
  makeActive: boolean;
  dataTableDisplay: boolean;
  selectedData: MappedData;
  viewBtn: boolean;
  states: InitialData[];

  constructor(private dataService: DataService) {
    this.logo = environment.logo;
    this.states = _.cloneDeep(states);
  }

  getRegionData(regionName: string) {
    this.dataService.getCountryRegionData(regionName).subscribe(regionData => {
      if (regionData.length > 0) {
        this.regionData = regionData.map(obj => ({
          name: obj.name,
          capital: obj.capital,
          population: obj.population,
          currencies: obj.currencies,
          flag: obj.flag,
        }));
        this.makeActive = true;
        // console.log(this.regionData);
      }
    });
  }

  emittedValue(eventData: any) {
    if (eventData.target.id === 'regionSelect') {
      this.makeActive = false;
      this.getRegionData(eventData.target.value);
    } else {
      this.selectedData = _.find(this.regionData, { name: eventData.target.value });
      this.dataTableDisplay ? this.viewBtn = false : this.viewBtn = true;
    }
  }

  showDataTable() {
    this.dataTableDisplay = true;
  }

}
