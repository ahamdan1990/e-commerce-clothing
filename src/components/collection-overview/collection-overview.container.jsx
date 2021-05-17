import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectIscollectionFetching} from '../../redux/shop/shop.selector';
import WithSpinner from '../with-spinner/with-spinner.component';
import ColletctionOverview from './collection-overview.component';
import {compose} from 'redux';


const mapStateToProps = createStructuredSelector({
    isLoading: selectIscollectionFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(ColletctionOverview)

//or 

// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(ColletctionOverview))

export default CollectionsOverviewContainer;