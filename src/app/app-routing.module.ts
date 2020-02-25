import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CarlistComponent } from './carlist/carlist.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
	{ path:"",component: CarlistComponent }, { path: "contact",component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
