context('Material UI Selectbox', () => {

  beforeEach(() => {
    cy.visit('/');
  })

  it('should open select box and select an option (*** this test will fail ***)', () => {
    cy.get(`[data-testid="demo-simple-select-helper-value"]`).contains("Selected option is");
    cy.get(`[data-testid="demo-simple-select-helper-data-testid"]`)
      .trigger("mousedown", {force: true});
      // .invoke("mousedown"); // This will also not work

    // The mousedown action will never open the select-options, hence the next cy.get will always timeout:
    cy.get('[role=option]:contains("Thirty")').click();
    cy.get(`[data-testid="demo-simple-select-helper-value"]`).contains("Selected option is 30");
  })

  it('should open select box and select an option (*** workaround solution ***)', () => {
    cy.get(`[data-testid="demo-simple-select-helper-value"]`).contains("Selected option is");
    cy.document().then($doc => { // Use "raw" DOM methods for constructing and firing the mousedown event:
      const clickEvent = $doc.createEvent('MouseEvents');
      clickEvent.initEvent("mousedown", true, true);
      $doc.querySelector(`[data-testid="demo-simple-select-helper-data-testid"]`).dispatchEvent(clickEvent);
    });
    // Now the select options are opened:
    cy.get('[role=option]:contains("Thirty")').click();
    cy.get(`[data-testid="demo-simple-select-helper-value"]`).contains("Selected option is 30");
  })

})