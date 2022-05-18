import React, {FC} from 'react';
import styled from 'styled-components';
import {DEFAULT_USER_PIC_URL} from '../../consts';

/** Возможные размеры аватара */
type TAvatarSize = 's' | 'm' | 'l';

/**
 *
 * @property {TAvatarSize} size - Размер аватара
 * @property {string} src - Источник картинки
 */
export interface IAvatar {
    size?: TAvatarSize;
    src: string | undefined;
}

/**
 * Функция, возвращающая размер аватара.
 *
 * @param size Размер аватара;
 */
const getAvatarSize = (size?: TAvatarSize) => {
    switch (size) {
        case 'l':
            return 250;
        case 'm':
            return 100;
        case 's':
            return 50;
        default:
            return 150;
    }
};

/** Компонент возвращающий аватар пользователя в круге */
export const Avatar: FC<IAvatar> = (props) => {
    return <ProfileImage {...props} />;
};

const ProfileImage = styled.div<IAvatar>`
    background-image: ${({src}) => `url(${src || DEFAULT_USER_PIC_URL})`};
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    width: ${({size}) => getAvatarSize(size)}px;
    height: ${({size}) => getAvatarSize(size)}px;
    margin-right: ${({theme}) => theme.spacings(2)}px;
`;
