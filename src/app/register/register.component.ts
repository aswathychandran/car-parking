import { Component, OnInit } from '@angular/core';
import { Parking } from '../parking';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  slotno:string
  vehicleno:number
  rno:any
  et:any
  ext:any
  hours:string
  vehicletype:any
  
  
  constructor() { }

  ngOnInit() {
    
  }
  parkinglist:Parking[]=[]

  twowheeler:Parking[]=[]
  fourwheeler:Parking[]=[]

  
  submit(){
    console.log(this.slotno)
    console.log(this.vehicleno)
    console.log(this.rno)
    console.log(this.et)
    console.log(this.ext)
    console.log(this.hours)
    console.log(this.vehicletype)

  
  let p:Parking=new Parking(this.slotno,this.vehicleno,this.rno,
    this.et,this.ext,this.hours,this.vehicletype)
    console.log(p)

    if(this.vehicletype=="2")
      {
    if(this.twowheeler.length<4){
    this.twowheeler.push(p)
    console.log(this.twowheeler)}

    else{alert("two wheeler slot is full")}
    }
  

  if(this.vehicletype=="4")
  {
if(this.fourwheeler.length<4){
this.fourwheeler.push(p)
console.log(this.fourwheeler)}

else{alert("four wheeler slot is full")}
}
}
  
    remove2(){
      console.log(this.rno)
      this.twowheeler.forEach(x=>{
        if(this.rno==x.vehicleno){
          this.twowheeler.splice(this.twowheeler.indexOf(x),1)
          console.log(this.twowheeler)
          alert("removed vehicle"+this.rno)

        }
      })
    
      }
      remove4(){
        console.log(this.rno)
        this.fourwheeler.forEach(x=>{
          if(this.rno==x.vehicleno){
            this.fourwheeler.splice(this.fourwheeler.indexOf(x),1)
            console.log(this.fourwheeler)
            alert("removed vehicle"+this.rno)
  
          }
        })
      
        }
      
    }
    
    
  

