import { expect, Page } from "@playwright/test";
import { page } from '../support/hooks';

export default class HomePage {

    static Elements = {
        // getTableRowByCellName: "//tbody//tr[contains(@class,'competitionTableRow')]//td[contains(text(),'"+this.cellName+"')]//parent::tr",

    }

    static async verifyCurrentUrl(currentUrl : string) {
        await expect( await page.url()).toBe(currentUrl);
    }
    static async navigateToHomePage(url: string) {
        await page.goto(url);
        await expect( await page.url()).toBe('https://www.dailymail.co.uk/home/index.html');
        await page.getByRole('button', { name: 'Got it' }).click();
    }

    static async openPremierLeagueLink() {
        await page.getByRole('link', { name: 'Sport', exact: true }).first().click();
        await page.getByRole('link', { name: 'Premier League'}).click();
        await page.waitForTimeout(1000);
    }

    static async openPremierLeagueTable() {
        expect(await page.locator("//div[@data-xp-module-id='tabsStatic-xpmodule']")).toBeVisible({ timeout: 30000 });
        await page.getByRole('link', { name: 'Tables' }).click();
        await expect(await page.getByText('Premier League Table')).toBeVisible({ timeout: 30000 });       
    }

    static async verifyPosPTSFromPremiumLeagueTable(rows:any) {
        var data = [];
        for(let i=0; i< rows.length; i++) {
            console.log();
            let name = rows[i]['Team Name'];     
            let cellElement = "//tbody//tr[contains(@class,'competitionTableRow')]//td[contains(text(),'"+name+"')]//parent::tr//td";
            await page.locator(cellElement).first().click(); //click on this element to scrool into this view automatically
            let pos = await page.locator(cellElement).first().textContent();
            let pts = await page.locator(cellElement).last().textContent();
            data[i] = {name,pos, pts};
        }
        console.table(data);
    }


}