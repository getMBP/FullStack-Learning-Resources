
function compose(...funcs) {
    if (funcs.length === 0) {
      return arg => arg
    }
  
    if (funcs.length === 1) {
      return funcs[0]
    }
  
    return funcs.reduce((a, b) => (...args) => a(b(...args)));
    //compose(...chain)
  }

function applyMiddleware(...middlewares) {
    return createStore => (...args) => {
      const store = createStore(...args)
      let dispatch = () => {
        throw new Error(
          'Dispatching while constructing your middleware is not allowed. ' +
            'Other middleware would not be applied to this dispatch.'
        )
      }
  
      const middlewareAPI = {
        getState: store.getState,
        dispatch: (...args) => dispatch(...args)
      }
      const chain = middlewares.map(middleware => middleware(middlewareAPI))
      dispatch = compose(...chain)(store.dispatch)  //passing dispatch function to each middleware function
  
      return {
        ...store,
        dispatch
      }
    }
  }