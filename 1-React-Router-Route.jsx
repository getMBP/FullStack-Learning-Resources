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
  console.log(pathname);
  console.log(options)
  //<Route component={Home} />
  if (!path) {
    console.group('MatchPath function ')
      console.log('path ',"null");
      console.log('url is pathname',pathname);
      console.log('isExact ',true)
      console.groupEnd();
    console.log('');
    return {
      path: null,
      url: pathname,
      isExact: true
    }
  }

  //path is like > the path mentioned on Links 
  //pathname is the location.pathname
  //http://www.gilliganondata.com/index.php/2012/05/22/the-anatomy-of-a-url-protocol-hostname-path-and-parameters/
  const match = new RegExp(`^${path}`).exec(pathname)
  
  if (!match){
    console.group('MatchPath function ')
      console.log('match ',"null");
      console.log('path ',path);
      console.log('url ',pathname);
      console.log('isExact ',isExact)
     console.groupEnd();
    console.log('');
    return null
  }
  const url = match[0] ;
  // for pathname /topics/components ,
  // and url which we get from Regex function
  // like '/topics' 
  const isExact = pathname === url;
  
      console.group('MatchPath function ')
        console.log('match ',match);
        console.log('url ',url);
        console.log('pathname ',pathname);
        console.log('isExact ',isExact)
  
  //no exact match found
  if (exact && !isExact){
     console.log('exact && !isExact ');
    console.groupEnd();
    console.log('');
    return null
  }
  
  //partial match
  console.groupEnd();
  console.log('');
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
   
    if(component){
      console.group("Route ",component.name);
    }else{
       console.group('Route ');
    }
    
    const match = matchPath(location.pathname, {
      path,
      exact
    })

    if (!match){
      console.log("no match :current location doesn't match the path prop");
      console.groupEnd();
      console.log('');
      return null
  }
    console.log('match');
    console.groupEnd();
    console.log('');
    
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
    console.log('handle click : Link ');
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
Home.displayName ="HomeComponent";

const About = () => (
  <h2>About</h2>
)
About.displayName ="AboutComponent";

const Topic = ({
  topicId
}) => (
  <h3>{topicId}</h3>
)

Topic.displayName ="TopicComponent" ;

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
      <Route  exact path="/about" component={About}/>
      <Route path="/topics" component={Topics} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));
