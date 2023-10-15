import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import VideoPage from "../pages/VideoPage";
import { page } from "../support/hooks";

Given('User navigates to Video page {string} and accept cookies', async function (url) {
  await VideoPage.navigateToVideoPage(url);
  // capture screenshot and attach it to cucumber report
  this.attach(await page.screenshot(),"image/png");
  });

When('Click on Video in page to begin playback', async function () {
  await VideoPage.playVideo();
  // capture screenshot and attach it to cucumber report
  this.attach(await page.screenshot(),"image/png");
  
});

When('Click the video again to pause playback', async function () {
  await VideoPage.pauseVideo();
  // capture screenshot and attach it to cucumber report
  this.attach(await page.screenshot(),"image/png");
  
});

When('Click on the forward arrow to change to the next video', async function () {
  await VideoPage.playNextVideo();
  // capture screenshot and attach it to cucumber report
  this.attach(await page.screenshot(),"image/png");
});

Then('Click on the back arrow to navigate to the previous video', async function () {
  await VideoPage.playPreviousVideo();
  // capture screenshot and attach it to cucumber report
  this.attach(await page.screenshot(),"image/png");
});

Then('Click on the speaker icon to mute the video', async function () {
  await VideoPage.muteVideo();
  // capture screenshot and attach it to cucumber report
  this.attach(await page.screenshot(),"image/png");
});

Then('Click on the speaker icon again to unmute the video', async function () {
  await VideoPage.unMuteVideo();
  // capture screenshot and attach it to cucumber report
  this.attach(await page.screenshot(),"image/png");
});

When('video is finished then next video should autoplay', async function () {
  await VideoPage.verifyNextVideoAutoplay();
  // capture screenshot and attach it to cucumber report
  this.attach(await page.screenshot(),"image/png");
  
});

