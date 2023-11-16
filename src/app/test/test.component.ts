import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule],
  template: `<h2>Welcome to {{ name }} we are learning Binding</h2>
    <h2>{{ 2 + 2 }}</h2>
    <h2>{{ 'Welcome ' + name }}</h2>
    <h2>{{ name.length }}</h2>
    <h2>{{ name.toUpperCase() }}</h2>
    <h2>{{ greetUser() }}</h2>
    <h2>{{ siteUrl }}</h2>
    <!-- this property binding works with all values not only string-->
    <input [id]="myId" type="text" value="Hello" />
    <!-- this works only with string values -->
    <input
      [disabled]="isDisabled"
      id="{{ myId }}"
      type="text"
      value="Hello"
    /> `,

  styles: [],
})
export class TestComponent {
  public name = 'Codevolution';
  public siteUrl = window.location.href;
  //property binding
  public myId = 'testId'; //this only works with string values
  public isDisabled = true;
  greetUser() {
    return 'Hello ' + this.name;
  }
}
