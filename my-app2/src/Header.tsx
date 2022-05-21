interface HeaderProps{
    title: string;
}
export const Header = (props: HeaderProps) => {
    const {title} = props;
    return <h1>{title}</h1>
}