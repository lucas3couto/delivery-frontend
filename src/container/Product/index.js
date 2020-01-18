import React, { useState } from 'react'
import PRODUCT_PRODUCTS_QUERY from '../../apollo/queries/product/product'
import Query from '../../components/Query'
import {
    Card,
    Typography,
    CardMedia,
    ButtonGroup,
    Container,
    Grid,
    Button,
    IconButton
} from '@material-ui/core'
import {
    Alert
} from '@material-ui/lab'
import * as S from './styled'
import { MdAdd, MdRemove, MdClose } from 'react-icons/md'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addToCart } from '../../store/actions/cartActions'

const Product = (props) => {

    const priceReal = (value) => {
        return (`R$${value.toFixed(2).toString().replace('.', ',')}`)
    }

    const [count, setCount] = useState(1)

    const handleClick = (product) => {
        const data = {
            product,
            quantity: count
        }

        props.addToCart(data)
        setOpen(true)
    }

    const [open, setOpen] = useState(false)




    return (
        <Query query={PRODUCT_PRODUCTS_QUERY} id={props.match.params.id}>
            {({ data: { product } }) => {

                const { _id, name, description, price, image } = product

                return (
                    <S.Main>
                        <Container maxWidth="sm">
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={12}>
                                            <Card>
                                                <CardMedia
                                                    component="img"
                                                    alt="Contemplative Reptile"
                                                    height="225"
                                                    image={'http://localhost:1337' + image.url}
                                                />
                                            </Card>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h5">{name}</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="subtitle1">{description}</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h5">{priceReal(price)}</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Container>
                        <div>
                            {open && (
                                <Alert
                                    severity="success"
                                    action={
                                        <IconButton
                                            aria-label="close"
                                            color="inherit"
                                            size="small"
                                            onClick={() => {
                                                setOpen(false);
                                            }}
                                        >
                                            <MdClose />
                                        </IconButton>
                                    }
                                >
                                    Produto adicionado na sacola!
                            </Alert>
                            )}
                            <S.ActionBar>
                                <Container maxWidth="sm">
                                    <S.Space>
                                        <ButtonGroup size="large" aria-label="small outlined button group">
                                            {count === 0 ? (
                                                <Button disable>
                                                    <MdRemove />
                                                </Button>
                                            ) : (
                                                    <Button onClick={() => setCount(count - 1)}>
                                                        <MdRemove />
                                                    </Button>
                                                )}
                                            <Button>{count}</Button>
                                            <Button onClick={() => setCount(count + 1)}>
                                                <MdAdd />
                                            </Button>
                                        </ButtonGroup>
                                        <S.Add onClick={() => handleClick(product)} variant="contained" color="primary" disableElevation>
                                            {`Adicionar ${priceReal(count * price)}`}
                                        </S.Add>
                                    </S.Space>
                                </Container>
                            </S.ActionBar>
                        </div>
                    </S.Main>
                )

            }}
        </Query >
    )
}

const mapStateToProps = state => ({ cart: state.cart })
const mapDispatchToProps = dispatch => bindActionCreators({ addToCart }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Product)