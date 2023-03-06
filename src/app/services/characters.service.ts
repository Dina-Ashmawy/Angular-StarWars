import { Character } from './../models/characters';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpClient } from '@angular/common/http';
import { Movie } from './../models/movie';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';


const CHARACTER_HTTP_URL_LENGTH = `https://swapi.dev/api/people/`.length;

@Injectable()
export class CharactersService {
    selectedCharacter: Character;

    constructor(private http: HttpClient,
        private spinnerService: NgxSpinnerService) { }


    getCharactersByMovie(film: Movie) {
        return forkJoin(film.characters.map(characterUrl => {
            this.spinnerService.show();
            return this.http.get<Character>(characterUrl)
                .pipe(map(character => {
                    character.id = this.getCharacterId(character.url);
                    return character;
                }),
                    finalize(() => this.spinnerService.hide()))
        }));
    }

    private getCharacterId(characterUrl: string): number {
        return parseInt(characterUrl.substring(CHARACTER_HTTP_URL_LENGTH, characterUrl.length - 1), 10);
    }

    getCharacter(characterId: number): Observable<Character> {
        return this.http.get<Character>(`https://swapi.dev/api/people/${characterId}`)
            .pipe(map(character => {
                character.id = this.getCharacterId(character.url);
                return character;
            }));
    }
}