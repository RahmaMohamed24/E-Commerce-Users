import { Component, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
  @Input()   title:string = ""
  @Input() data :any[] =[]
  @Output() SelectedValue = new EventEmitter()
  detectChange(event:any){
this.SelectedValue.emit(event)
  }
}
