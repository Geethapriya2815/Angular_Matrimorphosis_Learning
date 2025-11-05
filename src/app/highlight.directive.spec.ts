import { HighlightDirective } from './highlight.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('HighlightDirective', () => {
  let elRefMock: ElementRef;
  let rendererMock: Renderer2;

  beforeEach(() => {
    elRefMock = new ElementRef(document.createElement('div'));
    rendererMock = jasmine.createSpyObj('Renderer2', ['setStyle']);
  });

  it('should create an instance', () => {
    const directive = new HighlightDirective(elRefMock, rendererMock);
    expect(directive).toBeTruthy();
  });
});
