import React from 'react';
import { connect } from 'react-redux';
import {selectItem} from '../../redux/shop/shop.selector';
import CustomButton from '../custom-button/custom-button.component';
import {addItem} from '../../redux/cart/cart.actions';

import './item-preview.styles.scss';

const ItemPreview = ({item,dispatch,history})=> {
    const {name,imageUrl,price} = item;
    
    return (
        <div className="item">
            <div className="item-preview" style={{
                    backgroundImage: `url(${imageUrl})`
                }}>
                <h2 className="item-title">{name}</h2>
                <div className="item-add">
                    <CustomButton className="go-back" onClick={()=> history.goBack()} inverted >go back </CustomButton>
                    <CustomButton className="add-to-cart" onClick={()=> dispatch(addItem(item))} inverted > ADD to cart </CustomButton>
                    <span className="item-price">${price}</span> 
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state,ownProps) => ({
    item : selectItem(ownProps.match.params.itemId,ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(ItemPreview);