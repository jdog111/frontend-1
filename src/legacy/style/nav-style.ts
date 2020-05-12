import { css } from "lit-element";

export const _navStyle = css`
  :host {
    font-family: var(--paper-font-body1_-_font-family);
    -webkit-font-smoothing: var(--paper-font-body1_-_-webkit-font-smoothing);
    font-size: var(--paper-font-body1_-_font-size);
    font-weight: var(--paper-font-body1_-_font-weight);
    line-height: var(--paper-font-body1_-_line-height);
  }

  app-header-layout {
    background-color: var(--primary-background-color);
  }

  app-header,
  app-toolbar,
  paper-tabs {
    background-color: var(--app-header-background-color, var(--primary-color));
    color: var(--app-header-text-color, var(--text-primary-color, white));
    font-weight: 400;
    text-transform: uppercase;
  }

  paper-tabs {
    --paper-tabs-selection-bar-color: #fff;
    padding-left: 12px;
  }

  app-toolbar ha-menu-button + [main-title],
  app-toolbar ha-paper-icon-button-arrow-prev + [main-title],
  app-toolbar ha-icon-button + [main-title] {
    margin-left: 24px;
  }
  .tabs {
    position: relative;
    z-index: -1;
  }
  div#contentContainer {
    z-index: 0;
  }
`;
