import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { MatAccordion } from '@angular/material/expansion';
import { PAGES_LINKS } from './pages-menu';

@Component({
  selector: 'ngx-pages',
  styleUrls: ['./pages.component.scss'],
  templateUrl: './pages.component.html',
})

export class PagesComponent {
  links = PAGES_LINKS

  @ViewChild(MatAccordion) accordion!: MatAccordion;

}
