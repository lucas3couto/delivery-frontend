import React from 'react'
import * as S from './styled'
import { Badge, Typography } from '@material-ui/core'
import { MdShoppingCart } from 'react-icons/md'

const AlertCart = ({
    quantity,
    total,
    push

}) => {

    const TextReal = (value) => {
        return (`R$${value.toFixed(2).toString().replace('.', ',')}`)
    }

    return (
        <S.Alert onClick={() => push('')}>
            <Badge badgeContent={quantity} color="primary">
                <MdShoppingCart size={24} color="#fff" />
            </Badge>
            <S.Text variant="h3">
                Ver sacola de compras
            </S.Text>
            <S.Text>
                {TextReal(total)}
            </S.Text>
        </S.Alert>
    )
}

export default AlertCart