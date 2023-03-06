import { Action } from '@ngrx/store';
import { Movie } from '../../models/movie';
import { HttpErrorResponse } from '@angular/common/http';

export const enum MoviesActionTypes {

  FetchMovies = '[Movies] Fetch Movies',
  FetchMoviesSuccess = '[Movies] Load Movies Success',
  FetchMoviesError = '[Movies] Load Movies Error',
  FetchMovie = '[Movie] Fetch Movie ',
  FetchMovieSuccess = '[Movie] Load Movie Success',
  FetchMovieError = '[Movie] Load Movie Error',
  FetchMovieCharacters = '[Movie] Fetch Movie Characters',
  FetchMovieCharactersSuccess = '[Movie] Load Movie Characters Success',
  FetchMovieCharactersError = '[Movie] Load Movie Characters Error',
  FetchCharacter = '[Character] Fetch Character ',
  FetchCharacterSuccess = '[Character] Load Character Success',
  FetchCharacterError = '[Character] Load Character Error',
  FetchCharacterMovies = '[Character] Fetch Character Movies ',
  FetchCharacterMoviesSuccess = '[Character] Load Character Movies Success',
  FetchCharacterMoviesError = '[Character] Load Character Movies Error',
}

export class FetchMovies implements Action {
  readonly type = MoviesActionTypes.FetchMovies;
}

export class FetchMoviesSuccess implements Action {
  readonly type = MoviesActionTypes.FetchMoviesSuccess;

  constructor(public payload: Movie[]) { }
}

export class FetchMoviesError implements Action {
  readonly type = MoviesActionTypes.FetchMoviesError;
  constructor(public payload: HttpErrorResponse) { }
}
export class FetchMovie implements Action {
  readonly type = MoviesActionTypes.FetchMovie;
}

export class FetchMovieSuccess implements Action {
  readonly type = MoviesActionTypes.FetchMovieSuccess;
  constructor(public payload: Movie) { }
}

export class FetchMovieError implements Action {
  readonly type = MoviesActionTypes.FetchMovieError;

  constructor(public payload: HttpErrorResponse) { }
}

export class FetchMovieCharacters implements Action {
  readonly type = MoviesActionTypes.FetchMovieCharacters;
}

export class FetchMovieCharactersSuccess implements Action {
  readonly type = MoviesActionTypes.FetchMovieCharactersSuccess;
  constructor(public payload: any) { }
}

export class FetchMovieCharactersError implements Action {
  readonly type = MoviesActionTypes.FetchMovieCharactersError;
  constructor(public payload: HttpErrorResponse) { }
}

export class FetchCharacter implements Action {
  readonly type = MoviesActionTypes.FetchCharacter;
  constructor() { }
}

export class FetchCharacterSuccess implements Action {
  readonly type = MoviesActionTypes.FetchCharacterSuccess;
  constructor(public payload: any) { }
}

export class FetchCharacterError implements Action {
  readonly type = MoviesActionTypes.FetchCharacterError;
  constructor(public payload: HttpErrorResponse) { }
}

export class FetchCharacterMovies implements Action {
  readonly type = MoviesActionTypes.FetchCharacterMovies;
  constructor() { }
}

export class FetchCharacterMoviesSuccess implements Action {
  readonly type = MoviesActionTypes.FetchCharacterMoviesSuccess;
  constructor(public payload: any) { }
}

export class FetchCharacterMoviesError implements Action {
  readonly type = MoviesActionTypes.FetchCharacterMoviesError;
  constructor(public payload: HttpErrorResponse) { }
}


export type MoviesActions =
  FetchMovies
  | FetchMoviesSuccess
  | FetchMoviesError
  | FetchMovie
  | FetchMovieSuccess
  | FetchMovieError
  | FetchMovieCharacters
  | FetchMovieCharactersSuccess
  | FetchMovieCharactersError
  | FetchCharacter
  | FetchCharacterSuccess
  | FetchCharacterError
  | FetchCharacterMovies
  | FetchCharacterMoviesSuccess
  | FetchCharacterMoviesError