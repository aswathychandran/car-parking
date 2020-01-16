export class Parking {
    
  slotno:string
  vehicleno:number
  rno:string
  et:any
  ext:any
  hours:string
  vehicletype:any
    
  constructor(sno,vhno,remove,etime,extime,hrs,vehtype){
     this.slotno=sno
     this.vehicleno=vhno
     this.rno=remove
     this.et=etime
     this.ext=extime
     this.hours=hrs
     this.vehicletype=vehtype
  }
}
