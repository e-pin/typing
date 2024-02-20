import { Component } from '@angular/core';
import { fa, faker, th, tr } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomSentence = faker.lorem.lines(1);
  userInput = '';
  isCorrect = false;


  handleInput(event: Event) {
    var value = (event.target as HTMLInputElement).value;
    this.userInput = value;

    if (this.userInput === this.randomSentence) {
      this.isCorrect = true;
    }
  }

  getClass(i: number) {
    if (!this.userInput[i]) return 'has-text-grey-dark';

    return this.userInput[i] === this.randomSentence[i]
      ? 'has-text-primary'
      : 'has-text-danger';
  }
}
