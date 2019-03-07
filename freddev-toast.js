class FreddevToast extends HTMLElement {
  static get template() {
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
        }
      </style>
      <div class="close">X</div>
      <slot></slot>
    `;
  }

  constructor() {
    super();
    const template = document.createElement('template');
    template.innerHTML = this.constructor.template;
    // Let's keep Edge happy.
    window.ShadyCSS && window.ShadyCSS.prepareTemplate(template, 'freddev-toast');
    this.root = this.attachShadow({ mode: 'open' });
    const node = template.content.cloneNode(true);
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
    this.className = 'open';
    if (this.duration) {
      setTimeout(() => this.close(), this.duration * 1000);
    }
  }

  close() {
    this.className = 'close';
  }
}
window.customElements.define('freddev-toast', FreddevToast);
