import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    quotes: Quote[] = [
      new Quote(1, 'Terry', 'I have no special talent. I am only passionately curious.', 'Albert Einstein', new Date(1864, 2, 4),0,0),
      new Quote(2, 'Hudson', 'Wisely, and slow. They stumble that run fast.', 'William Shakespeare', new Date(1890, 8, 9),0,0),
      // new Quote(3, 'Lorraine', 'If you judge people, you have no time to love them.', 'Mother Teresa', new Date(1785, 9, 21)),
      // new Quote(4, 'Jason', 'Stay hungry, stay foolish.', 'Steve Jobs', new Date(2007, 10, 19)),
      // new Quote(5, 'Michiel', 'Be kind whenever possible. It is always possible.', 'Dalai Lama', new Date(1990, 7, 16)),
      // new Quote(6, 'Vienna', 'It always seems impossible until it’s done.', 'Nelson Mandela', new Date(2002, 4, 11)),
    ];

  //   new Quote(1, 'Terry', 'I have no special talent. I am only passionately curious.Albert Einstein',new Date(1864,2,4)),
  //   new Quote(2, 'Hudson', 'Wisely, and slow. They stumble that run fast.William Shakespeare', new Date(1890, 8, 9)),
  //   new Quote(3, 'Lorraine', 'If you judge people, you have no time to love them.Mother Teresa', new Date(1785, 9, 21) ),
  //   new Quote(4, 'Jason', 'Stay hungry, stay foolish.Steve Jobs', new Date(2007, 10, 19) ),
  //   new Quote(5, 'Michiel', 'Be kind whenever possible. It is always possible.Dalai Lama', new Date(1990, 7, 16)),
  //   new Quote(6, 'Vienna', 'It always seems impossible until it’s done.Nelson Mandela', new Date(2002, 4, 11)),
  // ];

  constructor() {
    
  }
}
