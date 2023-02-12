import {atom} from 'recoil';

export const menuState = atom({
    key     : 'menuState',
    default : false
});
export const modalState = atom({
    key     : 'modalState',
    default : false
});
export const popupState = atom({
    key     : 'popupState',
    default : false
});