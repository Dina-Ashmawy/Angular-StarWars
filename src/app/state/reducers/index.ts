import { MoviesActions, MoviesActionTypes } from './../actions/index';
import { Character } from './../../models/characters';
import { Movie } from './../../models/movie';

import { HttpErrorResponse } from '@angular/common/http';

export interface State {
  isLoading: boolean;
  error: HttpErrorResponse | null;
  data: Movie[] | null;
  selectedMovie: Movie | null;
  selectedMovieCharacters: [] | null;
  selectedCharacter: Character | null;
  selectedCharacterMovies: [] | null;
}

export const initialState: State = {
  isLoading: false,
  error: null,
  data: [],
  selectedMovie: null,
  selectedMovieCharacters: [],
  selectedCharacter: null,
  selectedCharacterMovies: []
};

export function reducer(state = initialState, action: MoviesActions): State {
  switch (action.type) {

    case MoviesActionTypes.FetchMovies:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case MoviesActionTypes.FetchMoviesSuccess:
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };

    case MoviesActionTypes.FetchMoviesError:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case MoviesActionTypes.FetchMovie:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case MoviesActionTypes.FetchMovieSuccess:
      return {
        ...state,
        isLoading: false,
        selectedMovie: action.payload,
      };

    case MoviesActionTypes.FetchMovieError:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case MoviesActionTypes.FetchMovieCharacters:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case MoviesActionTypes.FetchMovieCharactersSuccess:
      return {
        ...state,
        isLoading: false,
        selectedMovieCharacters: action.payload,
      };


    case MoviesActionTypes.FetchMovieCharactersError:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case MoviesActionTypes.FetchCharacter:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case MoviesActionTypes.FetchCharacterSuccess:
      return {
        ...state,
        isLoading: false,
        selectedCharacter: action.payload
      };

    case MoviesActionTypes.FetchCharacterError:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case MoviesActionTypes.FetchCharacterMovies:
      return {
        ...state,
        isLoading: true,
        error: null
      };

    case MoviesActionTypes.FetchCharacterMoviesSuccess:
      return {
        ...state,
        isLoading: false,
        selectedCharacterMovies: action.payload
      };

    case MoviesActionTypes.FetchCharacterMoviesError:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
}
