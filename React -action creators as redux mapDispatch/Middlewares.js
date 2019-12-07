function compose(...funcs) {
	console.info("$$$ compose function ")
  console.dir( funcs)
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)));
  //compose(...chain)
}

//applyMiddleware from redux/applyMiddleware.js
 const applyMiddleware = function applyMiddleware(...middlewares) {
	//console.info("applyMiddleware")
  return  function (createStore) {
    return function (reducer, preloadedState, enhancer)  {
      const store = createStore(reducer, preloadedState, enhancer)
      let dispatch = store.dispatch
      let chain = []

      const middlewareAPI = {
        getState: store.getState,
        dispatch: (action) => dispatch(action)
      }
        //thunk ,logger
      chain = middlewares.map(middleware => {
      	console.info("~~~~~~middleware ")
     		console.dir( middleware)
        const middlewareReturn = middleware(middlewareAPI); 
        console.info("~~~~~~middlewareReturn ")
     		console.dir( middlewareReturn)
      	return middlewareReturn
      })
      console.info("~~~chain ")
      console.dir( chain)
      // console.info("~~~store.dispatch ")
      // console.dir( store.dispatch)
      
      //dispatch = compose(...chain)(store.dispatch)
      let composedFunc = compose(...chain)
      console.info("~~~composedFunc ")
      console.dir( composedFunc)
      
      dispatch = composedFunc(store.dispatch);
      //pass dispatch to each middleware function
      console.info("~~~new dispatch AFTER compose  i.e composedFunc RETURNED ")
      console.dir( dispatch)
      
      return {
        ...store,
        dispatch
      }
    }
  }
}

function createThunkMiddleware(extraArgument) {
            //middleware(middlewareAPI)
  return function thunkFunction ({ dispatch, getState }) {
   
      //composedFunc(store.dispatch);
    return function nextFunction (next) { 
        console.info("In next function")
        console.dir(next);  //next is dispatch fn

        // dispatch = composedFunc(store.dispatch);
        //dispatch(action)
       return function actionFunction (action) {
          console.info("action RETURNED")
          console.dir(action)
          
          if (typeof action === 'function') {
            console.info("++++++++++++++++++++++++++++++++++++++")
            console.info("action is function")
            console.info("++++++++++++++++++++++++++++++++++++++")
            return action(dispatch, getState, extraArgument);
          }
          
          console.info("+++++++++++++++++calling NEXT++++++++++++++")
          console.dir(next);

          //if action is object
          return next(action);
        }
     }
  }
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

function logger({ getState }) {
  return next => action => {
    console.log('will dispatch', action)

    // Call the next dispatch method in the middleware chain.
    const returnValue = next(action)

    console.log('state after dispatch', getState())

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue
  }
}

window.logger = logger ;
window.applyMiddleware  = applyMiddleware ;
window.thunk = thunk ;
