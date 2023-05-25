describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.contains('Gestion Stock');
    cy.contains('Gérer efficacement votre stock');
    cy.contains('Mentions Légales');
    cy.contains('Voir le stock').click();
    cy.get('a[title="Ajouter"]').click();

    const uuid = () => Cypress._.random(0, 1e6);
    const id = uuid();
    const testname = `outil${id}`;
    cy.get('input').eq(0).clear().type(testname);
    cy.get('input').eq(1).clear().type('10.50');
    cy.get('input').eq(2).clear().type('23');
    cy.contains('button', 'Ajouter').click();

    cy.contains('tbody tr td.name', testname).click();
    cy.get('button[title="Supprimer"]').click();
  });
});
