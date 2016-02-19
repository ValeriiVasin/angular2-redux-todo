import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'my-link',
  template: `
    <a href="javascript:void(0);" *ngIf="!isActive">{{text}}</a>
    <span *ngIf="isActive">{{text}}</span>
  `
})
export class Link {
  @Input() text: string;
  @Input() isActive: boolean;
}
