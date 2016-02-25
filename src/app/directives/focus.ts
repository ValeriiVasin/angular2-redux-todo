import {Directive, Input, ElementRef} from 'angular2/core';

@Directive({
    selector: '[focus]'
})
export class Focus {
    @Input() focus: boolean;

    constructor(private element: ElementRef) {}

    protected ngOnChanges() {
        if (this.focus) {
          this.element.nativeElement.focus();
        }
    }
}
