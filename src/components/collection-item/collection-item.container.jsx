import { connect } from "react-redux";
import { withRouter } from 'react-router';
import { compose } from "redux";
import CollectionItem from './collection-item.component';
import { addItem } from '../../redux/cart/cart.actions';

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

const CollectionItemContainer = compose(
    withRouter,
    connect(null,mapDispatchToProps)
)(CollectionItem)

export default CollectionItemContainer;