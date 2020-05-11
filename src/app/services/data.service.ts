import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Region } from './models';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private baseUrl = 'https://restcountries.eu/rest/v2/region';

  constructor(private http: HttpClient) { }

  getCountryRegionData(region: string): Observable<any[]> {
    return this.http.get<Region[]>(this.baseUrl + '/' + region)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {

    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {

      errorMessage = `An error occurred: ${err.error.message}`;
    } else {

      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

}
