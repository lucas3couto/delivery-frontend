import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Main = styled.div`
    height: 100%;
    margin-top: 25px;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`