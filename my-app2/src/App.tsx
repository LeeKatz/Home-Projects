import React from 'react';
import {Header} from "./Header";
import {Content} from "./Content";

const APP_HEADLINE = 'Animals Quiz!';

export const App = ()=> {
  return (
    <div>
      <Header title={APP_HEADLINE}/>
      <Content/>
    </div>
  );
}
