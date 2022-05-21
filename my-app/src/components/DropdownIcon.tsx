import {css, StyleSheet} from "aphrodite";

interface DropdownIconProps {
    isOpen: boolean;
}

const createStyle = (isOpen: boolean) => StyleSheet.create({
    style: {
        width: '25px',
        height: '25px',
        transform: isOpen ? 'rotate(180deg)' : '',
        transition: '-ms-transform 400ms ease 0s, -webkit-transform 400ms ease 0s, transform 400ms ease 0s',
    }
}).style;

export const DropdownIcon = (props: DropdownIconProps) => {
    const {isOpen} = props;
    const style = createStyle(isOpen);
    return (
        <svg className={css(style)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M128 192l128 128 128-128z"/></svg>
    )
}