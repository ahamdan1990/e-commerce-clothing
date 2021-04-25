import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectCollectionForPreview} from '../../redux/shop/shop.selector';
import CollectionPreview from '../collection-preview/collection-preview.component';

import './collection-overview.styles.scss';

const ColletctionOverview = ({collections}) => (
    <div className='collections-overview'>
        {collections.map(({id, ...otherCollectionProps}) => {
            return (
                <CollectionPreview key={id} {...otherCollectionProps} />
            )
        })}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(ColletctionOverview);