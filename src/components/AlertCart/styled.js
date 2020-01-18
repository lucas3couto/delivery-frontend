import styled from 'styled-components'
import { Typography } from '@material-ui/core'
import px2vw from '../../utils/px2vw'

export const Alert = styled.div`
    width: 100%;
    height: 50px;
    background-color: #ed454f;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 25px;
`

export const Text = styled(Typography)`
    color: #fff;
    font-size: ${px2vw(50)} !important;
    font-weight: 800 !important;

    @media(min-width: 768px){
        font-size: ${px2vw(30)} !important;
    }

    @media(min-width: 1280px){
        font-size: ${px2vw(16)} !important;
    }
`