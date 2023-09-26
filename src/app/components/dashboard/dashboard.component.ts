import * as moment from 'moment';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  invoices: any[] = []; // Replace 'any[]' with the actual invoice data type

  // Other properties and methods as needed
  constructor(private router: Router) {}

  ngOnInit() {
    // Initialize invoices with sample data
    this.invoices = [
      {
        id: 'RT3080',
        createdAt: '2021-08-18',
        paymentDue: '2021-08-19',
        description: 'Re-branding',
        paymentTerms: 1,
        clientName: 'Jensen Huang',
        clientEmail: 'jensenh@mail.com',
        status: 'paid',
        senderAddress: {
          street: '19 Union Terrace',
          city: 'London',
          postCode: 'E1 3EZ',
          country: 'United Kingdom',
        },
        clientAddress: {
          street: '106 Kendell Street',
          city: 'Sharrington',
          postCode: 'NR24 5WQ',
          country: 'United Kingdom',
        },
        items: [
          {
            name: 'Brand Guidelines',
            quantity: 1,
            price: 1800.9,
            total: 1800.9,
          },
        ],
        total: 1800.9,
      },
      {
        id: 'XM9141',
        createdAt: '2021-08-21',
        paymentDue: '2021-09-20',
        description: 'Graphic Design',
        paymentTerms: 30,
        clientName: 'Alex Grim',
        clientEmail: 'alexgrim@mail.com',
        status: 'pending',
        senderAddress: {
          street: '19 Union Terrace',
          city: 'London',
          postCode: 'E1 3EZ',
          country: 'United Kingdom',
        },
        clientAddress: {
          street: '84 Church Way',
          city: 'Bradford',
          postCode: 'BD1 9PB',
          country: 'United Kingdom',
        },
        items: [
          {
            name: 'Banner Design',
            quantity: 1,
            price: 156.0,
            total: 156.0,
          },
          {
            name: 'Email Design',
            quantity: 2,
            price: 200.0,
            total: 400.0,
          },
        ],
        total: 556.0,
      },
      {
        id: 'RG0314',
        createdAt: '2021-09-24',
        paymentDue: '2021-10-01',
        description: 'Website Redesign',
        paymentTerms: 7,
        clientName: 'John Morrison',
        clientEmail: 'jm@myco.com',
        status: 'paid',
        senderAddress: {
          street: '19 Union Terrace',
          city: 'London',
          postCode: 'E1 3EZ',
          country: 'United Kingdom',
        },
        clientAddress: {
          street: '79 Dover Road',
          city: 'Westhall',
          postCode: 'IP19 3PF',
          country: 'United Kingdom',
        },
        items: [
          {
            name: 'Website Redesign',
            quantity: 1,
            price: 14002.33,
            total: 14002.33,
          },
        ],
        total: 14002.33,
      },
      {
        id: 'RT2080',
        createdAt: '2021-10-11',
        paymentDue: '2021-10-12',
        description: 'Logo Concept',
        paymentTerms: 1,
        clientName: 'Alysa Werner',
        clientEmail: 'alysa@email.co.uk',
        status: 'pending',
        senderAddress: {
          street: '19 Union Terrace',
          city: 'London',
          postCode: 'E1 3EZ',
          country: 'United Kingdom',
        },
        clientAddress: {
          street: '63 Warwick Road',
          city: 'Carlisle',
          postCode: 'CA20 2TG',
          country: 'United Kingdom',
        },
        items: [
          {
            name: 'Logo Sketches',
            quantity: 1,
            price: 102.04,
            total: 102.04,
          },
        ],
        total: 102.04,
      },
      {
        id: 'AA1449',
        createdAt: '2021-10-7',
        paymentDue: '2021-10-14',
        description: 'Re-branding',
        paymentTerms: 7,
        clientName: 'Mellisa Clarke',
        clientEmail: 'mellisa.clarke@example.com',
        status: 'pending',
        senderAddress: {
          street: '19 Union Terrace',
          city: 'London',
          postCode: 'E1 3EZ',
          country: 'United Kingdom',
        },
        clientAddress: {
          street: '46 Abbey Row',
          city: 'Cambridge',
          postCode: 'CB5 6EG',
          country: 'United Kingdom',
        },
        items: [
          {
            name: 'New Logo',
            quantity: 1,
            price: 1532.33,
            total: 1532.33,
          },
          {
            name: 'Brand Guidelines',
            quantity: 1,
            price: 2500.0,
            total: 2500.0,
          },
        ],
        total: 4032.33,
      },
      {
        id: 'TY9141',
        createdAt: '2021-10-01',
        paymentDue: '2021-10-31',
        description: 'Landing Page Design',
        paymentTerms: 30,
        clientName: 'Thomas Wayne',
        clientEmail: 'thomas@dc.com',
        status: 'pending',
        senderAddress: {
          street: '19 Union Terrace',
          city: 'London',
          postCode: 'E1 3EZ',
          country: 'United Kingdom',
        },
        clientAddress: {
          street: '3964  Queens Lane',
          city: 'Gotham',
          postCode: '60457',
          country: 'United States of America',
        },
        items: [
          {
            name: 'Web Design',
            quantity: 1,
            price: 6155.91,
            total: 6155.91,
          },
        ],
        total: 6155.91,
      },
      {
        id: 'FV2353',
        createdAt: '2021-11-05',
        paymentDue: '2021-11-12',
        description: 'Logo Re-design',
        paymentTerms: 7,
        clientName: 'Anita Wainwright',
        clientEmail: '',
        status: 'draft',
        senderAddress: {
          street: '19 Union Terrace',
          city: 'London',
          postCode: 'E1 3EZ',
          country: 'United Kingdom',
        },
        clientAddress: {
          street: '',
          city: '',
          postCode: '',
          country: '',
        },
        items: [
          {
            name: 'Logo Re-design',
            quantity: 1,
            price: 3102.04,
            total: 3102.04,
          },
        ],
        total: 3102.04,
      },
    ];
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
