import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';
import { AppService } from './app.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []

})

export class AppComponent implements OnInit{

  p: string = "Perro";
  g: string = "Gato";
  l: string = "Loro";
  h: string = "Hamster";
  animales: any[] = [];
  tp: number= 0;
  tg: number= 0;
  tl: number= 0;
  th: number= 0;
  //public option:EChartsOption
  mergeOptions = {};
  formulario !: FormGroup;
  constructor(
    private appService: AppService,
    private fb: FormBuilder,

  ){}

  ngOnInit(): void {

    const user1 = {titulo: "Perro", stock: 2,}


    this.formulario = this.fb.group({
      titulo: [,[Validators.required, Validators.minLength(4)]],
      stock: [,[Validators.required, Validators.min(1)]]
    })
    this.appService.getAll()
    .subscribe((data:any) => {
      this.animales = data['_embedded']['Animales']
    });
  } //

  getAll(){
    this.appService.getAll()
    .subscribe((data:any) => {
     this.animales = data['_embedded']['Animales']
    });
    return this.animales;
  }
 create(){
  if (this.formulario.invalid){
    this.formulario.markAllAsTouched();
    return
  }

  this.sumar();
  console.log ('RECIERN'+this.formulario.value)
  this.appService.create(this.formulario.value)
  .subscribe(()=>{
    //this.formulario.setValue({titulo: ""})
    this.getAll();
  })

  this.option = {


  xAxis: {
    type: 'category',
    data: ['Perro', 'Gato', 'Loro', 'Hamster']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [this.tp, this.tg, this.tl, this.th],
      type: 'bar'
    }
  ],
  }
 }
 sumar(){
    if(this.formulario.value.titulo == this.p){
      console.log('posicion: '+ this.formulario.value.stock)
      this.tp += parseInt(this.formulario.value.stock);
      console.log('p1:' + this.tp)
      return this.tp;
    }
    console.log('hola:'+this.tp);
    if(this.formulario.value.titulo == this.g){
      console.log('posicion: '+ this.formulario.value.stock)
      this.tg += parseInt(this.formulario.value.stock);
      console.log('p2:' + this.tg)
      return this.tg;
    }
    if(this.formulario.value.titulo == this.l){
      console.log('posicion: '+ this.formulario.value.stock)
      this.tl += parseInt(this.formulario.value.stock);
      console.log('p3:' + this.tl)
      return this.tl;
    }
    else
      console.log('posicion: '+ this.formulario.value.stock)
      this.th += parseInt(this.formulario.value.stock);
      console.log('p4:' + this.th)
      return this.th;

 }
 option :EChartsOption= {

  xAxis: {
    type: 'category',
    data: ['Perro', 'Gato', 'Loro', 'Hamster']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [this.tp, this.tg, this.tl, this.th],
      type: 'bar'
    }
  ],
};
}
