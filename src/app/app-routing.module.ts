import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InvoiceDetailComponent } from './components/invoice-detail/invoice-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirect to the dashboard page by default
  { path: 'dashboard', component: DashboardComponent }, // Route for the invoice component
  { path: 'invoice-details/:id', component: InvoiceDetailComponent }, // Route for the invoice component
  // Add more routes for other components/pages as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
