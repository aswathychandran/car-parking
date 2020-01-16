import { Component, OnInit, Input } from '@angular/core';
import{Person} from '../person'

@Component({
  selector: 'app-child',
  // templateUrl: './child.component.html',
  template:'say.....{{childMessage}}',
  styleUrls: ['./child.component.css']
})


export class ChildComponent implements OnInit {
  
  @Input() childMessage:string;
  constructor() { }

  ngOnInit() {
  }

}
