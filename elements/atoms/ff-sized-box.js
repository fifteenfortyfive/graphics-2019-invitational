import { LitElement, html } from 'lit-element';

export class FFSizedBox extends LitElement {
  static get properties() {
    return {
      width: { type: Number },
      height: { type: Number },
      showSize: { type: Boolean }
    };
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
          color: var(--bl-color-secondary);
        }

        .box {
          width: ${this.width}px;
          height: ${this.height}px;
        }
      </style>

      <div class="box">
        <slot />
      </div>
    `;
  }
}

customElements.define('ff-sized-box', FFSizedBox);

