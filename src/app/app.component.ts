import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first_project';
  hideHome : boolean = true ;
  hideAbout : boolean = false;
  hideProjects : boolean = false;
  homeFunc = () =>{
    this.hideHome = true;
    this.hideAbout = false;
    this.hideProjects = false;
  }

  aboutFunc = () =>{
    this.hideHome = false;
    this.hideAbout = true;
    this.hideProjects = false;
  }

  projectFunc = () =>{
    this.hideHome = false;
    this.hideAbout = false;
    this.hideProjects = true;
  }

}
