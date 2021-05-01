import styled ,{css} from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

const visible = css `
      max-height: 380px;
      opacity: 1;
`

const notVisible = css `
      opacity: 0;
      & button {
        display: none;
      }
`

const checkIfHidden = ({hidden}) => {
    if (hidden) {
        return notVisible;
    };
    return visible;
}

export const CartDropdownContainer = styled.div `
    position: absolute;
    width: 240px;
    max-height: 0;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
    transition: max-height  .2s ease-in-out,
    opacity .2s ease-in-out;
    ${checkIfHidden}
`

export const CartDropdownItemsContainer = styled.div `
      height: 240px;
      display: flex;
      flex-direction: column;
      overflow: scroll;
      position: relative;
`

export const CartDropdownEmptyMessage = styled.span `
    font-size: 18px;
    margin: 50px auto;
`

export const CartDropdownCheckoutButton = styled(CustomButton)`
    margin-top: auto;
`