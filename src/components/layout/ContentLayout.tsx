import React, {FC} from 'react';
import styled from 'styled-components';
import {theme} from '../../theme/theme';

interface IContentLayout {
    children?: React.ReactNode;
}

export const ContentLayout: FC<IContentLayout> = ({children}) => {
    return <Layout>{children}</Layout>;
};

const Layout = styled.div`
    width: 100%;
    height: calc(100vh - ${theme.dimensions.page.header.height}px);
    max-width: ${({theme}) => theme.dimensions.layout.width}px;
    margin: 0 auto;
    padding: ${({theme}) => `0 ${theme.spacings(2.5)}px`};
`;
