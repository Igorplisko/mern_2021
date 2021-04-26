import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
<<<<<<< HEAD
import { LinksPage } from './pages/LinksPage'
import { CreatePage } from './pages/CreatePage'
import { DetailPage } from './pages/DetailPage'
import { AuthPage } from './pages/AuthPage'
=======
import { AuthPage } from './pages/AuthPage';
import { CreatePage } from './pages/CreatePaje';
import { DetailPage } from './pages/DetailPage';
import { LinksPage } from './pages/LinksPage';


>>>>>>> 660dca828a2a719e1f9e9d3d9de422e9e12b7aa6

export const useRoutes = isAuthenticated => {
   if (isAuthenticated) {
      return (
         <Switch>
            <Route path="/links" exact>
               <LinksPage />
            </Route>
            <Route path="/create" exact>
               <CreatePage />
            </Route>
            <Route path="/detail/:id">
               <DetailPage />
            </Route>
            <Redirect to="/create" />
         </Switch>
      )
   }

   return (
      <Switch>
         <Route path="/" exact>
            <AuthPage />
         </Route>
<<<<<<< HEAD
         <Redirect to="/" />
=======
         <Redirect to={ } />
>>>>>>> 660dca828a2a719e1f9e9d3d9de422e9e12b7aa6
      </Switch>
   )
}