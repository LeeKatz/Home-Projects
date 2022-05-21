import {css, StyleSheet} from "aphrodite";
import {useCallback, useState} from "react";
import React from 'react';
import {DropdownIcon} from "./DropdownIcon";

export interface GitHubIssue {
    id: number;
    title: string;
    number: number;
    body: string;
    html_url: string;
    pull_request?:string;
}

const createItemStyle = () => StyleSheet.create({
    style: {
        display: 'flex',
        'flex-flow': 'wrap',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        ':hover': {
            backgroundColor: '#C8C8C8'
        }
    }
}).style;

const createButtonStyle = () => StyleSheet.create({
    style: {
        border: 'none',
        padding: '10px',
        marginRight: '10px',
        backgroundColor: 'inherit',
    }
}).style;

const createTitleStyle = () => StyleSheet.create({
    style: {
        color: 'black',
        textDecoration: 'none',
        fontWeight: 'bold',
        ':hover': {
            color: 'blue'
        }
    }
}).style;

const createBodyStyle = () => StyleSheet.create({
    style: {
        width: '100%',
        paddingLeft: '10px',
    }
}).style;

export const IssueItem = (props:GitHubIssue) => {
    const {title, html_url, body, number} = props;
    const [isOpen, setIsOpen] = useState(false);
    const itemStyle = createItemStyle();
    const buttonStyle = createButtonStyle();
    const titleStyle = createTitleStyle();
    const bodyStyle = createBodyStyle();

    const onClick = useCallback(() => setIsOpen(prev => !prev), []);
    return (
            <div className={css(itemStyle)}>
                <button className={css(buttonStyle)} onClick={onClick}><DropdownIcon isOpen={isOpen}/></button>
                <div>
                    <a className={css(titleStyle)} href={html_url} target="_blank">{title}</a>
                    <div>{`#${number}`}</div>
                </div>
                {isOpen ? <div className={css(bodyStyle)}>{body}</div> : null}
            </div>
    )
}