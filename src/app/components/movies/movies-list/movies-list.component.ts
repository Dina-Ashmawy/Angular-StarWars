import { FetchMovies } from './../../../state/actions/index';
import { Movie } from './../../../models/movie';
import { State, getMovies } from './../../../state/selectors/index';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  movies$: Observable<Movie[]> = this.store.pipe(select(getMovies));
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(new FetchMovies());
  }
}
