import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { MappedData } from './services/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Deutsche Bank Tech Test';
  logo = 'https://www.db.com/company/img/db_logo.gif';
  regionData: MappedData[];
  countryData: any;
  makeActive: boolean;
  cowsMoo: boolean;

  constructor(private dataService: DataService,
              public fB: FormBuilder) {

    // dataService.getCountryRegionData('europe').subscribe(data => {
    //   console.log(data);
    // });

    // dataService.getCountryRegionData('asia').subscribe(asiaData => {
    //   console.log(asiaData);
    // });

    // dataService.getCountryRegionData('southAfrica').subscribe(brokenData => {
    //   console.log(brokenData);
    // });

  }

  form = this.fB.group({
    state: new FormControl()
  });

  // registrationForm = this.fb.group({
  //   file: [null],
  //   fullName: this.fb.group({
  //     firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[_A-z0-9]*((-|\s)*[_A-z0-9])*$')]],
  //     lastName: ['', [Validators.required]]
  //   }),
  //   email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
  //   phoneNumber: ['', [Validators.required, Validators.maxLength(10), Validators.pattern('^[0-9]+$')]],
  //   address: this.fb.group({
  //     street: ['', [Validators.required]],
  //     city: ['', [Validators.required]],
  //     cityName: ['', [Validators.required]]
  //   }),
  //   gender: ['male'],
  //   PasswordValidation: this.fb.group({
  //       password: ['', Validators.required],
  //       confirmPassword: ['', Validators.required]
  //     },{
  //       validator: ValidatePassword.MatchPassword // your validation method
  //     }
  //   ),
  //   addDynamicElement: this.fb.array([])
  // })

  // states = [
  //   {name: 'Arizona', abbrev: 'AZ'},
  //   {name: 'California', abbrev: 'CA'},
  //   {name: 'Colorado', abbrev: 'CO'},
  //   {name: 'New York', abbrev: 'NY'},
  //   {name: 'Pennsylvania', abbrev: 'PA'},
  // ];

  states = ['Asia', 'Europe'];

  // form = new FormGroup({
  //   state: new FormControl(),
  // });

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
        console.log(this.regionData);
      }
    });
  }

  myFunc(eventData: any) {
    console.log(eventData);
    this.countryData = eventData;
    console.log('My COUNTRY DATA: ');
    console.table(this.countryData);
  }

  onSelect(eventData: any) {
    console.log(eventData);
    // console.log(eventData.state);
    this.makeActive = false;
    this.getRegionData(eventData.state);
  }

  // onSubmit() {
  //   console.log(this.form);
  //   // console.log(this.form.controls.state.value);
  //   this.getRegionData(this.form.controls.state.value);
  // }

  showDataTable() {
    this.cowsMoo = true;
  }

  /*########### Form ###########*/
  // countryRegionForm = this.fb.group({
  //   cityName: ['', [Validators.required]]
  // });

  // Getter method to access formcontrols
  // get cityName() {
  //   return this.countryRegionForm.get('cityName');
  // }

  // Choose city using select dropdown
  // changeCity(e) {
  //   this.cityName.setValue(e.target.value, {
  //     onlySelf: true
  //   });
  // }

  // onSubmit() {
  //   alert(JSON.stringify(this.countryRegionForm.value));
  // }

}
