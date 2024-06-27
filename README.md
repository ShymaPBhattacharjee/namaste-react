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

