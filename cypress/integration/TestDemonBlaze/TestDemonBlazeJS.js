import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import indexPage from '../../Soporte/Pages/index';


var v_id_user = Math.round(Math.random()*10000);
        var v_userName = 'LucianoDeg'+v_id_user
        var v_pass = 'chano'


Given ('Go to Page demonblaze', () => {
    cy.visit('https://www.demoblaze.com/index.html');
    cy.wait(2000)
})

When ('I Sign Up', () => {
    //-----------SIGN UP ---------------------------------------------------------------------------
       
        
    indexPage.clickBtnSignUpPage('a');
    //cy.get('#signin2').click();
    
   
    //userNameSignUp
    indexPage.editUserNameSignUp(v_userName);
    //cy.get('#sign-username').type(v_userName); 
    //Pass
    indexPage.editPasswordSignUp(v_pass);

    //selecciono el boton SignUp
    indexPage.clickBtnSignUp('click');
    cy.wait (2000);

    //-----------FIN DE SIGN UP --------------------------------------------------------------------
})


Then ('I Login', () => {
   //----------- LOGIN ----------------------------------------------------------------------------
        
        //me logueo
        indexPage.clickBtnLoginPage('Click');
        
        //userNameSignUp
        indexPage.editUserNameLogin(v_userName);
        //Pass
        indexPage.editPasswordLogin(v_pass);

        //selecciono el boton Login
        indexPage.clickBtnLogin();
        cy.wait (2000);

           //-----------FIN DE LOGIN --------------------------------------------------------------------

})

 Then ('I Load a laptop in the cart', () => {
    //-----------CARGO Una laptop en el carrito------------------------------------------------------
    indexPage.clickLinkLaptop();

    indexPage.clickLinkLaptopContains();

    indexPage.clickAddToCart();

    //indexPage.clickAlertPopUpProductoAgregado();

    indexPage.clickLinkCart();
 
 })

 Then ('I validate the laptop', () => {
    //valido que la laptop este en el carrito
    indexPage.validarTablaCart();
        
    // 
 
 })

 Then ('I Log Out', () => {
    //Log Out
    indexPage.clickBtnLogOut();
    indexPage.clickBtnHome();
 })

