import { LitElement, html } from 'lit-element';
import twitchGlitch from "../../assets/twitch-glitch.svg";

export class FFNameplate extends LitElement {
  static get properties() {
    return {
      name: { type: String },
      twitch: { type: String },
      pb: { type: String },
      est: { type: String }
    };
  }

  render() {
    return html`
      <style>
        :host {
          display: block;
          position: relative;
        }

        * {
          box-sizing: border-box;
        }

        .nameplate {
          position: absolute;
          margin: 20px 0;
          width: 90%;
          height: 75px;
          border: 1px solid var(--color);
          border-radius: var(--border-radius);
          box-shadow: 0px 0px 4px var(--color);
          display: flex;
          color: var(--white);
        }

          .nameplate__avatar {
            flex: 0 0 75px;
            display: inline-block;
            height: 73px;
            width: 73px;
            vertical-align: middle;
            border-radius: var(--border-radius);
          }

          .nameplate__name {
            display: block;
            width: 100%;
            height: 42px;
            padding: 12px;
            box-shadow: inset 0 0 42px var(--color);
            text-shadow: 0 1px 0.3em var(--dark-gray);
            text-align: center;
            font-size: 22px;
            font-weight: bold;
            line-height: 1em;
          }

          .nameplate-text {
            flex: 1 1 auto;
          }

          .nameplate-info {
            display: flex;
            text-align: center;
          }

          .nameplate-info__cell {
            flex: 1 0 auto;
            height: 32px;
            padding: 7px 8px;
            border-top: 1px solid var(--color);
            border-right: 1px solid var(--color);
            box-shadow: inset 0 0 8px var(--color);
            text-shadow: 0 1px 0.3em var(--dark-gray);
            font-size: 16px;
          }

          .nameplate-info__cell:last-child {
            border-right: none;
          }

          .nameplate__social .svg-inline--fa {
            margin-bottom: -1px;
            margin-right: 3px;
          }

        .twitch-icon {
          display: inline-block;
          vertical-align: bottom;
          height: 14px;
          margin-right: 6px;
          margin-bottom: 2px;
        }

        :host(.nameplate--right) .nameplate {
          right: -1px;
        }

        :host(.nameplate--large) .nameplate {
          height: 90px;
        }

        :host(.nameplate--large) .nameplate__name {
          display: block;
          width: 100%;
          height: 52px;
          padding: 12px;
          box-shadow: inset 0 0 42px var(--color);
          text-shadow: 0 1px 0.3em var(--dark-gray);
          text-align: center;
          font-size: 28px;
        }

        :host(.nameplate--large) .nameplate-info__cell {
          height: 37px;
          padding: 8px 8px;
          font-size: 18px;
        }
      </style>

      <div class="nameplate">
        <div class="nameplate-text">
          <span class="nameplate__name">${this.name}</span>
          <div class="nameplate-info">
            <span class="nameplate-info__cell">PB: ${this.pb}</span>
            <span class="nameplate-info__cell nameplate__social">
              <img class="twitch-icon" src="${twitchGlitch}">
              <span class="nameplate__twitch__text">${this.twitch}</span>
            </span>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('ff-nameplate', FFNameplate);
