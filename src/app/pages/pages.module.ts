import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { MaterialModule } from 'src/material.module';
import { CommonModule } from '@angular/common';
import { ShipsyOrdersModule } from './shipsyorders/shipsyorders.module';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    MaterialModule,
    CommonModule,
    ShipsyOrdersModule
  ],
  declarations: [
    PagesComponent,
    HeaderComponent
  ],
})
export class PagesModule {
}
