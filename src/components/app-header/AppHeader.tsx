import {Form, Formik} from 'formik';
import React, {FC} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {TFilter} from '../../hooks/useMessageFilter';
import {useUserData} from '../../queries/useUserDataQuery';
import {useTheme} from '../../theme';
import {Avatar, Typography} from '../../uikit';

interface IAppHeaderProps {
    onFilterSubmit: (filter: TFilter) => any;
}

interface IFormikValues {
    text: string;
}

export const AppHeader: FC<IAppHeaderProps> = ({onFilterSubmit}) => {
    const {theme} = useTheme();

    const {data: userData} = useUserData();

    const {userFormId, userImg, userName} = userData ?? {};

    const userLink = `/user/${userFormId}`;

    const onFormSubmit = ({text}: IFormikValues) => {
        onFilterSubmit({
            text: {
                value: text,
            },
        });
    };

    return (
        <Header>
            <Container>
                <StyledTitle>
                    <Link to="/">
                        <Typography bold size="lg2">
                            {'<CryptoMess/>'}
                        </Typography>
                    </Link>
                </StyledTitle>
                <Formik<IFormikValues> initialValues={{text: ''}} onSubmit={onFormSubmit}>
                    {({handleChange}) => {
                        return (
                            <Form>
                                <InputContainer>
                                    <Input placeholder="Search" onChange={handleChange} name="text" />
                                </InputContainer>
                            </Form>
                        );
                    }}
                </Formik>

                <UserInfoContainer>
                    <Link to={userLink}>
                        <Avatar size="s" src={userImg} />
                    </Link>

                    <StyledUserNameContainter>
                        <Link to={userLink}>
                            <Typography bold>{userName}</Typography>
                            <Typography color={theme.palette.common.colors.gray.g700} size="sm">
                                {userFormId}
                            </Typography>
                        </Link>
                    </StyledUserNameContainter>
                </UserInfoContainer>
            </Container>
        </Header>
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

const Input = styled.input`
    height: 30px;
    width: 300px;
    font-size: 16px;
    border: none;
    outline: none;
`;

const Header = styled.header`
    box-shadow: ${({theme}) => theme.shadows.elevation5};
    background-color: ${({theme}) => theme.palette.background.default};
    z-index: ${({theme}) => theme.zIndex.appHeader};
    position: sticky;
    top: 0;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding-left: ${({theme}) => theme.spacings(2)}px;
    max-width: ${({theme}) => theme.dimensions.layout.width}px;
    margin: 0 auto;
    padding: ${({theme}) => `0 ${theme.spacings(2.5)}px`};
    align-items: center;
    width: 100%;
    height: ${({theme}) => theme.dimensions.page.header.height}px;
`;

const UserInfoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 180px;
`;

const StyledUserNameContainter = styled.div`
    width: 120px;
    word-wrap: break-word;
`;

const StyledTitle = styled.h2`
    width: 180px;
    margin: 0;
    background: ${({theme}) => theme.palette.background.common};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
