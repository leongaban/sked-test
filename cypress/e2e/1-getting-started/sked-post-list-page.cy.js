/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Sked social media account posts', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.waitForReact();
  });

  it('displays two social media accounts in sidebar by default', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('.accounts-view .social-media-account-toggle').should('have.length', 2);

    // We can go even further and check that the default todos each contain
    // the correct text. We use the `first` and `last` functions
    // to get just the first and last matched elements individually,
    // and then perform an assertion with `should`.
    cy.get('.select-all p').should('have.text', 'Select All Accounts');
    cy.get('.sidebar .social-media-account-toggle').first().should('have.text', 'JFB account');
    cy.get('.sidebar .social-media-account-toggle').last().should('have.text', 'JIG account');
  });

  it('displays two social media posts in accounts view', () => {
    cy.get('.post-row').should('have.length', 2);
    cy.get('.post-info').should('have.length', 2);
    cy.get('.sked-logo').should('have.length', 2);

    cy.get('.post-row').first().should('have.text', 'Sat 30 Oct, 6:00pmJFB accountCaption:caption');
    cy.get('.post-row').last().should('have.text', 'Sat 30 Oct, 9:00amJIG accountCaption:test');
  });

  it('it should validate AccountsSideBar with component name', () => {
    cy.react('AccountsSideBar').should('have.length', '1');
  });

  it('it should validate Posts with component name', () => {
    cy.react('Posts').should('have.length', '1');
  });

  it('can toggle OFF all social media accounts', () => {
    cy.react('AccountsSideBar').find('#check-all').click();
    cy.get('.post-row').should('have.length', 0);
  });

  it('can toggle ON all social media accounts', () => {
    cy.react('AccountsSideBar', {
      props: {
        accounts: [
          {name: 'FB account', socialMedia: 'facebook', initial: 'J'},
          {name: 'IG account', socialMedia: 'instagram', initial: 'J'}
        ],
        filterPosts: () => {}
      }
    });

    cy.get('.post-row').should('have.length', 2);
  });

  it('can toggle off FB account', () => {
    cy.react('AccountsSideBar').find('#check0').click();
    cy.get('.post-row').should('have.length', 1);
    cy.get('.post-name').should('have.text', 'IG account');
  });

  it('can toggle off IG account', () => {
    cy.react('AccountsSideBar').find('#check1').click();
    cy.get('.post-row').should('have.length', 1);
    cy.get('.post-name').should('have.text', 'FB account');
  });
});
