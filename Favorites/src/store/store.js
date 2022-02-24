import { useState, useEffect } from 'react';
//this custom hooks mimics a redux store

//these variables are shared throughout the entire application and only exist once
//every module that import from here will use these values
//these are defined outside of this hook, meaning
//that every component is using the SAME set of values, other than their own
//although sometimes you don't want this, here we do want this
let globalState = {};
let listeners = [];
let actions = {};

//our custom hook manages all of those variables
export const useStore = (shouldListen = true) => {
  const setState = useState(globalState)[1];

//our dispatch function updates our globalstate when called
//and call the listeners,  which are setState calls which when called
//will re-render and update our globalState
  const dispatch = (actionIdentifier, payload) => {
    const newState = actions[actionIdentifier](globalState, payload);
    globalState = { ...globalState, ...newState };

    for (const listener of listeners) {
      listener(globalState);
    }
  };

//we register one listener per component with useEffect, and
//we unregister it when the component is destroyed
  useEffect(() => {
    if(shouldListen) {
      listeners.push(setState);
    }

    return () => {
      if(shouldListen) {
        listeners = listeners.filter(li => li !== setState);
      };
    };
  }, [setState, shouldListen]);

  return [globalState, dispatch];
};

//initalizes our store, by remerging our old data and new data
//this creates complete store slices, as in redux, where
//in one slice we manage products and in another we manage, authentication

export const initStore = (userActions, initialState) => {
  if (initialState) {
    globalState = { ...globalState, ...initialState };
  }
  actions = { ...actions, ...userActions };
};
