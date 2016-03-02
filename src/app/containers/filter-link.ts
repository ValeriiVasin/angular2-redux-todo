import { Component, Input } from 'angular2/core';
import { Link } from '../components/link';
import { connect } from '../lib';
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

  ngOnInit() {
    connect(mapStateToProps, mapDispatchToProps)(this);
  }
}
