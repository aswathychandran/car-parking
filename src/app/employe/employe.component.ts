import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  elist=[]
  constructor() {
    for(let i =0; i<100;i++){
      let obj={
        'id':i,
        'code':"e"+i.toString(),
        'salary':i*10000
      }
      this.elist.push(obj)
    }
   }

 
  ngOnInit() {
  }

}
