import { LitElement, html } from 'lit-element';
import './ff-logo';

export class FFOmnibar extends LitElement {
  static get properties() {
    return {
      width: { type: Number },
      height: { type: Number }
    };
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
        }

        .omni {
          width: 100%;
          height: 56px;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: var(--dark-gray);
          border-top: var(--border-primary);
        }

        ff-logo {
          overflow: hidden;
          margin: auto;
          height: 100%;
          width: 250px;
        }
      </style>

      <div class="omni">
        <ff-logo></ff-logo>
      </div>
    `;
  }
}

customElements.define('ff-omnibar', FFOmnibar);

