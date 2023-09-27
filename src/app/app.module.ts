import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InvoiceDetailComponent } from './components/invoice-detail/invoice-detail.component';
import { NewInvoiceComponent } from './components/new-invoice/new-invoice.component';
import { ModalComponent } from './components/modal/modal.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TypographyComponent } from './typography/typography.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InvoiceDetailComponent,
    NewInvoiceComponent,
    ModalComponent,
    SidebarComponent,
    TypographyComponent,
    ItemListComponent,
  ],
  imports: [CommonModule, BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
