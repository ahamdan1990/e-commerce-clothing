import React from 'react';

import {
    ItemPreviewWrapper,
    ItemPreviewContainer,
    ItemPreviewTitle,
    ItemPreviewButtons,
    ItemPreviewButtonsStyle
} from './item-preview.styles';


const ItemPreview = ({item,addItem,history})=> {
    const {name,imageUrl,price} = item;
    
    return (
        <ItemPreviewWrapper>
            <ItemPreviewContainer imageUrl={imageUrl}>
                <ItemPreviewTitle>{name}</ItemPreviewTitle>
                <ItemPreviewButtons>
                    <ItemPreviewButtonsStyle onClick={()=> history.goBack()} inverted > go back </ItemPreviewButtonsStyle>
                    <ItemPreviewButtonsStyle add onClick={()=> addItem(item)} inverted > ADD to cart </ItemPreviewButtonsStyle>
                    <span>${price}</span> 
                </ItemPreviewButtons>
            </ItemPreviewContainer>
        </ItemPreviewWrapper>
    )
}

export default ItemPreview;