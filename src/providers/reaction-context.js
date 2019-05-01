import React from 'react'

const ReactionContext = React.createContext(() => {})

const ReactionConsumer = ReactionContext.Consumer
const ReactionProvider = ReactionContext.Provider

export { ReactionProvider, ReactionConsumer }
