Feature: TestDemonBlaze
Scenario:
  Given Go to Page demonblaze
  When I Sign Up
  Then I Login
  And I Load a laptop in the cart
  And I validate the laptop
  And I Log Out