import { LitElement, html } from 'lit-element';

export class FFLogo extends LitElement {
  render() {
    return html`
      <style>
        :host {
          display: block;
          text-align: center;
        }

        .container {
          display: inline-block;
          height: 100%;
          width: 100%;
          margin-top: 5px;
          padding-right: 0.2em;
          color: var(--white);
          font-family: var(--font-brand);
          font-weight: bold;
          font-size: 72px;
          text-shadow: 0 0 6px #000, 0px 0px 100px var(--primary-red), 0px 0px 80px var(--primary-red);
        }
      </style>

      <span class="container">
        The 1545
      </span>
    `;
  }
}

customElements.define('ff-logo', FFLogo);

