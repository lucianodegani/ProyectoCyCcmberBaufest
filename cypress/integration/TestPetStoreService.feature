Feature: TestPestStoreService
Scenario:
  Given Services PetStore
  When I do a Post in the service
  Then I do a GET with id
  And I do a PUT in the Services
  And I do a GET with id result of the PUT
