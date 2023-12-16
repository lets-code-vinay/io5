**This is just for learning purpose**

1. _To run this project_
   **Run following command**

_npm start_

2. Function components: Hooks based
   _Hooks: alternate option of lifeCycle_
   _lifeCycle: Life of component_
   _Human lifeCycle: Birth, Grow, Death_
   _Component LifeCycle: Mount, Update, UnMount_

   _Whatever is going to be used with prefix *use*_
   _useState, useEffect, useLayOutEffect, useMemo, etx_

   _class component | function component_
   componentWillMount |
   componentDidMount | useEffect()
   componentShouldUpdate |
   componentWillUnMount |

   _Hook started with react 16_
   _Initially function components were only presentation components or stateless component_
   _after introduction of hooks it becomes stateful component_

   **What is State?**
   just like JS we used to write variable using var, let, const
   same as we use states inside component to update and rerender component.
   we use useState() hook.

   1. import it from react..
      import React, {component} from 'react'; // just like class component
      1. import React, {useState} from 'react';
      2. React.useState();
   2. Top inside function;

   _Syntax_
   const [abc, setAbc]= useState(default value);
   const/let
   [1. currentValue, 2. Function to update value]

**useEffect()**

1.  To provide some side Effect
2.  It is Equivalent to 4 lifeCycles of class-component
3.  Mount, update, unmount
4.  When to use,
    when we want to mount any component, update component, unmount component
    To Fetch API, Rerender component
5.  useEffect(() => {},[])
6.  React.useEffect(() => {
    // Logic
    },[dependencies])
7.  Empty Square braces runs useEffect only once
8.  Square braces with [props/state] reruns useEffect (rerender components)
9.  return statement unmount components
10. - To deal with API
    - 1.  API - https://dummyjson.com/auth/login
    - 2.  axios - To deal with api we need Axios
    - 3.  API is asynchronous and returns Promise
    - 4.  Resolve Promise -
    -      a: .then(),
    -      b:  new Promise()
    -      c:  async/await
    - 5.  try/catch block
    - 6.  API http- method
    -      a. GET
    -      b. POSt
    -      c. PUT/Patch
    -      d. DELETE
    - 7.  Response Status: 200 OK, 404 Not found

    ### To live website

    ### We need two things

    1. Domain e.g. .com, .in, .co.in, .gov
    2. Hosting --> To host your code
