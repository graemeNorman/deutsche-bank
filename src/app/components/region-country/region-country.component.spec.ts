import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionCountryComponent } from './region-country.component';

describe('RegionCountryComponent', () => {
  let component: RegionCountryComponent;
  let fixture: ComponentFixture<RegionCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
