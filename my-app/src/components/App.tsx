import React, {useEffect, useState} from 'react';
import {GitHubIssue} from "./IssueItem";
import {Pagination} from "./Pagination";
import {Content} from "./Content";
import {Header} from "./Header";


const APP_HEADLINE = "LakeFS - Github Issues"
const GITHUB_ISSUES_ENDPOINT = "https://api.github.com/repos/Treeverse/lakeFS/issues"

export const App = () =>  {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const getData = async (pageNumber: number) => {
      const response = await fetch(`${GITHUB_ISSUES_ENDPOINT}?page=${pageNumber}`);
      const items = await response.json();
      const issues = items.filter((item:GitHubIssue) => !item.pull_request);
      setData(issues)
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

  return (
    <React.Fragment>
        <Header title={APP_HEADLINE}/>
        <Content data={data}/>
        <Pagination isNextDisabled={data.length ===0} isPrevDisabled={pageNumber===1} onNextClick={onNextClick} onPrevClick={onPrevClick}/>
    </React.Fragment>
  );
}
