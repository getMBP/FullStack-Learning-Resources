const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

const todos = (state = [], action) => {
  console.log("state for todos is ",state);

  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      );
    default:
      return state;
  }
};

const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};
const notifications = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      return [...state, { id: action.id, text: action.text }]
    case 'HIDE_NOTIFICATION':
      return state.filter((notification) => { return notification.id !== action.id })
    default:
      return state
  }
}

function PostReducer(state = [], action){
  if(action.type === 'FETCH_POSTS'){
    return action.payload ;
  }

  return state ;
}


const { combineReducers } = Redux;

//final reducer
const todoApp = combineReducers({
  todos,
  visibilityFilter,
  notifications,
  PostReducer
});

//actions

let nextTodoId = 0;
const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  };
};

const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};

const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};

/* 
https://stackoverflow.com/questions/35411423/
how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559

*/
function showNotification(id, text) {
  return { type: 'SHOW_NOTIFICATION',id,text}
}
function hideNotification(id) {
  return { type: 'HIDE_NOTIFICATION',id}
}

let nextNotificationId = 0
function showNotificationWithTimeout(text) {
  //from applymiddleware 
  //return action(dispatch, getState, extraArgument);
  return function (dispatch ,getState) {
    const id = nextNotificationId++;
    console.log(getState());
    dispatch(showNotification(id,text))

    setTimeout(() => {
      dispatch(hideNotification(id))
    }, 5000)
  }
}


const fetchPosts = () => async dispatch => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts')

  dispatch({ type: 'FETCH_POSTS', payload: response.data })
}


//actions end

const { Component } = React;
const { Provider, connect } = ReactRedux;
const { createStore,bindActionCreators } = Redux;

const Link = ({
  active,
  children,
  onClick,
  filter
}) => {
  if (active) {
    return <span>{children}</span>;
  }

  console.log("filter props ",filter)
  return (
    <a href='#'
       onClick={e => {
         e.preventDefault();
         onClick();
       }}
    >
      {children}
    </a>
  );
};

const mapStateToLinkProps = (
  state,
  ownProps
) => {
  return {
    active:
      ownProps.filter ===
      state.visibilityFilter
  };
};
const mapDispatchToLinkProps = (
  dispatch,
  ownProps  //FilterLink filter='SHOW_ALL
) => {
  return {
    onClick: () => {
      dispatch(
        setVisibilityFilter(ownProps.filter)
      );
      dispatch(showNotificationWithTimeout("'You just logged in.'"))
    }
  };
}
const FilterLink = connect(
  mapStateToLinkProps,
  mapDispatchToLinkProps
)(Link);

const Footer = () => (
  <p>
    Show:
    {' '}
    <FilterLink filter='SHOW_ALL'>
      All
    </FilterLink>
    {', '}
    <FilterLink filter='SHOW_ACTIVE'>
      Active
    </FilterLink>
    {', '}
    <FilterLink filter='SHOW_COMPLETED'>
      Completed
    </FilterLink>
  </p>
);

const Todo = ({
  onClick,
  completed,
  text
}) => (
  <li
    onClick={onClick}
    style={{
      textDecoration:
        completed ?
          'line-through' :
          'none'
    }}
  >
    {text}
  </li>
);

const TodoList = ({
  todos,
  onTodoClick
}) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
);

let AddTodo = ({ actions }) => {
  let input;
   //console.log("rendering AddTodo") //test re-render

  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
      actions.addTodo(input.value);  
      actions.fetchPosts();
       {/*  // dispatch(addTodo(input.value)); //using bindActioncreator    */}
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};


//https://github.com/tayiorbeii/egghead.io_redux_course_notes/blob/master/
//23-Generating_Containers_with_connect_from_React_Redux_AddTodo.md

/*
AddTodo = connect(state => {
  return {} // state;  //if you return  non empty state even if you dont need state,then it will do wastefull render 
},
dispatch => {
  return { dispatch };
})(AddTodo);

*/

// AddTodo = connect()(AddTodo);
//https://stackoverflow.com/questions/41754489/when-would-bindactioncreators-be-used-in-react-redux
AddTodo = connect(state => {
  return {state : state.visibilityFilter}  //will re-render only for visibilityFilter change
},
dispatch => {
  return { 
    actions:bindActionCreators({fetchPosts,addTodo},dispatch) 
  };
})(AddTodo);


const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(
        t => t.completed
      );
    case 'SHOW_ACTIVE':
      return todos.filter(
        t => !t.completed
      );
  }
}


const mapStateToTodoListProps = (
  state ,ownProps
) => {
  console.log("ownProps ",ownProps); //  <VisibleTodoList name ="deen"/>
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  };
};


const mapDispatchToTodoListProps = (
  dispatch
) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id));
    }
  };
};
const VisibleTodoList = connect(
  mapStateToTodoListProps,
  mapDispatchToTodoListProps
)(TodoList); //wrapped component


////mapDispatchToTodoListProps is called at  VisibleTodoList rendering time
/*

// that renders your component
          <WrappedComponent
            //its own props //
            {...this.props}
            
            //props calculated from redux store
            {...mapStateToProps(store.getState(), this.props)}
            {...mapDispatchToProps(store.dispatch, this.props)}
          />

*/

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList name ="deen"/>
    <Footer />
  </div>
);

/*
without Provider

const TodoApp = ({ store }) => (
  <div>
    <AddTodo store={store} />
    <VisibleTodoList store={store} />
    <Footer store={store} />
  </div>
);


//  <TodoApp store={createStore(todoApp)} />,
*/

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    // Ignore write errors.
  }
}
const store= createStore(todoApp ,applyMiddleware(thunk ,logger));
store.subscribe(()=>{
  saveState(store.getState())
})


var { BrowserRouter  , Route, Link :RouterLink , Switch, Redirect } = ReactRouterDOM  ;


ReactDOM.render(
  <Provider store={store}>
     <BrowserRouter>
        <Route path="/" component={TodoApp} />
     </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);