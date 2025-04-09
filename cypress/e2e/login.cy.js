describe('Login Automático', () => {
    it('Faz login no site', () => {
      cy.visit('http://intranet.go.def.br/intranet/'); // Substitua pela URL correta
  
      cy.get('#apelido').type('israel-iar'); // Ajuste os seletores conforme necessário
      cy.get('#senha').type('Bws@2025!', { log: false });
      cy.get('#entrar').click();
  
      // Verifica se o login foi bem-sucedido
      cy.url().should('include', '/home/pagina-inicial') // ou qualquer parte da URL correta

    });
  });
  