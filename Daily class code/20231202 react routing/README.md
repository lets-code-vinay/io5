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
