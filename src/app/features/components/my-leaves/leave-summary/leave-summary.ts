import { Component } from '@angular/core';
import { LeaveCards } from '../../../../shared/components/leave-cards/leave-cards';
import { CommonModule } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-leave-summary',
  standalone: true,
  imports: [LeaveCards, CommonModule],
  templateUrl: './leave-summary.html',
  styleUrl: './leave-summary.css',
})
export class LeaveSummary {
  leaveSummary = [
    {
      count: 16,
      label: 'Casual Leaves',
      color: '#7367f0',
      taken: 8,
      scheduled: 5,
    },
    { count: 12, label: 'Overtime', color: '#28c76f', taken: 7, scheduled: 3 },
    { count: 2, label: 'Comp Off', color: '#00cfe8', taken: 1, scheduled: 1 },
    {
      count: 12,
      label: 'Loss of Pay',
      color: '#ea5455',
      taken: 12,
      scheduled: 0,
    },
  ];

  selectedLeave: any;

  constructor(private modalService: NgbModal) {}

  openModal(content: any, leave: any) {
    this.selectedLeave = leave;
    this.modalService.open(content, { centered: true });
  }
}
