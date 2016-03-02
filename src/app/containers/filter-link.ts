import { Component, Input, Inject } from 'angular2/core';
import { Link } from '../components/link';
import { setVisibilityFilter } from '../actions';

const mapDispatchToProps = (dispatch, props) => {
  return {
    onLinkClick: () => dispatch(setVisibilityFilter({ filter: props.filter }))
  }
};

const mapStateToProps = (state, props) => {
  return {
    text: props.filter.text,
    isActive: state.visibilityFilter === props.filter
  }
};

@Component({
  selector: 'filter-link',
  template: `
    <my-link
      [text]="text"
      [isActive]="isActive"
      (click)="onLinkClick()"
      ></my-link>
  `,
  directives: [Link]
})
export class FilterLink {
  @Input() filter;

  constructor(@Inject('connect') connect) {
    connect(mapStateToProps, mapDispatchToProps)(this);
  }
}
