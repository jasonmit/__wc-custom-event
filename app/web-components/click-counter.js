class ClickCounter extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({ mode: 'open' });
    this.setup(shadow);
  }

  handleButtonClick() {
    let event = new CustomEvent('customEvent', {
      bubbles: true,
      cancelable: false
    });

    this.dispatchEvent(event);
  }

  setup(shadow) {
    let btn = document.createElement('button');
    btn.addEventListener(
      'click',
      this.handleButtonClick.bind(this),
      false,
      false
    );
    btn.textContent = 'Submit';
    shadow.appendChild(btn);
  }
}

// Define the new element
customElements.define('click-counter', ClickCounter);
