import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { MatDialog } from '@angular/material/dialog';
import {  QuoteFormComponent } from '../quote-form/quote-form.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  myDate = Date.now( );
  quotes: Quote[] = [
    new Quote(1, 'Terry', 'I have no special talent. I am only passionately curious.' ,'Albert Einstein', new Date(1864, 2, 4),0,0),
    new Quote(2, 'Hudson', 'Wisely, and slow. They stumble that run fast.', 'William Shakespeare', new Date(1890, 8, 9),0,0),
    // new Quote(3, 'Lorraine', 'If you judge people, you have no time to love them.','Mother Teresa', new Date(1785, 9, 21)),
    // new Quote(4, 'Jason', 'Stay hungry, stay foolish.','Steve Jobs', new Date(2012, 10, 19)),
    // new Quote(5, 'Michiel', 'Be kind whenever possible. It is always possible.','Dalai Lama', new Date(1990, 7, 16)),
    // new Quote(6, 'Vienna', 'It always seems impossible until it’s done.','Nelson Mandela', new Date(2005, 4, 11)),
  ];

  myimage : string = "assets/images/pic.jpeg";


  toggleDetails(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }


  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete Quote by: ${this.quotes[index].author}?`)

      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }
  }

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  showForm:boolean = false;

  hideForm(){
    this.showForm=false
  }


  constructor(private dialog: MatDialog){ }

  // openDialog(){
  //   this.dialog.open(QuoteFormComponent)
  //   this.showForm = true;
  // }

  bestQuote(){
    let upVoteArr : number[] = [];
    for (let i of this.quotes){
      upVoteArr.push(i.upVote);
    }

    let maxVote = Math.max(...upVoteArr);
    let highestVotedQuote = this.quotes.find(quote => quote.upVote == maxVote)
    return highestVotedQuote;
  }


// openDialog(){
//   alert('hey')
// }
  // constructor(private dialog: MatDialog) { }
  //     openDialog() { }
  //   // alert('hello')
  //   this.dialog.open(QuoteFormComponent)
  // }

  // constructor(private dialog: MatDialog, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
  }

}
