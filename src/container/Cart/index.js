import React from 'react'
import { connect } from 'react-redux'
import * as S from './styled'
import { Container, Divider, Button } from '@material-ui/core'
import { MdAdd, MdRemove } from 'react-icons/md'

const Cart = (props) => {

    const { addedItems, total } = props.cart
    const priceReal = (value) => {
        return (`R$${value.toFixed(2).toString().replace('.', ',')}`)
    }

    const ship = 3

    return (
        <S.Cart>
            {addedItems.length > 0 ? (
                <Container maxWidth="sm">
                    <S.Content>
                        <S.Title variant="h4">
                            Sacola
                        </S.Title>
                        <S.ProductsList>
                            {addedItems.map(item => (
                                <div>
                                    <S.ProductListItem>
                                        <S.Name>
                                            {item.name}
                                    </S.Name>
                                        <S.Info>
                                            {priceReal(item.price)}
                                    </S.Info>
                                        <S.Info>
                                            {`Quantidade: ${item.quantity}`}
                                        </S.Info>
                                    </S.ProductListItem>
                                    <Divider />
                                </div>
                            ))}
                        </S.ProductsList>
                        <S.Action>
                            <S.Item>
                                <S.ItemText>
                                    Subtotal
                            </S.ItemText>
                                <S.ItemText>
                                    {priceReal(total)}
                                </S.ItemText>
                            </S.Item>
                            <S.Item>
                                <S.ItemText>
                                    Entrega Padrão
                            </S.ItemText>
                                <S.ItemText>
                                    R$ 3
                            </S.ItemText>
                            </S.Item>
                            <S.Item style={{ marginTop: 15 }}>
                                <S.ItemBold>
                                    Total
                            </S.ItemBold>
                                <S.ItemBold>
                                    {priceReal(total + ship)}
                                </S.ItemBold>
                            </S.Item>
                        </S.Action>
                        <S.Checkout variant="contained" color="primary">Checkout</S.Checkout>
                    </S.Content>
                </Container>
            ) : (
                <S.Ops>
                    Você não possúi produtos na sacola. =/
                </S.Ops>
            )}
        </S.Cart>
    )
}

const mapStateToProps = state => ({ cart: state.cart })
export default connect(mapStateToProps)(Cart)