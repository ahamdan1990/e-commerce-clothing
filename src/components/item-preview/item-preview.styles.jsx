import styled , {css} from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

const addButtonStyle = css ` 
    padding: 0 10%;
`

const goBackButtonStyle = css ` 
    padding: 0 1%;
`

export const ItemPreviewWrapper = styled.div ` 
    position: relative;
    overflow: hidden;
`
const getButtonStyles = props => {
    if (props.add) {
        return addButtonStyle;
    }

    return goBackButtonStyle;
}

export const ItemPreviewContainer = styled.div ` 
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background-image: ${({imageUrl}) => `url(${imageUrl})`};
        background-repeat: repeat;
        background-size: cover;
        background-position: center;
        width: 80vw;
        height: 80vh;
        margin: 0 auto;
`

export const ItemPreviewTitle = styled.h2 ` 
        letter-spacing: 1.5px;
        color: #FF1493;
        font-size: 50px;
        margin-top: 0;
        align-self: flex-start;
`

export const ItemPreviewButtons = styled.div ` 
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

        & span {
            color: #FF1493;
            letter-spacing: 1.5px;
            font-size: 50px;
        }
`

export const ItemPreviewButtonsStyle = styled(CustomButton) ` 
    border: 1px solid #FF1493;
    background-color: transparent;
    color: #FF1493;
    ${getButtonStyles}
`