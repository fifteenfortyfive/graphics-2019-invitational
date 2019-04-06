import { LitElement, html } from 'lit-element';

export class FFTimerBox extends LitElement {
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

        * {
          box-sizing: border-box;
        }

        .timerbox {
          // margin: 20px 0;
          width: 100%;
          height: 78px;
          border: 1px solid var(--color);
          border-radius: var(--border-radius);
          box-shadow: 0px 0px 4px var(--color);
          display: flex;
          color: var(--white);
        }

          .timerbox__name {
            display: block;
            width: 100%;
            height: 78px;
            box-shadow: inset 0 0 42px var(--color);
            text-shadow: 0 1px 0.3em var(--dark-gray);
            text-align: center;
            font-size: 48px;
            font-weight: bold;
            line-height: 1em;
          }

          .timerbox-text {
            flex: 1 1 auto;
          }
      </style>

      <div class="timerbox">
        <div class="timerbox-text">
          <span class="timerbox__name"></span>
        </div>
      </div>
    `;
  }
}

customElements.define('ff-timer-box', FFTimerBox);

