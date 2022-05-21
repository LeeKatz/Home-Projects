import { StyleSheet, css } from 'aphrodite';
import { GitHubIssue, IssueItem } from './IssueItem';

interface ContentProps {
    data: Array<GitHubIssue>
}

const createStyle = () => StyleSheet.create({
    style: {
        margin: '0 auto',
        maxWidth: '1200px',
        display: 'grid',
        rowGap: '1px',
        backgroundColor: 'black',
        border: '1px solid black',
    }
}).style;

export const Content = (props:ContentProps) => {
    const { data } = props;
    const style = createStyle();

    return (
        <div className={css(style)}>
            {data.map(item => <IssueItem key={item.id} {...item}/>)}
        </div>
    )
}