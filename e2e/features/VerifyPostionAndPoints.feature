@regression
Feature: Get the Position and Points for the given team from the Premier League table
  JIRA_ID: Test_1
  Description: This feature retrieves the Pos and PTS for the given team

  Background:
  Given User navigates to Home page 'https://www.dailymail.co.uk' and accept cookies
   
  @sport
  Scenario: Scenario 4: Get the Position and Points for the given team from the Premier League table.
    When I Click on Sport menu and scroll down to the Premier League table
    And Click on the tables 
    Then Retrieve the Pos and PTS for the given team
     | Team Name    |
     | Tottenham    |
     | Arsenal      |
     | Man City     |
     | Liverpool    |
     | Aston Villa  |
     | Brighton     |
     | Sheff Utd    |
     | Man Utd      |