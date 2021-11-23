import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { UUIListItemNodeElement } from '@umbraco-ui/uui-list-item-node/lib/uui-list-item-node.element';

/**
 *  @element uui-list-item-document-type
 *  @fires {UUIListItemEvent} click-title - fires when the list-item title is clicked
 *  @description - List-item component for displaying a document type(Content Type, Media Type, Element Type etc.).
 */

export class UUIListItemDocumentTypeElement extends UUIListItemNodeElement {
  static styles = [...UUIListItemNodeElement.styles];

  @property({ type: String })
  alias = '';

  protected renderDetail() {
    const details: string[] = [];

    if (this.alias !== '') {
      details.push(this.alias);
    }
    if (this.detail !== '') {
      details.push(this.detail);
    }
    return html`<small id="detail"
      >${details.join(' | ')}<slot name="detail"></slot
    ></small>`;
  }
}
