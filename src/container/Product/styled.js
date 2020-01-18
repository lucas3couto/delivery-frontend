import styled from 'styled-components'
import { Button } from '@material-ui/core'
export const Main = styled.div`
    display: flex;
    height: 100%;
    padding-top: 20px;
    flex-direction: column;
    justify-content: space-between;

`

export const ActionBar = styled.div`
    height: 60px;
    display: flex;
    flex: 1;
    border-top: 1px solid #888;
    justify-content: space-between;

`

export const Add = styled(Button)`
    font-size: 0.7em !important;
`

export const Space = styled.div`
    display: flex;
    height: 100%;
    flex: 1;
    justify-content: row;
    justify-content: space-between;
    align-items: center;
`