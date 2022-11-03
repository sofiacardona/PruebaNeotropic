import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxEchartsModule . forRoot ( {
      /**
       * Esto importará todos los módulos de echarts.
       * Si solo necesita módulos personalizados,
       * consulte la sección [Creación personalizada].
       */
      echarts : ( )  =>  import ( 'echarts' ) ,  // o import('./path-to-my-custom-echarts')
    } ) ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
