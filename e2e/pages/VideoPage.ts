import { expect, Page } from "@playwright/test";
import { page } from '../support/hooks';

export default class VideoPage {
    static videoTitle : string = "";
    
    static Elements = {
        videoTitleElement :'//div[@class="vjs-title-text"]'
    }

    static async navigateToVideoPage(url: string) {
        await page.goto(url);
        await expect( await page.url()).toBe('https://www.dailymail.co.uk/video/index.html');
        await page.getByRole('button', { name: 'Got it' }).click();
    }

    static async playVideo() {
        await page.locator(this.Elements.videoTitleElement).first().innerText();
        await page.getByRole('button', { name: 'f Play' }).click();
        await console.log('Playing video: ', await page.locator(this.Elements.videoTitleElement).first().innerText());
        await page.screenshot();
        await page.waitForTimeout(10000);
        // await page.pause();
    }

    static async pauseVideo() {
        await page.getByRole('button', { name: 'e Pause' }).click();
        await console.log('Paused video: ', await page.locator(this.Elements.videoTitleElement).first().innerText());
        await page.waitForTimeout(5000);
    }

    static async muteVideo() {
        await page.waitForTimeout(5000);
        await page.getByRole('button', { name: 'd Mute volume level' }).click();
        await console.log('Muted video: ', await page.locator(this.Elements.videoTitleElement).first().innerText());
        await page.waitForTimeout(10000);
    }

    static async unMuteVideo() {
        await page.getByRole('button', { name: 'a Unmute volume level' }).click();
        await console.log('UnMuted video: ', await page.locator(this.Elements.videoTitleElement).first().innerText());
        await page.waitForTimeout(10000);
    }

    static async playPreviousVideo() {
        await console.log('Playing video before clicking previous: ', await page.locator(this.Elements.videoTitleElement).first().innerText());
        await page.getByRole('button', { name: 'A Previous' }).click();
        await page.getByRole('button', { name: 'A Previous' }).click();
        await console.log('Playing video after clicking previous: ', await page.locator(this.Elements.videoTitleElement).first().innerText());
    }

    static async playNextVideo() {
        await console.log('Playing video before clicking Next: ', await page.locator(this.Elements.videoTitleElement).first().innerText());
        await page.getByRole('button', { name: 'A Skip' }).click();
        await page.waitForTimeout(5000);
        await console.log('Playing video after clicking Next: ', await page.locator(this.Elements.videoTitleElement).first().innerText());

    }

    static async verifyNextVideoAutoplay() {
        let currentVideo = await page.locator(this.Elements.videoTitleElement).first().innerText();
        await console.log('Playing video', currentVideo);
        await page.waitForTimeout(30000);
        let nextVideo = await page.locator(this.Elements.videoTitleElement).first().innerText();
        await console.log('Playing video', nextVideo);

    }


}