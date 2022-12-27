/**
 * - Login spec
 *
 *  - should display login page correctly
 *  - should display alert when username is empty
 *  - should display alert when password is empty
 *  - should display alert when username and password are wrong
 *  - should display homepage when username and password are correct
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should diplay login page correctly', () => {
    // memverifikasi elemen yang harus tampak pada halaman login
    cy.get('input[placeholder="Email Address"]').should('be.visible');
    cy.get('input[placeholder="Password"]').should('be.visible');
    cy.get('button').contains(/^Login$/).should('be.visible');
  });

  it('should display alert when username is empty', () => {
    // login without fill email
    cy.get('button').contains(/^Login$/).click();

    // window.alert will display message from API
    cy.on('window.alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    // mengisi email
    cy.get('input[placeholder="Email Address"]').type('user@gmail.com');

    // klik tombol login tanpa mengisi password
    cy.get('button').contains(/^Login$/).click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window.alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when email and password are wrong', () => {
    // mengisi email dan password
    cy.get('input[placeholder="Email Address"]').type('user@gmail.com');
    cy.get('input[placeholder="Password"').type('wrong_password');

    // menekan tombol login
    cy.get('button').contains(/^Login$/).click();

    // memverifikasi window.alert untuk menampilkan pesan dan API
    cy.on('window.alert', (str) => {
      expect(str).to.equal('Email or password is wrong');
    });
  });

  it('should display homepage when email dan password are correct', () => {
    // mengisi email dan password yang benar
    cy.get('input[placeholder="Email Address"]').type('qwerty@gmail.com');
    cy.get('input[placeholder="Password"]').type('password');

    // menekan tombol Login
    cy.get('button').contains(/^Login$/).click();

    // memverifikasi bahwa elemen yang berada di homepage ditampilkan
    cy.get('nav').contains(/^Threads$/).should('be.visible');
    cy.get('button').contains(/^Logout$/).should('be.visible');
  });
});
