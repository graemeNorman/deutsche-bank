import { Component } from '@angular/core';
import _ from 'lodash';
import { environment } from '../environments/environment';
import { DataService } from './services/data.service';
import { InitialData, MappedData } from './models/models';
import { Store } from '@ngrx/store';
import {AvailableCountries, SelectedCountry, SelectedRegion} from './actions/actions';
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

  // Store
  // appStore: Observable<Array<any>>

  constructor(private dataService: DataService,
              private $store: Store<any>) {
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
        this.$store.dispatch(
          new AvailableCountries({ region: regionName, countries: this.regionData })
        );
        this.makeActive = true;
        // console.log(this.regionData);
      }
    });
  }

  emittedValue(eventData: any) {
    if (eventData.target.id === 'regionSelect') {
      this.makeActive = false;
      this.$store.dispatch(new SelectedRegion({ name: eventData.target.value }));
      this.getRegionData(eventData.target.value);
    } else {
      this.selectedData = _.find(this.regionData, { name: eventData.target.value });
      this.$store.dispatch(new SelectedCountry({ name: eventData.target.value }));
      this.dataTableDisplay ? this.viewBtn = false : this.viewBtn = true;
    }
  }

  showDataTable() {
    this.dataTableDisplay = true;
  }
}
