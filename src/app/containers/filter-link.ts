import { Component, Input } from 'angular2/core';
import { Store } from '../store';
import { Link } from '../components/link/link';

const mapDispatchToProps = (dispatch, props) => {
  return {
    onLinkClick() {
      dispatch({ type: 'SET_VISIBILITY_FILTER', filter: props.filter });
    }
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

  constructor(private store: Store) {}

  getProps() {
    return {
      filter: this.filter
    };
  }

  ngOnInit() {
    Object.assign(
      this,
      mapDispatchToProps(this.store.dispatch.bind(this.store), this.getProps())
    );

    Object.assign(this, mapStateToProps(this.store.getState(), this.getProps()));

    this.store.subscribe(() => {
      Object.assign(this, mapStateToProps(this.store.getState(), this.getProps()));
    });
  }
}
