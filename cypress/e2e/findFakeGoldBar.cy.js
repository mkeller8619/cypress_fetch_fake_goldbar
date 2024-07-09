describe('Gold Bar Weighing Test', () => {
  beforeEach(() => {
      // The URL should point to the page where the weighing simulation is setup
      cy.visit('http://sdetchallenge.fetch.com/');
  });

  it('Identifies the fake gold bar', () => {
      const groups = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];

      // Perform the first weighing
      performWeighing(groups[0], groups[1]).then((result) => {
        cy.xpath("(//button[@id='reset'])[2]").click();
          let suspectedGroupIndex = result === 'left' ? 0 : (result === 'right' ? 1 : 2);
          let suspectedGroup = groups[suspectedGroupIndex];

          // Perform the second weighing within the suspected group
          performWeighing([suspectedGroup[0]], [suspectedGroup[1]]).then((secondResult) => {
            cy.xpath("(//button[@id='reset'])[2]").click();
              let suspectedBarIndex = secondResult === 'left' ? 0 : (secondResult === 'right' ? 1 : 2);
              if (secondResult === 'equal') {
                  suspectedBarIndex = 2;  // Third bar is the fake one if equal
              }

              // Verify the suspected fake bar
              cy.log(`The fake gold bar is number: ${suspectedGroup[suspectedBarIndex]}`);
          });
      });
  });

  function performWeighing(leftGroup, rightGroup) {
      // This function assumes there are inputs to type the bar indices and a button to perform the weighing
      leftGroup.forEach((bar, index) => {
          cy.get(`#left_${index}`).type(bar.toString());
      });
      rightGroup.forEach((bar, index) => {
          cy.get(`#right_${index}`).type(bar.toString());
      });

      cy.get('#weigh').click();

      // The result should be interpreted from the website's response, assumed to be in an element #result
      cy.wait(5000)
      return  cy.xpath("//div[text()='Weighings']/following::ol/li[last()]").invoke('text').then((text) => {
          if (text.includes('<')) {
              return 'left';
          } else if (text.includes('>')) {
              return 'right';
          } else {
              return 'equal';
          }
      });
  }
});
