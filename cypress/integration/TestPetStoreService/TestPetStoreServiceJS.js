import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'


var id_mascota = Math.round(Math.random()*10);
var name_mascota
var category_perro
switch (id_mascota) {
    case id_mascota = 1:
        name_mascota = 'Pitbull'
        category_perro = 'Medium Dog'
      break;
    case id_mascota = 2:
        name_mascota = 'Dogo Argentino'
        category_perro = 'Big Dog'
      break;
      case id_mascota = 3:
        name_mascota = 'chihuahua'
        category_perro = 'small Dog'
      break;
    case id_mascota = 4:
        name_mascota = 'Border Collie'
        category_perro = 'Medium Dog'
      break;
      case id_mascota = 5:
        name_mascota = 'Gran Danes'
        category_perro = 'Big Dog'
      break;
    case id_mascota = 6:
        name_mascota = 'San Bernardo'
        category_perro = 'Big Dog'
      break;
      case id_mascota = 7:
        name_mascota = 'Pugg'
        category_perro = 'small Dog'
      break;
    case id_mascota = 8:
        name_mascota = 'Ovejero Aleman'
        category_perro = 'Big Dog'
      break;  
    default:
        name_mascota = 'caniche'
        category_perro = 'small dog'
    break;
  }

var Mascota = {
    "id": id_mascota,
    "category": {
      "id": id_mascota,
      "name": category_perro
    },
    "name": name_mascota,
    "photoUrls": [
      "string"
    ],
    "tags": [
        {
        "id": id_mascota,
        "name": name_mascota
        }
            ],
    "status": "available"
  }

Given ('Services PetStore', () => {
    //cy.wait(1000)
    cy.log('Ejecucion de las pruebas del Servicio https://petstore.swagger.io/v2/pet')
})

When ('I do a Post in the service', () => {
    cy.request('POST','https://petstore.swagger.io/v2/pet',Mascota).then((response)=>{
            expect(response.status).equal(200)
            expect(response.body.id).equal(Mascota.id)
            expect(response.body.category.id).equal(Mascota.category.id)
            expect(response.body.category.name).equal(Mascota.category.name)
            expect(response.body.name).equal(Mascota.name)
            //expect(response.body.photoUrls).equal(Mascota.photoUrls)
            expect(response.body.tags.id).equal(Mascota.tags.id)
            expect(response.body.tags.name).equal(Mascota.tags.name)
            expect(response.body.status).equal(Mascota.status)

        })
        cy.request('POST','https://petstore.swagger.io/v2/pet/',Mascota).its('body').should('include',{name:Mascota.name})
})

Then ('I do a GET with id', () => {
    cy.request('GET','https://petstore.swagger.io/v2/pet/'+Mascota.id).then((response)=>{
            expect(response.status).equal(200)
            //expect(name_mascota).to.be.equal('Pitbull')
            //expect(name_mascota).to.be.equal('Doggo')
            //expect(name_mascota).to.be.equal('chihuahua')
            //expect(response.body.category[0]).has.property.equal('name')
            expect(response.body).to.not.be.null
            expect(response.body.category.name).to.equal(Mascota.category.name)
            expect(response.body.name).to.equal(Mascota.name)
            expect(response.body.id).to.equal(Mascota.id)
            expect(response.body.tags).to.exist

            expect(response.body.status).to.equal(Mascota.status)
        })
 
 })
 
  Then ('I do a PUT in the Services', () => {
    Mascota.name = 'Pomerania'
    Mascota.category.name = 'Small dog'
    Mascota.tags.name = 'Pomerania'
    Mascota.status = 'Sold'
    
    cy.request('PUT','https://petstore.swagger.io/v2/pet/',Mascota).then((response)=>{
        expect(response.status).equal(200)
        //expect(name_mascota).to.be.equal('Pitbull')
        //expect(name_mascota).to.be.equal('Doggo')
        //expect(name_mascota).to.be.equal('chihuahua')
        //expect(response.body.category[0]).has.property.equal('name')
        expect(response.body).to.not.be.null
        expect(response.body.category.name).to.equal(Mascota.category.name)
        expect(response.body.name).to.equal(Mascota.name)
        expect(response.body.id).to.equal(Mascota.id)
        expect(response.body.status).to.equal(Mascota.status)
    })
  })

  Then ('I do a GET with id result of the PUT', () => {
    cy.request('GET','https://petstore.swagger.io/v2/pet/'+Mascota.id).then((response)=>{
            expect(response.status).equal(200)
            expect(response.body).to.not.be.null
            expect(response.body.category.name).to.equal(Mascota.category.name)
            expect(response.body.name).to.equal(Mascota.name)
            expect(response.body.id).to.equal(Mascota.id)
           //expect(response.body.tags).to.be.equal(Mascota.tags[0])
            expect(response.body.status).to.equal(Mascota.status)
            expect(response.body.tags).to.exist
        })
 
 })
