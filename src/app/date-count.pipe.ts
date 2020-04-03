import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    let today: Date = new Date(); //get current date and time
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = (todayWithNoTime - value) / 1000; //returns value in seconds

    // console.log('show difference', dateDifference);

    let years, months, weeks, days, hours, minutes;
    console.log(value)
    if (dateDifference <= 29) {
      return `a few seconds ago`
    }
    if (dateDifference >= 30 && dateDifference <= 60) {
      return `about a minute ago`
    }

    if (dateDifference > 60 && dateDifference <= 3599) {
      minutes = Math.floor(value / 60);

      if (minutes == 1) {
        return `${minutes} minute ago`;
      }
      else {
        return `${minutes} minutes ago`;
      }
    }

    else if (dateDifference >= 3600 && dateDifference <= 86399) {
      hours = Math.floor(dateDifference / 86400);

      if (hours == 1) {
        return `${hours} hour ago`;
      }
      else {
        return `${hours} hours ago`;
      }
    }

    else if (dateDifference >= 86400 && dateDifference <= 604799) {
      days = Math.floor(dateDifference / 604800);

      if (days == 1) {
        return `${days} day ago`;
      }
      else {
        return `${days} days ago`;
      }
    }

    else if (dateDifference >= 604800 && dateDifference <= 2591999) {
      weeks = Math.floor(dateDifference / 604800);

      if (weeks == 1) {
        return `${weeks} week ago`;
      }
      else {
        return `${weeks} weeks ago`;
      }
    }

    else if (dateDifference >= 2592000 && dateDifference <= 31535999) {
      months = Math.floor(dateDifference / 2592000);

      if (months == 1) {
        return `${months} month ago`;
      }
      else {
        return `${months} months ago`;
      }
    }

    else if (dateDifference >= 31536000) {
      years = Math.floor(dateDifference / 31536000);

      if (years == 1) {
        return `${years} year ago`;
      }
      else {
        return `${years} years ago`;
      }
    }
  }

}



//     const secondsInDay = 86400; //60 seconds * 60 minutes in an hour * 24 hours in a day
//     var dateDifferenceSeconds = dateDifference * 0.001; //converts miliseconds to seconds
//     var dateCounter = dateDifferenceSeconds / secondsInDay;

//     if (dateCounter >= 1 && value > todayWithNoTime) {
//       return dateCounter;
//     } else {
//       return 0;
//     }
//   }

  
// }
