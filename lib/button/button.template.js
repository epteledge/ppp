import { html } from '../element/templating/template.js';
import { ref } from '../element/templating/ref.js';
import { slotted } from '../element/templating/slotted.js';
import { endSlotTemplate, startSlotTemplate } from '../patterns/start-end.js';

/**
 * The template for the Button component.
 * @public
 */
export const buttonTemplate = (context, definition) => html`
  <button
    class="control"
    part="control"
    ?autofocus="${(x) => x.autofocus}"
    ?disabled="${(x) => x.disabled}"
    form="${(x) => x.formId}"
    formaction="${(x) => x.formaction}"
    formenctype="${(x) => x.formenctype}"
    formmethod="${(x) => x.formmethod}"
    formnovalidate="${(x) => x.formnovalidate}"
    formtarget="${(x) => x.formtarget}"
    name="${(x) => x.name}"
    type="${(x) => x.type}"
    value="${(x) => x.value}"
    aria-atomic="${(x) => x.ariaAtomic}"
    aria-busy="${(x) => x.ariaBusy}"
    aria-controls="${(x) => x.ariaControls}"
    aria-current="${(x) => x.ariaCurrent}"
    aria-describedBy="${(x) => x.ariaDescribedby}"
    aria-details="${(x) => x.ariaDetails}"
    aria-disabled="${(x) => x.ariaDisabled}"
    aria-errormessage="${(x) => x.ariaErrormessage}"
    aria-expanded="${(x) => x.ariaExpanded}"
    aria-flowto="${(x) => x.ariaFlowto}"
    aria-haspopup="${(x) => x.ariaHaspopup}"
    aria-hidden="${(x) => x.ariaHidden}"
    aria-invalid="${(x) => x.ariaInvalid}"
    aria-keyshortcuts="${(x) => x.ariaKeyshortcuts}"
    aria-label="${(x) => x.ariaLabel}"
    aria-labelledby="${(x) => x.ariaLabelledby}"
    aria-live="${(x) => x.ariaLive}"
    aria-owns="${(x) => x.ariaOwns}"
    aria-pressed="${(x) => x.ariaPressed}"
    aria-relevant="${(x) => x.ariaRelevant}"
    aria-roledescription="${(x) => x.ariaRoledescription}"
    ${ref('control')}
  >
    ${startSlotTemplate(context, definition)}
    <span class="content" part="content">
      <slot ${slotted('defaultSlottedContent')}></slot>
    </span>
    ${endSlotTemplate(context, definition)}
  </button>
`;
