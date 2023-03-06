import { FetchCharacter, FetchCharacterMovies } from './../../../state/actions/index';
import { MoviesService } from './../../../services/movies.service';
import { State } from './../../../state/reducers/index';
import { Movie } from './../../../models/movie';
import { getCharacter, getCharacterMovies } from './../../../state/selectors/index';
import { Character } from './../../../models/characters';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {
  character$: Observable<Character> = this.store.pipe(select(getCharacter));
  films$: Observable<Movie[]> = this.store.pipe(select(getCharacterMovies));
  constructor(
    private store: Store<State>,
    private router: Router,
    private movieService: MoviesService) { }

  ngOnInit(): void {
    this.store.dispatch(new FetchCharacter());
    this.store.dispatch(new FetchCharacterMovies());
  }

  NavigateToFilm(movie: Movie) {
    this.movieService.selectedFilm = movie;
    this.router.navigate(['/movies', movie.id]);
  }
}
