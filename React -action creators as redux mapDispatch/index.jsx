

//reducer helper

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

//reducer
const todos = (state = [], action) => {
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

//reducer
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

const { combineReducers } = Redux;
const todoApp = combineReducers({
  todos,  //state will have key , todos
  visibilityFilter  //state will have key ,visibiityFilter
});

let nextTodoId = 0;


//action
const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  };
};


////action
const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};


////action
const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
};

const { Component } = React;
const { Provider, connect } = ReactRedux;

const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <span>{children}</span>;
  }

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
  ownProps  //props passed to wrapped component like filter='SHOW_ALL'
) => {
  return {
    active:
      ownProps.filter ===
      state.visibilityFilter
  };
};
const mapDispatchToLinkProps = (
  dispatch,
  ownProps
) => {
  return {
    onClick: () => {
      dispatch(
        setVisibilityFilter(ownProps.filter)
      );
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

let AddTodo = (props) => {
  let input;
  const {dispatch} = props;
  console.log(dispatch);
  return (
    <div>
      <input ref={node => {
        input = node;
      }} />
      <button onClick={() => {
        dispatch(addTodo(input.value));
        props.increment();
        input.value = '';
      }}>
        Add Todo
      </button>
    </div>
  );
};



const increment = () =>{
  console.log("increment")
  return ({ type: 'INCREMENT' })
} 
const decrement = () => ({ type: 'DECREMENT' })
const reset = () => ({ type: 'RESET' })

const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset()),
    dispatch
  }
}

AddTodo = connect(null,mapDispatchToProps)(AddTodo);

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
  state
) => {
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
)(TodoList);

const TodoApp = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

const { createStore } = Redux;
//const store = createStore(todoApp,persistedState);

const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;
  return (action) => {  //store.dispatch ,calls on every dispatch
    console.group(action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    const returnValue = rawDispatch(action);
    console.log('next state', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  }
}

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(todoApp, persistedState);
  store.dispatch = addLoggingToDispatch(store);
  store.subscribe(() => {
    saveState({
      todos: store.getState().todos
    })
  });
 
  return store ;
}


ReactDOM.render(
  <Provider store={configureStore()}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
);