import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './../../services/movies.service';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CharactersService } from '../../services/characters.service';

@NgModule({
  imports: [
    CommonModule,
    CharactersRoutingModule,
    RouterModule,
    MatCardModule,
    HttpClientModule,

  ],
  declarations: [
    CharacterDetailComponent
  ],
  providers: [
    MoviesService,
    CharactersService
  ]
})

export class CharactersModule { }
