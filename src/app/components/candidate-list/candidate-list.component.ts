import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Candidate } from '../../core/models/candidate-model';
import { CandidateCardComponent} from '../candidate-card/candidate-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-candidate-list',
  standalone: true,
  imports: [
    DragDropModule,
    CandidateCardComponent,
    NgFor
  ],
  templateUrl: './candidate-list.component.html',
  styleUrl: './candidate-list.component.scss'
})
export class CandidateListComponent {

  @Input() candidates: Candidate[] = [];
  @Input() title!: string;
  @Output() dropped = new EventEmitter<CdkDragDrop<Candidate[]>>();

  drop(event: CdkDragDrop<Candidate[]>) {
    this.dropped.emit(event);
  }
}
