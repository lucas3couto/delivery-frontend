import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, StyledBadge } from '@material-ui/core'
import * as S from './styled'
import { Container } from '../grid'
import { connect } from 'react-redux'
import { MdShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Layout = ({
    children,
    ...props
}) => {


    const { addedItems } = props.cart


    return (
        <S.Layout>
            <S.Header>
                <AppBar position="static">
                    <Toolbar>
                        <S.Content>
                            <Link to="/">
                                <Typography edge="start" variant="h4" noWrap>
                                    Delivery
                            </Typography>
                            </Link>
                            <IconButton aria-label="cart">
                                <Link to="/cart">
                                    <S.Cart badgeContent={addedItems.length} color="secondary">
                                        <MdShoppingCart color="#fff" size={24} />
                                    </S.Cart>
                                </Link>
                            </IconButton>
                        </S.Content>
                    </Toolbar>
                </AppBar>
            </S.Header>
            <S.Main>
                {children}
            </S.Main>
        </S.Layout>
    )
}

const mapStateToProps = state => ({ cart: state.cart })
export default connect(mapStateToProps)(Layout)