import React from 'react';
import {Header} from "./Header";
import {Content} from "./Content";

const APP_HEADLINE = "LakeFS - Github Issues"

export const App = () =>  {
  return (
        <React.Fragment>
            <Header title={APP_HEADLINE}/>
            <Content/>
        </React.Fragment>
     )
}
