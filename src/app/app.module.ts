import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {BreezeBridgeAngularModule} from "breeze-bridge-angular";
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegularComponent } from './components/regular/regular.component';
import { WithResolveComponent } from './components/with-resolve/with-resolve.component';
import { WithBreezeAndResolveComponent } from './components/with-breeze-and-resolve/with-breeze-and-resolve.component';
import {WithResolveResolve} from "./components/with-resolve/with-resolve.resolve";

const routes: Routes = [{
    path: '',
    component: HomeComponent
  },
  {
    path: 'regular',
    component: RegularComponent
  },
  {
    path: 'withResolve',
    component: WithResolveComponent,
    resolve:{
      someName: WithResolveResolve
    }
  },
  {
    path: 'withResolve',
    component: WithBreezeAndResolveComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegularComponent,
    WithResolveComponent,
    WithBreezeAndResolveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BreezeBridgeAngularModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    WithResolveResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
