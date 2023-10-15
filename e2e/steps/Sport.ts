import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import  HomePage  from '../pages/HomePage';
import { page } from '../support/hooks';

setDefaultTimeout(60 * 1000 * 2)

Given('User navigates to Home page {string} and accept cookies', async function (url) {
    await HomePage.navigateToHomePage(url);
    // capture screenshot and attach it to cucumber report
    this.attach(await page.screenshot(),"image/png");
  });

When('I Click on Sport menu and scroll down to the Premier League table', async function () {
    await HomePage.openPremierLeagueLink();
    // capture screenshot and attach it to cucumber report
    this.attach(await page.screenshot(),"image/png");
});


When('Click on the tables', async function () {
    await HomePage.openPremierLeagueTable();
    // capture screenshot and attach it to cucumber report
    this.attach(await page.screenshot(),"image/png");
});

Then('Retrieve the Pos and PTS for the given team', async function (table) {
    let rows = table.hashes();
    await HomePage.verifyPosPTSFromPremiumLeagueTable(rows);
    // capture screenshot and attach it to cucumber report
    this.attach(await page.screenshot(),"image/png");
});