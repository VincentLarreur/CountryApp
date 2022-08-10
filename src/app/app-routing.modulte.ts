import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AsCapitalComponent } from "./country/pages/as-capital/as-capital.component";
import { AsCountryComponent } from "./country/pages/as-country/as-country.component";
import { AsRegionComponent } from "./country/pages/as-region/as-region.component";
import { SeeCountryComponent } from "./country/pages/see-country/see-country.component";

const routes: Routes= [
    {
        path: '',
        component: AsCountryComponent,
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: AsRegionComponent,
    },
    {
        path: 'capital',
        component: AsCapitalComponent,
    },
    {
        path: 'country/:idCountry',
        component: SeeCountryComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}