import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-button',
  templateUrl: './dynamic-button.component.html',
  styleUrls: ['./dynamic-button.component.css']
})
export class DynamicButtonComponent {
  @Input() text: string = '';
  @Input() color: string = 'primary';
  @Input() target?: string;

  @Output() onClick = new EventEmitter<void>();

  handleClick(event: Event) {
    if (!this.target) {
      this.onClick.emit();
    }
  }
}
