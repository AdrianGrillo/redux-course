import React from 'react'
import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'
import { handleInitialData } from '../actions/shared'
import { useDispatch, useSelector } from 'react-redux'

export default function App() {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.loading)

  React.useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])

  if(loading) {
    return <h3>Loading</h3>
  }

  return (
    <div>
      <ConnectedTodos />
      <ConnectedGoals />
    </div>
  )
}