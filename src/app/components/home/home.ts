import { Component } from 'angular2/core';
import { Store } from '../../store';

@Component({
  selector: 'home',
  templateUrl: 'app/components/home/home.html',
  styleUrls: ['app/components/home/home.css'],
  providers: [],
  directives: [],
  pipes: []
})
export class Home {
  constructor(private store: Store) {}

  ngOnInit() {
    console.log('hello', this.store.getState());
  }
}
