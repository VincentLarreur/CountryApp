import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-as-country',
  templateUrl: './as-country.component.html',
  styles: [
    `
      li: {
        cursor: pointer;
      }
    `
  ]
})
export class AsCountryComponent {

  query: string = '';
  searchFailed: boolean = false;
  countries: Country[] = [];
  suggestedCountries: Country[] = [];
  showSuggested: boolean = false;

  constructor(private countryService: CountryService) { }

  search( query: string ): void {
    this.searchFailed = false;
    this.query = query;
    this.showSuggested = false;

    this.countryService.searchCountry(this.query).subscribe(
      countries => {
        this.countries = countries;
      }, (err) => {
        this.searchFailed = true;
        this.countries = [];
      }
    )
  }

  sugerences( query: string ): void {
    this.showSuggested = true;
    this.searchFailed = false;
    this.query = query;
    this.countryService.searchCountry(query).subscribe(
      countries => {
        this.suggestedCountries = countries.splice(0, 5);
      }, (err) => {
        this.suggestedCountries = [];
      }
    )
  }
}
