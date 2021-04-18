import React from 'react';
// import SHOP_DATA from './shop.data.js';
import {connect} from 'react-redux';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import {shopDataSelector} from '../../redux/shop-data/shop-data.selector';
const ShopPage = ({collections}) => {

        return (
            <div className="shop-page">
                {collections.map(({id, ...otherCollectionProps}) => {
                    return (
                        <CollectionPreview key={id} {...otherCollectionProps} />
                    )
                })}
            </div>
        )
}


const mapStateToProps = state => ({
    collections:shopDataSelector(state),
})

export default connect(mapStateToProps)(ShopPage);