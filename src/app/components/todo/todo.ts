import { Component, Input } from 'angular2/core';

@Component({
  selector: 'todo-item',
  template: `
    <li class="" data-reactid=".0.1.1.$37d1fae2-0559-4912-b8b8-3b0f6fbbb7cb"><div class="view" data-reactid=".0.1.1.$37d1fae2-0559-4912-b8b8-3b0f6fbbb7cb.0"><input class="toggle" type="checkbox" data-reactid=".0.1.1.$37d1fae2-0559-4912-b8b8-3b0f6fbbb7cb.0.0"><label data-reactid=".0.1.1.$37d1fae2-0559-4912-b8b8-3b0f6fbbb7cb.0.1">asdfasf</label><button class="destroy" data-reactid=".0.1.1.$37d1fae2-0559-4912-b8b8-3b0f6fbbb7cb.0.2"></button></div><input class="edit" value="asdfasf" data-reactid=".0.1.1.$37d1fae2-0559-4912-b8b8-3b0f6fbbb7cb.1"></li>
  `,
  styles: [
    `
      p { cursor: pointer }
      p.is-done { text-decoration: line-through; color: green; }
    `
  ]
})
export class Todo {
  @Input() text: string;
  @Input() isDone: boolean;
}
