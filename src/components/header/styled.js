import styled from "styled-components";

export const AreaHeader = styled.div`
  background-color: #002329;
  height: 100px;
  color: #fff;

  .Container {
    padding: 5px 15px;
    display: flex;
    align-items: center;
  }
    .Title {
      font-size: 24px;
      font-weight: bold;
      margin-left: 20px;
      flex: 2;
    }
    .Logo {
    flex: 1;
      img {
        height: 80px;
        width: auto;}
    }

    nav {
      ul {
        display: flex;
        li {
          list-style: none;
          margin-left: 20px;
          cursor: pointer;}
      }
    }
`;
