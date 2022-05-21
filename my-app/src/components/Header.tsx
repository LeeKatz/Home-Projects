import { StyleSheet, css } from 'aphrodite';

interface HeaderProps {
    title:string;
}
const createStyle = () => StyleSheet.create({
    style: {
        margin: '0 auto',
        width: 'fit-content',
    }
}).style;

export const Header = (props:HeaderProps) => {
    const {title} = props;
    const style = createStyle();
    return (
        <h1 className={css(style)}>{title}</h1>
    )
}