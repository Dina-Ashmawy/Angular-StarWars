import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as starWarState from '../reducers/index'
export interface State {
  movies: starWarState.State;
}

export const reducers: ActionReducerMap<State> = {
  movies: starWarState.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getMoviesState = createFeatureSelector<starWarState.State>('movies');
export const getMovies = createSelector(getMoviesState, state => state.data);
export const getMovie = createSelector(getMoviesState, state => state.selectedMovie);
export const getMovieCharacters = createSelector(getMoviesState, state => state.selectedMovieCharacters);
export const getIsLoading = createSelector(getMoviesState, state => state.isLoading);
export const getCharacterMovies = createSelector(getMoviesState, state => state.selectedCharacterMovies);
export const getCharacter = createSelector(getMoviesState, state => state.selectedCharacter);
