import React from 'react'
import * as S from './styled'
import CATEGORY_PRODUCTS_QUERY from '../../apollo/queries/category/products'
import Query from '../../components/Query'
import { Card, CardActionArea, CardContent, Typography, CardMedia, Paper, Container, Grid } from '@material-ui/core'

const Category = (props) => {

    const priceReal = (value) => {
        return (`R$${value.toFixed(2).toString().replace('.', ',')}`)
    }

    return (
        <Query query={CATEGORY_PRODUCTS_QUERY} id={props.match.params.id}>



            {({ data: { category } }) => {
                return (
                    <Container style={{ marginTop: 15 }}>
                        <Typography variant="h4">{category.name}</Typography>
                        <Grid container spacing={3}>
                            {category.products.map(item => (
                                <Grid key={item._id} item xs={12} lg={6}>
                                    <Card style={{ marginBottom: 15 }}>
                                        <CardActionArea onClick={() => props.history.push(`/product/${item._id}`)}>
                                            <CardMedia
                                                component="img"
                                                alt="Contemplative Reptile"
                                                height="140"
                                                image={`http://localhost:1337${item.image.url}`}
                                                title="Contemplative Reptile"
                                            />
                                            <Grid direction="column" container spacing={1}>
                                                <S.Content>
                                                    <div>
                                                        <Grid item>
                                                            <Typography variant="h5">
                                                                {item.name}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item>
                                                            <Typography variant="description1">
                                                                {item.description}
                                                            </Typography>
                                                        </Grid>
                                                    </div>
                                                    <Grid item>
                                                        <Typography variant="h5">
                                                            {priceReal(item.price)}
                                                        </Typography>
                                                    </Grid>
                                                </S.Content>
                                            </Grid>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                )

            }}
        </Query>
    )
}

export default Category