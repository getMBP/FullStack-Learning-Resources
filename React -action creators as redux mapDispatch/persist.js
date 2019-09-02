const loadState = () => {
    try {
      const serializedState = window.localStorage.getItem('state');
      if (serializedState === null) {
          console.log("no persist state")
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };

  const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch (err) {
      // Ignore write errors.
    }
  };


  const resetState = ()=>{
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
      } catch (err) {
        // Ignore write errors.
      }
  }