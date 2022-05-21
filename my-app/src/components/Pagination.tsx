import {css, StyleSheet} from "aphrodite";

interface PaginationProps {
    isNextDisabled:boolean
    isPrevDisabled:boolean
    onNextClick: () => void
    onPrevClick:() => void
}

const createStyle = () => StyleSheet.create({
    style: {
        margin: '0 auto',
        width: 'fit-content',
        marginTop: '10px'
    }
}).style;

export const Pagination = (props: PaginationProps)=> {
    const {isNextDisabled, onNextClick, onPrevClick, isPrevDisabled} = props;
    const style = createStyle();
    return (
        <div className={css(style)}>
            <button onClick={onPrevClick} disabled={isPrevDisabled}>Prev</button>
            <button onClick={onNextClick} disabled={isNextDisabled}>Next</button>
        </div>
    )
}