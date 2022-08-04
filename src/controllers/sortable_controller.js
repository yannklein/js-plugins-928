import { Controller } from '@hotwired/stimulus'
import Sortable from 'sortablejs';

export default class extends Controller {
  // static targets = [ 'test' ]

  connect() {
    console.log('Hello from sortable_controller.js')
    // console.log(this.testTarget)
    this.initSortable()
  }

  initSortable() {
    const el = this.element;
    const sortable = Sortable.create(el, {
      ghostClass: "ghost",
      animation: 1500,
      // onEnd: (event) => {
      //   alert(`${event.oldIndex} moved to ${event.newIndex}`)
      // }
    });
  };
}