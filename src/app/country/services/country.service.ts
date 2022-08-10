import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl: string = 'https://restcountries.com/v2';

  get params() {
    return new HttpParams().set('fields', 'name,capital,alpha2Code,flags,population,region');
  }

  constructor( private http: HttpClient ) { }

  searchCountry(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${query}`;

    return this.http.get<Country[]>(url, {params: this.params});
  }

  searchUsingCapital(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${query}`;

    return this.http.get<Country[]>(url, {params: this.params});
  }

  searchUsinRegion(query: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${query}`;

    return this.http.get<Country[]>(url, {params: this.params});
  }

  getCountryByCode(code: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${code}`;

    return this.http.get<Country>(url);
  }
}
