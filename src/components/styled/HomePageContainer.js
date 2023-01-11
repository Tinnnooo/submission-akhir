import styled from 'styled-components';

const HomePageContainer = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: #cecfff;

`;

const HomePageCategory = styled.div`

    width: 200px;
    display: flex;
    justify-content: center;
    padding: 20px;
    height: 100%;
    margin-top: 68px;
`;

const HomePageCategoryContent = styled.div`
    padding: 12px;
    display: flex;
    flex-direction: column;
    border: 2px solid #000;
    border-radius: 8px;
`;

const HomePageSideBar = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    height: 100%;
    align-items: center;
    padding: 15px;
    margin-top: 96px;
`;

const HomePageSidebarToggle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    text-align: center;
`;

HomePageContainer.defaultProps = {
  maxWidth: '100%',
};

export {
  HomePageContainer,
  HomePageCategory,
  HomePageCategoryContent,
  HomePageSideBar,
  HomePageSidebarToggle,
};
