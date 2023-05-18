import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { PanelMenuModule } from 'primeng/panelmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import {ToolbarModule} from 'primeng/toolbar'; 
// import {SidebarModule} from 'primeng/sidebar'; 
// import { ButtonModule } from 'primeng/button';
// import {ListboxModule} from 'primeng/listbox';
// import {SlideMenuModule} from 'primeng/slidemenu';



import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MenuComponent,
    HeaderComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    PanelMenuModule,
    BrowserAnimationsModule,

    // ToolbarModule,
    // SidebarModule,
    // ButtonModule,
    // ListboxModule,
    // SlideMenuModule,

   
    ReactiveFormsModule
  ],
  exports: [
    MenuComponent,
    HeaderComponent
  ]
})
export class CoreModule { 


}

