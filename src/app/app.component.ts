import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { DataService } from './services/data.service';
import { InitialData, MappedData } from './models/models';
import _ from 'lodash';
import { AvailableCountries, SelectedCountry, SelectedRegion } from './actions/actions';

const states = require('../data/states.json');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy {
  title = 'Deutsche Bank Tech Test';
  logo: string;
  makeActive: boolean;
  dataTableDisplay: boolean;
  viewBtn: boolean;
  regionData: MappedData[];
  selectedData: MappedData;
  states: InitialData[];

  // Store Observables
  regionSelect$: Observable<InitialData>;
  countryList$: Observable<any>;

  constructor(private dataService: DataService,
              private $store: Store<any>) {
    this.logo = environment.logo;
    this.states = _.cloneDeep(states);

    this.regionSelect$ = this.$store.select(s => s.deutsche_bank.selectedRegion);
    this.countryList$ = this.$store.select(s => s.deutsche_bank.europeanCountries);
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
      }
    });
  }

  emittedValue(eventData: any) {
    if (eventData.target.id === 'regionSelect') {

      this.regionSelect$.subscribe(region => {
        if (region.name !== eventData.target.value) {
          this.dataTableDisplay = false;
          this.selectedData = undefined;
          this.makeActive = false;

          setTimeout(() => {
            this.$store.dispatch(new SelectedRegion({ name: eventData.target.value }));
            this.getRegionData(eventData.target.value);
          }, 750);
        }
      });

    } else {
      this.selectedData = _.find(this.regionData, { name: eventData.target.value });
      this.$store.dispatch(new SelectedCountry({ name: eventData.target.value }));
      this.dataTableDisplay ? this.viewBtn = false : this.viewBtn = true;
    }
  }

  showDataTable() {
    this.dataTableDisplay = true;
  }

  ngOnDestroy() {}
}
