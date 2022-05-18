import React from 'react';
import styled from 'styled-components';

export const Input = () => {
    return (
        <InputContainer>
            <InputContent placeholder="Search" />
        </InputContainer>
    );
};

const InputContainer = styled.div`
    margin: 0 auto;
    width: 375px;
    border-radius: 30px;
    border: 1px solid #dcdcdc;
    padding-left: 24px;

    input::placeholder {
        color: #dcdcdc;
    }
`;

const InputContent = styled.input`
    height: 30px;
    width: 300px;
    font-size: 16px;
    border: none;
    outline: none;
`;
