@regression
Feature:  Verify the video player functionality.
  JIRA_ID: Test_2
  Description: This feature retrieves the Pos and PTS for the given team

  Background:
  Given User navigates to Video page 'https://www.dailymail.co.uk/video/index.html' and accept cookies
   
  @video
  Scenario: Scenario 3: Verify the video player functionality. 
    Given Click on Video in page to begin playback
    When Click the video again to pause playback
    # And Click on the forward arrow to change to the next video
    # Then Click on the back arrow to navigate to the previous video
    # When video is finished then next video should autoplay
    # And Click on the speaker icon to mute the video
    # And Click on the speaker icon again to unmute the video
