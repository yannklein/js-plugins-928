// sch + tab
import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = [ 'reset', 'button' ]

  connect() {
    console.log('Hello from disable_button_controller.js')
    console.log(this.resetTarget)
  }

  disable(event) {
    // console.log("Time to disable you!")
    // console.log(event.currentTarget)
    event.currentTarget.innerText = "☠️"
    event.currentTarget.disabled = true

    // remove the class d-none form the reset button
    this.resetTarget.classList.remove("d-none")
  }

  enable() {
    this.resetTarget.classList.add("d-none")

    this.buttonTarget.innerText = "Click me again!"
    this.buttonTarget.disabled = false;
  }
}