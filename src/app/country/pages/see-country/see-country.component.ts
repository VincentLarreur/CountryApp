import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html'
})
export class SeeCountryComponent implements OnInit {

  country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe( params => {
        this.countryService.getCountryByCode(params['idCountry']).subscribe
        console.log(params['idCountry']);
      });

    this.activatedRoute.params
      .pipe(
        switchMap( (param) => this.countryService.getCountryByCode(param['idCountry']))
      )
      .subscribe( country => {
        this.country = country;
      })
  }

}
