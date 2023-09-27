import { Component, ViewChild } from '@angular/core';
import { Invoice } from 'src/app/models/invoice.model';
import { DashboardService } from 'src/app/services/dashboard.service';
import { SidebarService } from 'src/app/services/sidebar.service';
import { ItemListComponent } from '../item-list/item-list.component';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css'],
})
export class NewInvoiceComponent {
  @ViewChild(ItemListComponent) itemList: ItemListComponent | undefined;

  constructor(
    private sidebarService: SidebarService,
    private dashboardService: DashboardService
  ) {}

  billFrom: {
    streetAddress: string;
    city: string;
    postCode: string;
    country: string;
  } = {
    streetAddress: '',
    city: '',
    postCode: '',
    country: '',
  };

  billTo: {
    clientName: string;
    clientEmail: string;
    streetAddress: string;
    city: string;
    postCode: string;
    country: string;
  } = {
    clientName: '',
    clientEmail: '',
    streetAddress: '',
    city: '',
    postCode: '',
    country: '',
  };
  selectedDate: string | Date | undefined;
  selectedOption: string | undefined;
  description: string | undefined;
  paymentTerms: number | undefined;

  collectItemListData(): any[] {
    if (this.itemList) {
      return this.itemList.getData(); // Assuming ItemListComponent has a getData() method
    } else {
      return [];
    }
  }

  onOptionSelected(event: any) {
    this.selectedOption = event.target.value;
  }

  onDateSelected(event: any) {
    this.selectedDate = event.target.value;
  }

  discard() {
    this.sidebarService.toggle();
  }

  save(type: string) {
    const items = this.collectItemListData();

    const newInvoice: Invoice = {
      id: this.generateRandomID(), // Generate a unique ID or use any other logic
      createdAt: new Date(this.selectedDate || ''), // Set the creation date
      paymentDue: this.getPaymentDue(this.paymentTerms || 1), // Set the payment due date
      description: this.description, // Get the description from your form
      paymentTerms: this.paymentTerms, // Get payment terms from your form
      clientName: this.billTo.clientName, // Get client name from your form
      clientEmail: this.billTo.clientEmail, // Get client email from your form
      status: type, // Set the status as 'draft'
      senderAddress: this.billFrom, // Get sender address from your form
      clientAddress: this.billTo, // Get client address from your form
      items, // Populate this with your item data
      total: items.reduce((a, ele) => a + ele.total, 0), // Calculate the total
    };
    // Add the new invoice to the service
    this.dashboardService.addInvoice(newInvoice);
    this.sidebarService.toggle();
  }

  getPaymentDue(days: number) {
    // Get the current date
    const currentDate = new Date(this.selectedDate || '');

    // Add one day to the current date
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + days);

    // Format the date as "YYYY-MM-DD"
    const formattedDate =
      nextDay.getFullYear() +
      '-' +
      String(nextDay.getMonth() + 1).padStart(2, '0') +
      '-' +
      String(nextDay.getDate()).padStart(2, '0');

    return formattedDate;
  }

  generateRandomID(): string {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomLetters = `${letters.charAt(
      Math.floor(Math.random() * letters.length)
    )}${letters.charAt(Math.floor(Math.random() * letters.length))}`;
    const randomNumbers = Math.floor(1000 + Math.random() * 9000);
    return `${randomLetters}${randomNumbers}`;
  }
}
