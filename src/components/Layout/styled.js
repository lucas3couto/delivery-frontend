import styled from 'styled-components'
import { Badge } from '@material-ui/core'

export const Layout = styled.div`
display: flex;
height: 100%;
flex-direction: column;
`

export const Header = styled.div`
    display: flex;
    flex: 1;
`

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    flex: 15;
`

export const Cart = styled(Badge)`
    font-size: 50px!important;
`

export const Content = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`