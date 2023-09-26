import { Component } from '@angular/core';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.css'],
})
export class NewInvoiceComponent {
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
  selectedOption: string | undefined;

  onOptionSelected(event: any) {
    this.selectedOption = event.target.value;
    console.log('Selected option:', this.selectedOption);
  }

  onDateSelected(event: any) {
    const selectedDate = event.target.value;
    console.log('Selected date:', selectedDate);
  }
}
