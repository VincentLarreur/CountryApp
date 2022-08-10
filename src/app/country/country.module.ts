import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AsCapitalComponent } from './pages/as-capital/as-capital.component';
import { AsCountryComponent } from './pages/as-country/as-country.component';
import { AsRegionComponent } from './pages/as-region/as-region.component';
import { SeeCountryComponent } from './pages/see-country/see-country.component';
import { RouterModule } from '@angular/router';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';



@NgModule({
  declarations: [
    AsCapitalComponent,
    AsCountryComponent,
    AsRegionComponent,
    SeeCountryComponent,
    CountryTableComponent,
    CountryInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    AsCapitalComponent,
    AsCountryComponent,
    AsRegionComponent,
    SeeCountryComponent
  ]
})
export class CountryModule { }
