import { Component } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private sidebarService: SidebarService) {}

  get isInvoiceOpen() {
    return this.sidebarService.isOpen$;
  }
}
