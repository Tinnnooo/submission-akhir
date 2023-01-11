import styled from 'styled-components';

const RegisterPageContainer = styled.div`
    max-width: 100%;
    background-color: #cdccd1;
    min-height: 100vh;
`;

const RegisterPageHeader = styled.div`
    display: flex;
    background-color: #66757F;
    padding: 10px;
    width: 100%;
    position: fixed;
`;

const RegisterPageContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const RegisterPageInput = styled.article`
    position: relative;
    width: 350px;
    width: 350px;
    padding: 20px 50px 20px 50px;
    border: 2px solid rgba(1, 128, 49, 0.411);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.411);
`;

export {
  RegisterPageContainer,
  RegisterPageHeader,
  RegisterPageContent,
  RegisterPageInput,
};
