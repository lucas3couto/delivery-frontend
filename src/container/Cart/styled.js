import styled from 'styled-components'
import { List, ListItem, Typography, Button, Container } from '@material-ui/core'

export const Cart = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    padding: 25px 0;
`

export const Content = styled.div`
    display: flex;
    height: 100%;
    max-width: 500px !important;
    flex-direction: column;
    justify-content: space-between;
`

export const Title = styled(Typography)`
    text-align: center;

`

export const ProductsList = styled(List)`

`

export const ProductListItem = styled(ListItem)`
    flex-direction: column;
    align-items: flex-start !important;

`

export const Name = styled(Typography)`
    font-weight: 600 !important;
`

export const Info = styled(Typography)`
`

export const Action = styled.div`
    display: flex;
    flex-direction: column;
` 

export const Item = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
` 

export const ItemText = styled(Typography)`
`

export const ItemBold = styled(Typography)`
    font-weight: 600 !important;
`

export const Checkout = styled(Button)`
    margin-top: 25px !important;
`

export const Ops = styled(Typography)``