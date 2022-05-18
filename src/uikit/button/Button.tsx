import React, {FC} from 'react';
import BSButton, {ButtonProps} from 'react-bootstrap/esm/Button';
import styled from 'styled-components';

export const Button: FC<ButtonProps> = ({children, ...restProps}) => {
    return <StyledBSButton {...restProps}>{children}</StyledBSButton>;
};

const StyledBSButton = styled(BSButton)`
    background: ${({theme}) => theme.palette.background.common};
    display: flex;
    justify-content: center;
    width: 100px;
    font-size: 1em;
    border-radius: 20px;
    border: none;
    outline: none;
    :hover {
        color: ${({theme}) => theme.palette.background.common};
        background: ${({theme}) => theme.palette.background.commonDim};
    }
    :focus {
        outline: none;
        box-shadow: none;
    }
`;
