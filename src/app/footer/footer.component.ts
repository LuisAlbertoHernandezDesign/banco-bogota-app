import {Component} from '@angular/core';
@Component({
  selector:'app-footer',
  templateUrl:'./footer.component.html',
  styleUrls:['./footer.component.css']
})
export class FooterComponent {
  public autor: any = {nombre:'Spring con Angular 7',apellido:'Luis Alberto Hernandez'};
}
