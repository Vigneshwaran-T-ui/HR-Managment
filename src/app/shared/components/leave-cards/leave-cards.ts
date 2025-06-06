import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-leave-cards',
  imports: [CommonModule],
  templateUrl: './leave-cards.html',
  styleUrl: './leave-cards.css',
})
export class LeaveCards {
  @Input() count: number = 0;
  @Input() label: string = '';
  @Input() color: string = '#000000'; // Accepts hex code or bootstrap color (e.g. #0d6efd)

  @Output() cardClick = new EventEmitter<void>();

  handleClick() {
    this.cardClick.emit();
  }
}
