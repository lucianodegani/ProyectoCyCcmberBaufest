
class indexPage {

    constructor(){
        //controles de login
        this.btnLoginPage = '#login2'
        this.userNameFieldLogin = '#loginusername'
        this.passwordFieldLogin = '#loginpassword'
        this.btnLogin = '#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'
        

        //controles de sign Up
        this.btnSignUpPage = '#signin2'
        this.userNameFieldSignUp = '#sign-username'
        this.passwordFieldSignUp = '#sign-password'
        this.btnSignUp = '#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary'

        //Laptops
        this.linkLaptop = 'Laptops'

        this.linkLaptopSony = 'Sony vaio i7'
      
        this.btnAddToCart = '.col-sm-12 > .btn'
        
        this.btnCartPage = '#cartur'

        this.tableCart = '.table table-bordered table-hover table-striped'

        this.rowTableProduct = '.success > :nth-child(2)'

        this.BtnLogOut = '#logout2'

        this.btnHome = '.active > .nav-link'
    }

    editUserNameSignUp = (element) => {
        cy.get(this.userNameFieldSignUp).type(element);
        cy.wait(1000);
    }

    editPasswordSignUp = (element) => {
        cy.get(this.passwordFieldSignUp).type(element);
        cy.wait(1000);
    }


    editUserNameLogin = (element) => {
        cy.get(this.userNameFieldLogin).type(element);
        cy.wait(1000);
    }

    editPasswordLogin = (element) => {
        cy.get(this.passwordFieldLogin).type(element);
        cy.wait(1000);
    }

    clickBtnSignUpPage = (a) => {
        cy.get(this.btnSignUpPage).click();
        cy.wait(1000);
    }

    clickBtnSignUp = (a) => {
        cy.get(this.btnSignUp).click();
        //cy.wait(1000);
    }

    clickBtnLogin = () => {
        cy.get(this.btnLogin).click();
        cy.wait(1000);
    }

    clickBtnLoginPage = (a) => {
        cy.get(this.btnLoginPage).click();
        cy.wait(1000);
    }

    clickLinkLaptop = () => {
        cy.contains(this.linkLaptop).first().click();
        cy.wait(1000);
    }

    clickLinkLaptopContains = () => {
        cy.contains(this.linkLaptopSony).first().click();
        cy.wait(1000);
    }
    
    clickLinkCart = () => {
        cy.get(this.btnCartPage).click();
        cy.wait(1000);
    }

    clickAddToCart = () => {
        cy.get(this.btnAddToCart).click();
        cy.wait(1000);
    }

    clickAlertPopUpProductoAgregado = () => {
        cy.get('[name="alert"]').click();
    }
    
    validarTablaCart = () => {
        cy.get('.success > :nth-child(2)').should('contain',this.linkLaptopSony);
        cy.contains(this.linkLaptopSony);
    }
       
    clickBtnLogOut= () => {
        cy.get(this.BtnLogOut).click();
    
    }

    clickBtnHome= () => {
        cy.get(this.btnHome).click();
        cy.wait(1000)
    }

    

}

export default new indexPage();