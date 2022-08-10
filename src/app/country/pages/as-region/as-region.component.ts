import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-as-region',
  templateUrl: './as-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
      }
    `
  ]
})
export class AsRegionComponent {

  regions: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];

  regionActiva: string = '';
  searchFailed: boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  getClase(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  search( query: string ): void {
    if (query === this.regionActiva) {return;}

    this.searchFailed = false;
    this.regionActiva = query;

    this.countryService.searchUsinRegion(this.regionActiva).subscribe(
      countries => {
        this.countries = countries;
      }, (err) => {
        this.searchFailed = true;
        this.countries = [];
      }
    )
  }

}
