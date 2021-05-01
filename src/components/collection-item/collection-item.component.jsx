import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import './collection-item.styles.scss';
import { withRouter } from 'react-router';

const CollectionItem = ({item,addItem,history,routeName,path}) => {

    const {imageUrl,name,price} = item;
    return (
    <div className="collection-item">
        <div 
            className="image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            onClick={()=> history.push(`${path ? path+'/':''}${routeName}/${item.id}`)}
        />

        <div className="collection-footer">
            <span className="name">{name}</span>
            <span className="price">${price}</span>
        </div>
        <CustomButton onClick={()=> addItem(item)} inverted > ADD to cart </CustomButton>
    </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
})

export default withRouter(connect(null,mapDispatchToProps)(CollectionItem));