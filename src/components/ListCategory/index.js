import React from 'react'
import { Card, CardActionArea, Typography, CardContent, Container } from '@material-ui/core'
import CardButton from '../CardButton'

import * as S from './styled'

const ListCategory = ({
    categories,
    history
}) => {


    return (
        <S.Main>
            {categories && (
                <Container>
                    <S.Content>
                        {categories.map(item => (
                            <CardButton key={item._id} item={item} push={history.push} />
                        ))}
                    </S.Content>
                </Container>
            )}
        </S.Main>
    )
}


export default ListCategory