import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
      label: 'Administrador',
      icon:'pi pi-fw pi-file',
      items: [
          {
              label: 'Terminos y Condiciones',
              icon:'pi pi-fw pi-flag',
              routerLink: 'admin/terminosCondiciones'
          },
          {
              label: 'Delete',
              icon:'pi pi-fw pi-trash'
          },
          {
              label: 'Export',
              icon:'pi pi-fw pi-external-link'
          }
      ]
      },
      {
      label: 'Modulo de transporte',
      icon:'pi pi-fw pi-pencil',
      items: [
          {
              label: 'Cotización',
              icon:'pi pi-fw pi-align-left'
          },
          {
              label: 'Programación',
              icon:'pi pi-fw pi-align-right'
          },
          {
              label: 'Viajes en curso',
              icon:'pi pi-fw pi-align-center'
          },
          
      ]
      },
      {
      label: 'Informes',
      icon:'pi pi-fw pi-user',
      items: [
          {
              label: 'New',
              icon:'pi pi-fw pi-user-plus',

          },
          {
              label: 'Delete',
              icon:'pi pi-fw pi-user-minus',
          },
          {
              label: 'Search',
              icon:'pi pi-fw pi-users',
            //   items: [
            //       {
            //       label: 'Filter',
            //       icon:'pi pi-fw pi-filter',
            //       items: [
            //           {
            //               label: 'Print',
            //               icon:'pi pi-fw pi-print'
            //           }
            //       ]
            //       },
            //       {
            //       icon:'pi pi-fw pi-bars',
            //       label: 'List'
            //       }
            //   ]
          }
      ]
      },
      {
      label: 'Modulo financiero',
      icon:'pi pi-fw pi-calendar',
      items: [
          {
              label: 'Edit',
              icon:'pi pi-fw pi-pencil',
            //   items: [
            //       {
            //       label: 'Save',
            //       icon:'pi pi-fw pi-calendar-plus'
            //       },
            //       {
            //       label: 'Delete',
            //       icon:'pi pi-fw pi-calendar-minus'
            //       }
            //   ]
          },
          {
              label: 'Archieve',
              icon:'pi pi-fw pi-calendar-times',
              items: [
                  {
                  label: 'Remove',
                  icon:'pi pi-fw pi-calendar-minus'
                  }
              ]
          }
      ]
      }
  ]
 }}

