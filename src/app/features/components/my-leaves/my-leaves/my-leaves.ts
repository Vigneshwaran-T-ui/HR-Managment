import { Component } from '@angular/core';
import { LeaveHistory } from '../leave-history/leave-history';
import { LeaveSummary } from '../leave-summary/leave-summary';
import { LeaveCards } from '../../../../shared/components/leave-cards/leave-cards';

@Component({
  selector: 'app-my-leaves',
  imports: [LeaveHistory, LeaveSummary],
  templateUrl: './my-leaves.html',
  styleUrl: './my-leaves.css',
})
export class MyLeaves {}
