import styled from 'styled-components';

const LoginPageContainer = styled.div`
    max-width: 100%;
    background-color: #cccfd1;
    min-height: 100vh;
`;

const LoginPageHeader = styled.div`
    display: flex;
    background-color: #66757F;
    padding: 10px;
    width: 100%;
    position: fixed;
`;

const LoginPageContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const LoginPageInput = styled.article`
    position: relative;
    width: 350px;
    width: 350px;
    padding: 20px 50px 20px 50px;
    border: 2px solid rgba(1, 128, 49, 0.411);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.411);
    `;

export {
  LoginPageContainer,
  LoginPageHeader,
  LoginPageContent,
  LoginPageInput,
};
