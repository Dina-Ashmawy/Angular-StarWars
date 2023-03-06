import { CharactersService } from './../../../services/characters.service';
import { Character } from './../../../models/characters';
import { FetchMovie, FetchMovieCharacters } from './../../../state/actions/index';
import { MoviesService } from './../../../services/movies.service';
import { State } from './../../../state/reducers/index';
import { getMovie, getMovieCharacters } from './../../../state/selectors/index';
import { Movie } from './../../../models/movie';

import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  film$: Observable<Movie> = this.store.pipe(select(getMovie));
  characters$: Observable<any> = this.store.pipe(select(getMovieCharacters));
  constructor(
    public store: Store<State>,
    private router: Router,
    private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.store.dispatch(new FetchMovie());
    this.store.dispatch(new FetchMovieCharacters());
  }

  NavigateToCharacterDetails(character: Character) {
    this.charactersService.selectedCharacter = character;
    this.router.navigate(['characters/', character.id]);
  }



}
