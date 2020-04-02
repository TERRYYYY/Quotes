import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighestVotes]'
})
export class HighestVotesDirective {

  constructor(private element : ElementRef) { 
    this.element.nativeElement.style.backgroundColor = "orangered ";
    this.element.nativeElement.style.color = "#ffffff";
  }

}
