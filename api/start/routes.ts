/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

// home route
Route.get('/', async () => {
  return { Home: 'Welcome to wiki-movies' }
})

// api routes
Route.group(() => {

  // director routes
  Route.group(() => {
    Route.get('/', 'DirectorController.index')
    Route.get('/:id', 'DirectorController.show')
    Route.delete('/:id/delete', 'DirectorController.destroy')
    Route.patch('/:id/edit', 'DirectorController.update')
    Route.post('/add', 'DirectorController.store')
  }).prefix('/directors')

  // movie routes
  Route.group(() => {
    Route.get('/', 'MovieController.index')
    Route.get('/:id', 'MovieController.show')
    Route.delete('/:id/delete', 'MovieController.destroy')
    Route.patch('/:id/edit', 'MovieController.update')
    Route.post('/add', 'MovieController.store')
  }).prefix('/movies')
}).prefix('/api')
