# namaste git

# useSate hook :

- always call inside ur functional components. Not use outside of function
- it creates local state variable inside functional components.
- always create your statevariable at the top so that it become consistent through out the program.
- never use in conditions like if-else, not in loop, not in any inner functions.

# ReactrouterDOM library :

- createBrowserRouter -> create router configuration as a list of paths.
- RouterProvider -> provide our router configuration to our app.
- useRouteError -> give detailed information about our routing error.
- Outlet -> It place the required/ expected component according to the path.
- <!-- - <li>
       <a href="/about">About Us</a>
   </li> -->
  - Never use anchor tag for routing. It will refresh the page every time. So, it will take very long time to get me back the data. i.e : Clent side routing
   <!-- - <li>
        <Link to="/contact">Contact Us</Link>
    </li> -->
- Always use Link tag from react-router-dom library for routing. It will not refresh the page every time. So, it will take very less time to get me back the data. i.e : Server side rendering

A function starts with use is a hook in react.

# 2 Types Of Routing : 
--------------------
- Clent side routing : React uses this.
- Server side rendering :L Older website used this.

# Why we use componentDidMount :
----------------------------------
- We use this lifecycle hook for API call in class based component.

# Why we do API call in componentDidMount lifecycle hook in Class based component :
-----------------------------------------------------------------------------------
- Because in react, we first load the component and then make the API call for faster performance. 

# Where we do API call in Functional component :
------------------------------------------------
- In the useEffect hook.

# React life-cycle diagram :
-----------------------------
- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

** await fetch(
      "https://api.github.com/users/ShymaPBhattacharjee"
    );

    Always return a promise.

# Lifecycle hooks steps :
--------------------------
 Mounting Phase

    - Parent Constructor
    - Parent render
        - First Constructor
        - First render

        - Second Constructor
        - Second render

        < dom UPDATED - IN A SINGLE BATCH >
        - First componentDidMount
        - second componentDidMount
    - Parent componentDidMount

 Updating phase

    # Mounting cyclle
    *******************

    - constructor ( default value of state variable )
    - render( dummy data/ initial values of state variable )
        < HTML(dummy) >
    - componentDidMount
        <API call>
        <this.setState> - state variable with new data

    # Updating cycle
    ******************

    -render( API data )
        <HTML - new API data>
    - componentDidUpdate

    # unMounting : means removing from the HTML
    *************
    - componentWillUnmount

    
** LifeCycle hooks are not in functional components. 
 - useEffect hook is not equivalent to componentDidMount

HW : styled component, bootstrap, scss, sass, MIUI, chakra ui

TAILWIND CSS :
---------------
 - Rapidly build modern websites without ever leaving your HTML.
 - POST CSS : -> A tool for transforming CSS with javascript.
    - PostCSS Preset Env, lets you convert modern CSS into something most browsers can understand, determining the polyfills you need based on your targeted browsers or runtime environments, using css.
 - Pros :
 ...............

    - development process is very fast.
    - It is very lightweight i.e when parcel will bundle our css, it will only include the css which is required on our web-page.
 - Cons : 
 .............
 
    - lots of classes will come. So, our code will become ugly.
    - some initial learning curve.
