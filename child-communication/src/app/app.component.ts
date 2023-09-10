import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'child-communication';
  dataValue= 100;
  movie: string = '';
  description: string = '';
  movieData: { movie: string, desc: string }[] = [];

  receiveChildData(data: { movie: string, desc: string }) {
    this.movie = data.movie;
    this.description = data.desc;

    this.movieData.push(data)
    console.log(data);
    
  }

  


  
  

}
