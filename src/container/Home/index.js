import React from 'react'
import CATEGORY_CATEGORIES_QUERY from '../../apollo/queries/category/categories'
import Query from '../../components/Query'
import ListCategory from '../../components/ListCategory'

import * as S from './styled'

const Home = (props) => {

    return (
        <S.Main>
            <Query query={CATEGORY_CATEGORIES_QUERY} id={null}>



                {({ data: { categories } }) => {
                    return (
                        <ListCategory categories={categories} history={props.history} />
                    );
                }}
            </Query>
        </S.Main>
    )
}

export default Home