/**
 * Import LitElement base class, html helper function,
 * and TypeScript decorators
 **/
import {
  LitElement, html, customElement, property
} from 'lit-element';

/**
 * Use the customElement decorator to define your class as
 * a custom element. Registers <my-element> as an HTML tag.
 */
@customElement('my-element')
export class MyElement extends LitElement {

  /**
   * Create an observed property. Triggers update on change.
   */
  @property()
  foo = 'foo-test';

  /**
   * Implement `render` to define a template for your element.
   */
  render(){
    /**
     * Use JavaScript expressions to include property values in
     * the element template.
     */

    setTimeout(() => {
      this.foo = 'After 5 secs';
    }, 5000)

    return html`<p>${this.foo}</p>`;
  }
}
