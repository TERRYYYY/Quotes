import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, 'Terry', 'I have no special talent. I am only passionately curious.', 'Albert Einstein', new Date(1864, 2, 4), 0, 0),
    new Quote(2, 'Hudson', 'Wisely, and slow. They stumble that run fast.', 'William Shakespeare', new Date(1890, 8, 9), 0, 0),
  ];

  upVote : number =0;
  downVote : number = 0;

  @Input () quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  constructor() { }

  ngOnInit(): void {
  }


  likeCounter : number = 0;
  dislikeCounter : number = 0;

  countLike(){
    this.likeCounter +=1;
    this.quote.upVote +=1;
  }
  countDislike(){
    this.dislikeCounter +=1;
    this.quote.downVote +=1;
  }  

  // bestQuote() {
    
  //   let upVoteArr: number[] = [];
  //   for (let i of this.quotes) {
  //     upVoteArr.push(i.upVote);
  //   }

  //   let maxVote = Math.max(...upVoteArr);
  //   let highestVotedQuote = this.quotes.find(quote => quote.upVote == maxVote)
  //   return highestVotedQuote;

    
  // }

  
  


}
