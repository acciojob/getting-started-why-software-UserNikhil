//your code here
cy.get("div").then((span) => {
  const text = span.text().trim();
  cy.log(text); // Log the actual text
  expect(text).to.eq(`Welcome to the world of Web development`);
});