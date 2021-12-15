import {
  html,
  fixture,
  expect,
  oneEvent,
  elementUpdated,
} from '@open-wc/testing';
import { UUICardMediaElement } from './uui-card-media.element';
import '.';
import { UUICardEvent } from '@umbraco-ui/uui-card/lib/UUICardEvent';

describe('UUICardMediaElement', () => {
  let element: UUICardMediaElement;

  beforeEach(async () => {
    element = await fixture(
      html` <uui-card-media name="Media item"></uui-card-media> `
    );
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });

  describe('properties', () => {
    it('has an error property', () => {
      expect(element).to.have.property('error');
    });

    it('has a disabled property', () => {
      expect(element).to.have.property('disabled');
    });

    it('has a selectable property', () => {
      expect(element).to.have.property('selectable');
    });

    it('has a selected property', () => {
      expect(element).to.have.property('selected');
    });

    it('has a name property', () => {
      expect(element).to.have.property('name');
    });

    it('has a fileExt property', () => {
      expect(element).to.have.property('fileExt');
    });
  });

  describe('template', () => {
    it('renders a default slot', () => {
      const slot = element.shadowRoot!.querySelector('slot')!;
      expect(slot).to.exist;
    });

    it('renders a tag slot', () => {
      const slot = element.shadowRoot!.querySelector('slot[name=tag]')!;
      expect(slot).to.exist;
    });

    it('renders an actions slot', () => {
      const slot = element.shadowRoot!.querySelector('slot[name=actions]')!;
      expect(slot).to.exist;
    });
  });

  describe('events', () => {
    describe('open', () => {
      it('emits a open event when open-part is clicked', async () => {
        const listener = oneEvent(element, UUICardEvent.OPEN);
        const infoElement: HTMLElement | null =
          element.shadowRoot!.querySelector('#open-part');
        infoElement?.click();
        const event = await listener;
        expect(event).to.exist;
        expect(event.type).to.equal(UUICardEvent.OPEN);
      });
    });

    describe('select', () => {
      it('emits a selected event when selectable', async () => {
        element.selectable = true;
        await elementUpdated(element);
        const listener = oneEvent(element, UUICardEvent.SELECTED);
        element.click();
        const event = await listener;
        expect(event).to.exist;
        expect(event.type).to.equal(UUICardEvent.SELECTED);
        expect(element.selected).to.be.true;
      });
    });
  });
});
