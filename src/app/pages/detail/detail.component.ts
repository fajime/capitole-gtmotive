import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MakeModels, MakeTypes } from '../../models';
import {
  selectMake,
  selectMakeSelectedModels,
  selectMakeSelectedTypes,
} from '../../store/make.selectors';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { getMakeDetailsModels, getMakeDetailsTypes, setMake } from '../../store/make.actions';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    RouterLink,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class DetailComponent {
  makeDetailMakesModels$: Observable<MakeModels[]>;
  makeDetailMakesTypes$: Observable<MakeTypes[]>;
  make$: Observable<string>;

  constructor(private store: Store) {
    this.makeDetailMakesModels$ = this.store.select(selectMakeSelectedModels);
    this.makeDetailMakesTypes$ = this.store.select(selectMakeSelectedTypes);
    this.make$ = this.store.select(selectMake);
  }

  clear() {
    this.store.dispatch(setMake({ make: '' }));
    this.store.dispatch(getMakeDetailsModels({ makeSelect: [] }));
    this.store.dispatch(getMakeDetailsTypes({ makeSelect: [] }));
  }
}




