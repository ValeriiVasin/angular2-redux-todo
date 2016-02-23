import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'my-link',
  template: `
    <a href="javascript:void(0);" [ngClass]="{ selected: isActive }">{{text}}</a>
  `
})
export class Link {
  @Input() text: string;
  @Input() isActive: boolean;
}
