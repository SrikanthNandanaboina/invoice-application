import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from 'src/app/models/invoice.model';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-invoice-detail',
  templateUrl: './invoice-detail.component.html',
  styleUrls: ['./invoice-detail.component.css'],
})
export class InvoiceDetailComponent implements OnInit {
  invoices: any[] = []; // Replace 'any[]' with the actual invoice data type
  invoice: any = {}; // Initialize with an empty object
  actions = [
    {
      name: 'Edit',
      class: 'edit',
      background: '#252945',
      action: () => {},
    },
    {
      name: 'Delete',
      class: 'delete',
      background: '#ec5757',
      action: (ele: any) => {
        this.dashboardService.removeInvoice(ele.id);
        this.router.navigate(['/']);
      },
    },
    {
      name: 'Mark as Paid',
      class: 'markPaid',
      background: '#7c5dfa',
      action: (invoice: Invoice) => {
        invoice.status = 'paid';
        this.dashboardService.updateInvoice(invoice);
      },
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dashboardService: DashboardService
  ) {}

  ngOnInit(): void {
    this.dashboardService.invoices$.subscribe((invoices) => {
      this.invoices = invoices;

      this.route.params.subscribe((params) => {
        const invoiceId = params['id'];

        // Fetch the invoice data based on the ID (you can use a service)
        this.invoice = this.getInvoiceById(invoiceId); // Replace with your actual data fetching logic

        if (['paid'].includes(this.invoice.status)) this.actions.pop();
      });
    });
  }

  editInvoice() {
    // Navigate to the invoice edit page with the current invoice ID
    this.router.navigate(['/edit-invoice', this.invoice.id]);
  }

  deleteInvoice() {
    // Display a delete confirmation modal (implement this logic)
    // If confirmed, delete the invoice (implement this logic)
  }

  markAsPaid() {
    // Mark the invoice as paid (implement this logic)
  }

  get invoicesData() {
    return this.dashboardService.invoices$;
  }

  private getInvoiceById(invoiceId: string): any {
    // Find the invoice with the matching ID
    const foundInvoice = this.invoices.find(
      (invoice) => invoice.id === invoiceId
    );

    // You may want to handle cases where the invoice is not found
    if (!foundInvoice) {
      // Handle the not found case, e.g., redirect or show an error message
      // For now, we return null to indicate that the invoice was not found
      return null;
    }

    // Return the found invoice
    return foundInvoice;
  }

  goBack() {
    // Navigate back to the dashboard
    this.router.navigate(['/dashboard']);
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
