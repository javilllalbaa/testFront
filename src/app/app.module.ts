import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { reducers } from './redux/index';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './redux/products/product.effect';
import { UserEffects } from './redux/user/user.effect';
import { LayoutComponent } from './website/home/components/layout/layout.component';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ProductEffects, UserEffects]),
    NgbModule
  ],
  providers: [
    { provide: 'API_URL', useValue: environment.api }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
