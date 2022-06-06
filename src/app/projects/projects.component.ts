import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  listMenu: string[] = [];
  showTodo: boolean = false;
  showCalci: boolean = false;
  showFull: boolean = false;

  displayFunc(name: string){

    console.log('btn clicked');
    switch (name) {
      case 'Todo Application':
        this.showTodo = true;
        this.showCalci = false;
        this.showFull = false;
        break;
      case 'Simple Calculator':
        this.showCalci = true;
        this.showTodo = false;
        this.showFull = false;
        break;
      case 'FullName Display':
        this.showFull = true;
        this.showCalci = false;
        this.showTodo = false;
        break;
      default:
        break;
    }

  }

  constructor() { }

  ngOnInit(): void {
    this.listMenu = ['Todo Application', 'Simple Calculator', 'FullName Display'];
  }

}
