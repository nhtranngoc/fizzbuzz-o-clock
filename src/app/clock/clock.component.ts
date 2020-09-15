import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.sass']
})
export class ClockComponent implements OnInit {
  time = new Date();

  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      this.time = new Date();
    }, 1000)
  }

  formatTime(time: Date): string {
    return this.fizzbuzz(time.getHours()) + ':\u200B' +
      this.fizzbuzz(time.getMinutes()) + ':\u200B' +
      this.fizzbuzz(time.getSeconds());
  }

  fizzbuzz(n: number): string {
    let n_string: string = n < 10 ? '0' + n.toString() : n.toString();
    let res = '';

    if (n % 3 == 0) {
      res += 'Fizz'
    }

    if (n % 5 == 0) {
      res += 'Buzz'
    }

    res = (res === '') ? n_string : res;

    return res;
  }

}
