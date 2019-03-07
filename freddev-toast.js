class FreddevToast extends HTMLElement {
  static get template() {
    const closer =
      '<svg version="1.1" baseProfile="full" width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g></svg>';
    return `
      <style>
        :host {
          background-color: var(--fred-toast-background, #d84315);
          bottom: 0;
          box-sizing: border-box;
          color: var(--fred-toast-color, #fff);
          display: block;
          opacity: 0;
          padding: 20px 40px;
          position: fixed;
          text-align: left;
          transform: translateY(100px);
          z-index: 10000;
        }

        :host(.open) {
          opacity: 1;
          transform: translateY(-20px);
          transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
        }

        :host(.close) {
          opacity: 0;
          transform: translateY(100px);
          transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
        }

        .close {
          cursor: pointer;
          position: absolute;
          right: 4px;
          top: 4px;
          fill:  var(--fred-toast-color, #fff);
        }
      </style>
      <div class="close">${closer}</div>
      <slot></slot>
    `;
  }

  static get cache() {
    this._cache = this._cache || {};
    return this._cache;
  }

  constructor() {
    super();

    let template = this.constructor.cache[this.constructor.name];
    if (!template) {
      template = document.createElement('template');
      template.innerHTML = this.constructor.template;
      // Let's keep Edge happy.
      window.ShadyCSS && window.ShadyCSS.prepareTemplate(template, 'freddev-toast');
      this.constructor.cache[this.constructor.name] = template;
    }

    const node = template.content.cloneNode(true);
    this.root = this.attachShadow({ mode: 'open' });
    this.root.appendChild(node);
    this.root.querySelector('.close').addEventListener('click', (e) => this.close());
  }

  static get observedAttributes() {
    return ['duration'];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (attrName === 'duration') {
      this.duration = newVal;
    }
  }

  open() {
    this.classList.remove('close');
    this.classList.add('open');
    if (this.duration) {
      setTimeout(() => this.close(), this.duration * 1000);
    }
  }

  close() {
    this.classList.remove('open');
    this.classList.add('close');
  }
}
window.customElements.define('freddev-toast', FreddevToast);
