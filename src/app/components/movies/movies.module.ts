import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesEffects } from './../../state/effects/index';
import { MoviesService } from './../../services/movies.service';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MovieComponent } from './movie/movie.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';
import { CharactersService } from '../../services/characters.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    EffectsModule.forFeature([MoviesEffects]),
    MoviesRoutingModule,

  ],
  declarations: [
    MoviesListComponent,
    MovieComponent,
    MovieDetailComponent
  ],
  providers: [
    MoviesService,
    CharactersService
  ]
})
export class MoviesModule { }
