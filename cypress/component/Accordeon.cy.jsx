import React from 'react';
import { mount } from '@cypress/react';
import data from '../../src/components/accordeon/data';
import Accordian from '../../src/components/accordeon/index';

describe('Accordian Component', () => {
  
  it('displays data correctly', () => {
    mount(<Accordian />);
    data.forEach(item => {
      cy.contains(item.question).should('be.visible');
    });
  });

  it ('should unfold an accordeon item', () => {
    
    const testItem = 1
    const index = testItem - 1

    mount(<Accordian />);
    cy.get(`[data-testid="title-${testItem}"]`).click()
    cy.contains(`${data[index].answer}`).should('be.visible')

  })

  it('expands and collapses items correctly', () => {
    mount(<Accordian />);
    data.forEach((item, index) => {
      cy.contains(item.question).click()
      cy.contains(item.answer).should('be.visible')
      cy.contains(item.question).click()
      cy.contains(item.answer).should('not.exist')
    });
  });

  it (`should colapse an item if to click to another item`, () => {

    let testItem = 1
    const index = testItem - 1

    mount(<Accordian />);
     
    cy.get(`[data-testid="title-${testItem}"]`).click()
    cy.contains(`${data[index].answer}`).should('be.visible')
    cy.get(`[data-testid="title-${testItem++}"]`).click()
    cy.contains(`${data[index].answer}`).should('not.exist')

  })
});
