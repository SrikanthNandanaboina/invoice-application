// typography.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css'],
})
export class TypographyComponent {
  @Input() variant: string = 'h1'; // Default variant is 'p'
  @Input() text: string = ''; // Default text is an empty string
  @Input() color: string = '#fff'; // Default text is an empty string
}
