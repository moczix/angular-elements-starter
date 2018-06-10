import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { CustomElementComponent } from './custom-element/custom-element.component';
import {createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [
    CustomElementComponent
  ],
  entryComponents: [
    CustomElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(CustomElementComponent, { injector });
    customElements.define('custom-element', customElement);
  }

  ngDoBootstrap() { }
}
