import React, {useEffect, useState} from 'react';
import {GitHubIssue} from "./IssueItem";
import {Pagination} from "./Pagination";
import {IssueItems} from "./IssueItems";


const GITHUB_ISSUES_ENDPOINT = "https://api.github.com/repos/Treeverse/lakeFS/issues"
const LOADING_MESSAGE = 'Loading...';
const NO_DATA_MESSAGE = 'Data is missing';
const ERROR_MESSAGE = 'We got an error. Please try again. For more details, please check the console';

export const Content = () =>  {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const getData = async (pageNumber: number) => {
        setIsLoading(true);
        setIsError(false);
        try {
            const response = await fetch(`${GITHUB_ISSUES_ENDPOINT}?page=${pageNumber}`);
            const items = await response.json();
            const issues = items.filter((item:GitHubIssue) => !item.pull_request);
            setData(issues)
            setIsLoading(false);
        } catch (error){
            setIsLoading(false);
            setIsError(true);
            console.error(error);
        }
    }
    const onNextClick = () => {
        setPageNumber(prev => prev + 1);
    }
    const onPrevClick = () => {
        setPageNumber(prev => prev - 1);
    }
    useEffect(() => {
        getData(pageNumber);
    }, [pageNumber])

    if(isLoading)  {
        return <div>{LOADING_MESSAGE}</div>;
    }
    if(isError) {
        return <div>{ERROR_MESSAGE}</div>;
    }
    if(data.length === 0){
        return <div>{NO_DATA_MESSAGE}</div>;
    }
    return (
        <React.Fragment>
            <IssueItems data={data}/>
            <Pagination isNextDisabled={data.length ===0} isPrevDisabled={pageNumber===1} onNextClick={onNextClick} onPrevClick={onPrevClick}/>
        </React.Fragment>
    )
}
