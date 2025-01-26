describe('Type and clear demo', () => {
  it('should type and clear elements', () => {
    //

    //cy.get('#hide-textbox').trigger('focus', 'center', { force: true });
    //cy.get('#hide-textbox').trigger('click', 'center', { force: true });

    //cy.get('#mousehover').trigger('mouseover');
    //cy.get("div.mouse-hover-content a[href='#top']").click({ force: true });

    //cy.visit('https://www.amazon.com/');
    //cy.get('#nav-link-accountList').trigger('mouseover');
    // cy.get("a[href='/gp/css/homepage.html?ref_=nav_AccountFlyout_ya']").click({
    //  force: true,
    //});

    //cy.xpath("//span[normalize-space()='Account']").click();

    //cy.xpath("//span[normalize-space()='Video Purchases & Rentals']").click();

    //cy.get("a[href='/gp/css/homepage.html?ref_=nav_AccountFlyout_ya']").trigger(
    //  'mouseover'
    //);
    //cy.wait(500);
    //cy.get("a[href='/gp/css/homepage.html?ref_=nav_AccountFlyout_ya']").click();

    cy.visit('https://www.ebay.com/');
    cy.wait(200);
    cy.get('#gdpr-banner-decline').click();

    cy.wait(100);
    cy.get("a[href='https://www.ebay.com/mys/home?source=GBH']").trigger(
      'mouseover'
    );

    cy.wait(200);

    cy.get(
      "a[href='https://www.ebay.com/mys/home?CurrentPage=MyeBayAllSelling&ssPageName=STRK:ME:LNLK:MESX&source=GBH']"
    ).click({ force: true });
  });
});
