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
    { id: 2, name: 'Lamar Demet', location: 'Saint Augustine', phone: '282 645 1513', rating: 5.0, status: 'applied', isNew: true },
    { id: 3, name: 'Lamar Demet', location: 'Saint Augustine', phone: '282 645 1513', rating: 5.0, status: 'applied', isNew: true },
    { id: 4, name: 'Lamar Demet', location: 'Saint Augustine', phone: '282 645 1513', rating: 5.0, status: 'applied', isNew: true },
    { id: 5, name: 'Lamar Demet', location: 'Saint Augustine', phone: '282 645 1513', rating: 5.0, status: 'applied', isNew: true },
    { id: 6, name: 'Lamar Demet', location: 'Saint Augustine', phone: '282 645 1513', rating: 5.0, status: 'applied', isNew: true }
  ];

  shortlisted: Candidate[] = [
    { id: 7, name: 'Torey Courtes', location: 'Bogota', phone: '350 947 8496', rating: 3.0, status: 'shortlisted', isNew: true },
    { id: 8, name: 'Torey Courtes', location: 'Bogota', phone: '350 947 8496', rating: 3.0, status: 'shortlisted', isNew: true },
    { id: 9, name: 'Torey Courtes', location: 'Bogota', phone: '350 947 8496', rating: 3.0, status: 'shortlisted', isNew: true },
    { id: 10, name: 'Torey Courtes', location: 'Bogota', phone: '350 947 8496', rating: 3.0, status: 'shortlisted', isNew: true },
    { id: 11, name: 'Torey Courtes', location: 'Bogota', phone: '350 947 8496', rating: 3.0, status: 'shortlisted', isNew: true }
  ];

  interview: Candidate[] = [
    { id: 12, name: 'Davina Olkowicz', location: 'Dongpu', phone: '214 894 2712', rating: 4.0, status: 'interview', isNew: false },
    { id: 13, name: 'Davina Olkowicz', location: 'Dongpu', phone: '214 894 2712', rating: 4.0, status: 'interview', isNew: false },
    { id: 14, name: 'Davina Olkowicz', location: 'Dongpu', phone: '214 894 2712', rating: 4.0, status: 'interview', isNew: false },
    { id: 15, name: 'Davina Olkowicz', location: 'Dongpu', phone: '214 894 2712', rating: 4.0, status: 'interview', isNew: false }
  ];

  // drop(event: CdkDragDrop<Candidate[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(
  //       event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex
  //     );
  //   }
  // }
  drop(event: CdkDragDrop<Candidate[]>) {
    console.log("Drop event:", event); 
    if (event.previousContainer === event.container) {
      // Moving item within the same list
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Transferring item between lists
      const previousList = event.previousContainer.data;
      const targetList = event.container.data;
      
      transferArrayItem(previousList, targetList, event.previousIndex, event.currentIndex);
  
      // Update the lists manually since Angular may not detect changes
      this.applied = [...this.applied];
      this.shortlisted = [...this.shortlisted];
      this.interview = [...this.interview];
    }
  }
  
}
