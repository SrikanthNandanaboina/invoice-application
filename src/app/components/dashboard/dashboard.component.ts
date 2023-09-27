import * as moment from 'moment';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  invoices: any[] = []; // Replace 'any[]' with the actual invoice data type

  // Other properties and methods as needed
  constructor(
    private router: Router,
    private sidebarService: SidebarService,
    private dashboardService: DashboardService
  ) {}

  ngOnInit() {
    // Initialize invoices with sample data
    this.dashboardService.invoices$.subscribe((invoices) => {
      console.log(invoices);
      this.invoices = invoices;
    });
  }

  get invoicesData() {
    return this.dashboardService.invoices$;
  }

  toggleInvoice() {
    this.sidebarService.toggle();
  }

  createNewInvoice() {}

  // Function to generate a random ID for a new invoice
  generateRandomID(): string {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomLetters = `${letters.charAt(
      Math.floor(Math.random() * letters.length)
    )}${letters.charAt(Math.floor(Math.random() * letters.length))}`;
    const randomNumbers = Math.floor(1000 + Math.random() * 9000);
    return `${randomLetters}${randomNumbers}`;
  }

  // Function to create a new draft invoice
  createDraftInvoice(): void {
    const newInvoice = {
      id: this.generateRandomID(),
      // Other properties for the new draft invoice
      status: 'draft',
    };
    this.invoices.push(newInvoice);
  }

  // Function to save changes to an invoice
  saveChanges(invoice: any): void {
    // // Validate and save changes to the invoice
    // if (/* Validation logic */) {
    //   invoice.status = 'pending';
    //   // Save changes to the invoice
    // }
  }

  // Function to mark an invoice as paid
  markAsPaid(invoice: any): void {
    invoice.status = 'paid';
    // Update the invoice status
  }

  openInvoiceDetail(invoiceId: string) {
    // Navigate to the invoice details page with the selected invoice ID
    this.router.navigate(['/invoice-details', invoiceId]);
  }

  // Function to delete an invoice (with confirmation modal)
  deleteInvoice(invoice: any): void {
    // Show confirmation modal
    const confirmDelete = confirm(
      'Are you sure you want to delete this invoice?'
    );
    if (confirmDelete) {
      // Delete the invoice
      const index = this.invoices.indexOf(invoice);
      if (index !== -1) {
        this.invoices.splice(index, 1);
      }
    }
  }

  formatDate(date: Date, format: string): string {
    return moment(date).format(format);
  }

  getFixedValue(val: number) {
    return val.toFixed(2);
  }

  changeDotColor(status: string) {
    switch (status) {
      case 'paid':
        return '#91ff91';
      case 'pending':
        return 'red';
      default:
        return 'white';
    }
  }

  getClassObject(status: string) {
    switch (status) {
      case 'paid':
        return 'green-background';
      case 'pending':
        return 'red-background';
      default:
        return 'white-background';
    }
  }
}
