let instances = []

const register = (comp) => instances.push(comp)
const unregister = (comp) => instances.splice(instances.indexOf(comp), 1)

const historyPush = (path) => {
  history.pushState({}, null, path)
  instances.forEach(instance => instance.forceUpdate())
}

const historyReplace = (path) => {
  history.replaceState({}, null, path)
  instances.forEach(instance => instance.forceUpdate())
}

const matchPath = (pathname, options) => {
  const exact = options.exact || false
  const path = options.path
  
  //<Route component={Home} />
  if (!path) {
    console.log('path ',path);
    console.log('url ',pathname);
    console.log('.......................');
    return {
      path: null,
      url: pathname,
      isExact: true
    }
  }

  const match = new RegExp(`^${path}`).exec(pathname)
  console.log('match ',match);
  
  if (!match)
    return null

  const url = match[0]
  const isExact = pathname === url
  console.log('url ',url);
  console.log('pathname ',pathname);
  console.log('.......................');
  if (exact && !isExact)
    return null

  return {
    path,
    url,
    isExact,
  }
}

const Route = React.createClass({
  componentWillMount() {
    addEventListener('popstate', this.handlePop)
    register(this)
  },

  componentWillUnmount() {
    unregister(this)
    removeEventListener('popstate', this.handlePop)
  },

  handlePop() {
    this.forceUpdate()
  },

  render() {
    const {
      path,
      exact,
      component,
      render,
    } = this.props

    const match = matchPath(location.pathname, {
      path,
      exact
    })

    if (!match)
      return null

    if (component)
      return React.createElement(component, {
        match
      })

    if (render)
      return render({
        match
      })

    return null
  }
})

const Link = React.createClass({
  handleClick(event) {
    const {
      replace,
      to
    } = this.props

    event.preventDefault()
    replace ? historyReplace(to) : historyPush(to)
  },

  render() {
    const {
      to,
      children
    } = this.props

    return (
      <a href={to} onClick={this.handleClick}>
        {children}
      </a>
    )
  }
})

const Redirect = React.createClass({
  componentDidMount() {
    const {
      to,
      push
    } = this.props

    push ? historyPush(to) : historyReplace(to)
  },
  render() {
    return null
  }
})

// Implementation

const Home = () => (
  <h2>Home</h2>
)

const About = () => (
  <h2>About</h2>
)

const Topic = ({
  topicId
}) => (
  <h3>{topicId}</h3>
)

const Topics = ({
  match
}) => {
  const items = [{
    name: 'Rendering with React',
    slug: 'rendering'
  }, {
    name: 'Components',
    slug: 'components'
  }, {
    name: 'Props v. State',
    slug: 'props-v-state'
  }, ]

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        {items.map(({ name, slug }) => (
          <li key={name}>
            <Link to={`${match.url}/${slug}`}>{name}</Link>
          </li>
        ))}
      </ul>
      {items.map(({ name, slug }) => (
        <Route key={name} path={`${match.path}/${slug}`} render={() => (
          <Topic topicId={name} />
        )} />
      ))}
      <Route exact path={match.url} render={() => (
        <h3>Please select a topic.</h3>
      )}/>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <Route render={(props) => {
        return <pre>URL: {JSON.stringify(props.match.url)}</pre>
      }} />

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
