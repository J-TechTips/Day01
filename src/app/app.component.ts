import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  str: string;
anotherStr;
yetAnotherStr;

ngOnInit() {
this.str = 'this is a string';
this.anotherStr = 'this is anohter string';
this.anotherStr = 4;
this.yetAnotherStr = 'this is yet another string';
this.yetAnotherStr = 4;
}
test() {
let name: string = 'Test User';
let age: number = 30;
let text: string = 'My name is ' + name + ' and I am ' + age + ' years old';

console.log(text);

}

}
