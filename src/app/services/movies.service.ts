import { map, finalize } from 'rxjs/operators';
import { Observable, of, forkJoin } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MoviesResponse } from '../models/movie';
import { Character } from '../models/characters';
import { NgxSpinnerService } from 'ngx-spinner';

const FILM_HTTP_URL_LENGTH = `'https://swapi.dev/api/films/`.length;

@Injectable()
export class MoviesService {
    isLoading: boolean = true
    private readonly baseUrl = 'https://swapi.dev/api';
    filmsList: Movie[] = [];
    selectedFilm: Movie;
    constructor(private http: HttpClient,
        private spinnerService: NgxSpinnerService) { }

    getMoviesList(): Observable<Movie[]> {

        if (this.filmsList.length) {
            return of(this.filmsList);
        } else {
            this.spinnerService.show();
            return this.http.get<MoviesResponse>(`${this.baseUrl}/films`)
                .pipe(map((films: MoviesResponse) => films.results.map(film => {
                    film.id = this.getMovieId(film.url)
                    return film;
                })),
                    finalize(() => this.spinnerService.hide())
                );
        }
    }

    private getMovieId(filmUrl: string): number {
        return parseInt(filmUrl.substring(FILM_HTTP_URL_LENGTH, filmUrl.length - 2), 10);
    }

    getMovie(movieId: number): Observable<Movie> {
        return this.http.get<Movie>(`${this.baseUrl}/films/${movieId}`)
            .pipe(map(film => {
                film.id = this.getMovieId(film.url);
                return film;
            }));
    }

    getMoviesByCharacter(character: Character) {
        return forkJoin(character.films.map(filmUrl => {
            this.spinnerService.show();
            return this.http.get<Movie>(filmUrl)
                .pipe(map(film => {
                    film.id = this.getMovieId(film.url);
                    return film;
                }),
                    finalize(() => this.spinnerService.hide()))
        }))
    }
}