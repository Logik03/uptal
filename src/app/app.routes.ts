import { Routes } from '@angular/router';
import { CandidateListComponent } from './components/candidate-list/candidate-list.component';
import { CandidateBoardComponent } from './components/candidate-board/candidate-board.component';

export const routes: Routes = [

    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    {
        path: 'dashboard',
        component: CandidateBoardComponent
      }
];
