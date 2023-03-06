import { CharactersService } from './../../services/characters.service';
import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { MoviesService } from '../../services/movies.service';
import {
  MoviesActionTypes,
  FetchMoviesSuccess,
  FetchMoviesError,
  FetchMovieSuccess,
  FetchMovieError,
  FetchMovieCharactersSuccess,
  FetchMovieCharactersError,
  FetchCharacterSuccess,
  FetchCharacterError,
  FetchCharacterMoviesSuccess,
  FetchCharacterMoviesError,

} from '../actions/index';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
@Injectable()
export class MoviesEffects {
  constructor(private actions$: Actions,
    private moviesService: MoviesService,
    private charactersService: CharactersService) { }

  fetchMoviesList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(MoviesActionTypes.FetchMovies),
      switchMap(() =>
        this.moviesService.getMoviesList().pipe(
          map(data => new FetchMoviesSuccess(data)),
          catchError(err => of(new FetchMoviesError(err)))
        )
      )
    )
  });


  fetchMovie$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(MoviesActionTypes.FetchMovie),
        switchMap(() =>
          this.moviesService.getMovie(this.moviesService.selectedFilm.id).pipe(
            map(data =>
              new FetchMovieSuccess(data)
            ),
            catchError(err => of(new FetchMovieError(err)))
          )
        ))
  });

  fetchMovieCharacters$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(MoviesActionTypes.FetchMovieCharacters),
        switchMap(() =>
          this.charactersService.getCharactersByMovie(this.moviesService.selectedFilm).pipe(
            map(data => new FetchMovieCharactersSuccess(data)),
            catchError(err => of(new FetchMovieCharactersError(err)))
          )
        ))
  });

  fetchCharacter$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(MoviesActionTypes.FetchCharacter),
        switchMap(() =>
          this.charactersService.getCharacter(this.charactersService.selectedCharacter.id).pipe(
            map(data =>
              new FetchCharacterSuccess(data)
            ),
            catchError(err => of(new FetchCharacterError(err)))

          )
        ))
  });

  fetchCharacterMovies$ = createEffect(() => {
    return this.actions$
      .pipe(
        ofType(MoviesActionTypes.FetchCharacterMovies),
        switchMap(() =>
          this.moviesService.getMoviesByCharacter(this.charactersService.selectedCharacter).pipe(
            map(data => new FetchCharacterMoviesSuccess(data)),
            catchError(err => of(new FetchCharacterMoviesError(err)))
          )
        ))
  });



}

