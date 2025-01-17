import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './../../app.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { Make } from './../../models';
import { Store } from '@ngrx/store';
import { setParamSearch } from './../../store/make.actions';
import {
  selectFilterMakes,
  selectParamSearch,
} from './../../store/make.selectors';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ScrollingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  makes$: Observable<Make[]>;
  paramSearch$: Observable<string>;

  constructor(
    private appService: AppService,
    private store: Store,
    private _router: Router
  ) {
    this.appService.getMakes();
    this.makes$ = this.store.select(selectFilterMakes);
    this.paramSearch$ = this.store.select(selectParamSearch);
  }

  selectedMake(make: Make) {
    this.appService.getMakeDetail(make);
    this._router.navigate(['detail']);
  }

  filterList(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this.store.dispatch(setParamSearch({ param: newValue }));
  }
}
