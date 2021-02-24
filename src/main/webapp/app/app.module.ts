import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Jhipsterv2SharedModule } from 'app/shared/shared.module';
import { Jhipsterv2CoreModule } from 'app/core/core.module';
import { Jhipsterv2AppRoutingModule } from './app-routing.module';
import { Jhipsterv2HomeModule } from './home/home.module';
import { Jhipsterv2EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Jhipsterv2SharedModule,
    Jhipsterv2CoreModule,
    Jhipsterv2HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Jhipsterv2EntityModule,
    Jhipsterv2AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class Jhipsterv2AppModule {}
