import { MoviesService } from './../../../services/movies.service';
import { Movie } from './../../../models/movie';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  @Input() movie: Movie;
  constructor(public MovieService: MoviesService,
    private router: Router) { }


  openMovieDetails(movie: Movie) {
    this.MovieService.selectedFilm = movie;
    this.router.navigate(['/movies', movie.id]);
  }
}

