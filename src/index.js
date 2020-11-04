// import React from 'react'
// import ReactDOM from 'react-dom'

// // Library code

// // This reducer will create dictate the shape of our state tree and handle all other reducers. This alone will be passed to our create store function
// function createStore(reducer) {
//     let state

//     // this array of functions will be looped over to make state changes
//     let listeners = []

//     // a function to get our state
//     const getState = () => state

//     // a function to allow a component to both listen for state changes and remove functions from the listeners array
//     const subscribe = listener => {
//         listeners.push(listener)

//         return () => {
//             listeners = listeners.filter(l => l !== listener)
//         }
//     }

//     // this dispatch function will invoke our reducer, updating the state depeding on the action object that is passed to it. It will then invoke each listener function inside the listener array notifying each component that is subscribed it that the state has changed
//     const dispatch = action => {
//         state = reducer(state, action)

//         listeners.forEach(listener => listener())
//     }

//     // return both of these functions to be used outside of our createStore function
//     return {
//         getState,
//         subscribe,
//         dispatch
//     }
// }

// // App Code

// const ADD_TODO = 'ADD_TODO'
// const REMOVE_TODO = 'REMOVE_TODO'
// const TOGGLE_TODO = 'TOGGLE_TODO'
// const ADD_GOAL = 'ADD_GOAL'
// const REMOVE_GOAL = 'REMOVE_GOAL'

// // this function is describing how to change the state depending on the type of action using js default parameters, if state is undefined then set it to an empty array
// const todosReducer = (state = [], action) => {
//     switch(action.type) {
//         case ADD_TODO : 
//             return state.concat([action.todo])
//         case REMOVE_TODO : 
//             return state.filter(todo => todo.id !== action.id)
//         case TOGGLE_TODO : 
//             return state.map(todo => todo.id !== action.id ? todo :
//                 Object.assign({}, todo, {complete: !todo.complete})        
//             )
//         default :
//                 return state
//     }
// }

// const goalsReducer = (state = [], action) => {
//     switch(action.type) {
//         case ADD_GOAL :
//             return state.concat([action.goal])
//         case REMOVE_GOAL :
//             return state.filter(goal => goal.id !== action.id)
//         default : 
//             return state
//     }
// }

// const app = (state = {}, action) => {
//     return {
//         todos: todosReducer(state.todos, action),
//         goals: goalsReducer(state.goals, action)
//     }
// }

// // Action creators

// const addTodoAction = todo => {
//     return {
//         type: ADD_TODO,
//         todo
//     }
// }

// const removeTodoAction = id => {
//     return {
//         type: REMOVE_TODO,
//         id
//     }
// }

// const toggleTodoAction = id => {
//     return {
//         type: TOGGLE_TODO,
//         id
//     }
// }

// const addGoalAction = goal => {
//     return {
//         type: ADD_GOAL,
//         goal
//     }
// }

// const removeGoalAction = id => {
//     return {
//         type: REMOVE_GOAL,
//         id
//     }
// }

// const store = createStore(app)

// store.subscribe(() => {
//     console.log('The new state is: ', store.getState())
// })

// store.dispatch(addTodoAction({
//     id: 0,
//     name: 'Walk the dog',
//     complete: false,
// }))

// store.dispatch(addTodoAction({
//     id: 1,
//     name: 'Wash the car',
//     complete: false,
// }))

// store.dispatch(addTodoAction({
//     id: 2,
//     name: 'Go to the gym',
//     complete: true,
// }))

// store.dispatch(removeTodoAction(1))
  
// store.dispatch(toggleTodoAction(0))
  
// store.dispatch(addGoalAction({
//     id: 0,
//     name: 'Learn Redux'
// }))
  
// store.dispatch(addGoalAction({
//     id: 1,
//     name: 'Lose 20 pounds'
// }))
  
// store.dispatch(removeGoalAction(0))

// export default function App() {
//     return (
//         <div>
//             <h1>This is my lil redux project</h1>
//         </div>
//     )
// }

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )