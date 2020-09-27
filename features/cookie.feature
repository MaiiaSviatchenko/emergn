Feature: As a user, I want to set, return and delete cookies
 
Scenario: Set, return and delete cookies
    Given a three "bar1", "bar2", "bar3" cookies
    When I retrive three cookies by request  
	Then I delete "bar1" cookie