import { Component, OnInit, AfterViewInit,ViewChild } from '@angular/core';
import { Child1Component } from '../child1/child1.component';

@Component({
  selector: 'app-parent1',
  // templateUrl: './parent1.component.html',
  template:'{{message}}<app-child1></app-child1>',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements AfterViewInit {
ngAfterViewInit():void{
  this.message=this.child.childmessage

}

message
  @ViewChild(Child1Component,{static:false})child;
  
  constructor() { }

  // ngOnInit() {
  // }

}
