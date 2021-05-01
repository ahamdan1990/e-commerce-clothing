import styled from 'styled-components';
import {Link} from 'react-router-dom';

//We dont need the css block to pass it into component cz we used the OptionLink 'as' property
// const OptionContainerStyles = css`
//       cursor: pointer;
//       padding: 10px 15px;
// `;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

// here we can pass to the new component a defined one using styled(component Name) so it will be as what the use of it
export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;

export const OptionsContainer = styled.div` 
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
    cursor: pointer;
    padding: 10px 15px;
`;

// export const OptionDiv = styled.div`
//     ${OptionContainerStyles}
// `;

