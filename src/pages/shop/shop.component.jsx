import React from 'react';
// import SHOP_DATA from './shop.data.js';
import {connect} from 'react-redux';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

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


const mapStateToProps = ({shop_data:{SHOP_DATA}}) => ({
    collections:SHOP_DATA,
})

export default connect(mapStateToProps)(ShopPage);