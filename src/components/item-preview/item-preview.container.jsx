import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionLoaded,selectItem } from "../../redux/shop/shop.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import ItemPreview from "./item-preview.component";
import {addItem} from '../../redux/cart/cart.actions';

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state),
    item: (state,ownProps) => selectItem(ownProps.match.params.itemId,ownProps.match.params.collectionId)(state)
})

const ItemPreviewContainer = compose(
    connect(mapStateToProps,mapDispatchToProps),
    WithSpinner
)(ItemPreview);

export default ItemPreviewContainer;