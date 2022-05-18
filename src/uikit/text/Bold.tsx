import styled from 'styled-components';

// TODO убрать проп bold
export interface IBoldProps {
    bold?: boolean;
}
export const Bold = styled.b<IBoldProps>`
    font-weight: ${({bold, theme}) => (bold ? theme.typography.weight.bold : theme.typography.weight.regular)};
`;
