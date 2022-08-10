import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-as-capital',
  templateUrl: './as-capital.component.html'
})
export class AsCapitalComponent {

  query: string = '';
  searchFailed: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  search( query: string ): void {
    this.searchFailed = false;
    this.query = query;

    this.countryService.searchUsingCapital(this.query).subscribe(
      countries => {
        this.countries = countries;
      }, (err) => {
        this.searchFailed = true;
        this.countries = [];
      }
    )
  }

}
