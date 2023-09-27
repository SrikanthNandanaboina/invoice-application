import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice.model';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  private editingInvoice: Invoice | undefined;

  constructor() {}

  setEditingInvoice(invoice: Invoice) {
    this.editingInvoice = { ...invoice }; // Create a copy of the invoice data
  }

  getEditingInvoice() {
    return this.editingInvoice;
  }

  removeEditingInvoice() {
    this.editingInvoice = undefined;
  }
}
