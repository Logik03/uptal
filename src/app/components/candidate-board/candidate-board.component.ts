import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Candidate } from '../../core/models/candidate-model';
import { CandidateListComponent } from '../candidate-list/candidate-list.component';

@Component({
  selector: 'app-candidate-board',
  standalone: true,
  imports: [
    CandidateListComponent,
  ],
  templateUrl: './candidate-board.component.html',
  styleUrl: './candidate-board.component.scss'
})
export class CandidateBoardComponent {

  applied: Candidate[] = [
    { id: 1, name: 'Silvano Scally', location: 'New York', phone: '561 682 5290', rating: 4.0, status: 'applied', isNew: true },
    { id: 2, name: 'Lamar Demet', location: 'Saint Augustine', phone: '282 645 1513', rating: 5.0, status: 'applied', isNew: true }
  ];

  shortlisted: Candidate[] = [
    { id: 3, name: 'Torey Courtes', location: 'Bogota', phone: '350 947 8496', rating: 3.0, status: 'shortlisted', isNew: true }
  ];

  interview: Candidate[] = [
    { id: 4, name: 'Davina Olkowicz', location: 'Dongpu', phone: '214 894 2712', rating: 4.0, status: 'interview', isNew: false }
  ];

  drop(event: CdkDragDrop<Candidate[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
