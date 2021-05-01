import React from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
import {selectCollection} from '../../redux/shop/shop.selector';
import CollectionItem from '../../components/collection-item/collection-item.component';

// import './collection.styles.scss';

import {CollectionContainer,CollectionTitle,CollectionItemsContainer} from './collection.styles';

const CollectionPage = ({collection}) => {
    const {title,items,routeName} = collection;

    return (
        <CollectionContainer >
            <CollectionTitle>
                {title}
            </CollectionTitle>
            <CollectionItemsContainer>
            {
                Object.keys(items).map(key=>items[key]).map(item=> <CollectionItem key={item.id} routeName={routeName} item={item} />)
            }
            </CollectionItemsContainer>
        </CollectionContainer>
    )
}



const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);