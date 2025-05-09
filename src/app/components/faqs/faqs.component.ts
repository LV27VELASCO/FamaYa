import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  imports: [],
  templateUrl: './faqs.component.html'
})
export class FaqsComponent {

  question:number = 0;

  setQuestion(number:number){
    if(number == this.question)
      this.question = 0;
    else
      this.question = number;
  }
}
