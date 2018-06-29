import {Routes,RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {AppComponent} from "../app.component";
import { HomeComponent } from "../home/home.component";


const appRoutes = [
  {path: "", component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: [],
  declarations: []
})
export class RoutingModule {
}
