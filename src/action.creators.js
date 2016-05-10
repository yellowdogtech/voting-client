export function setState(state) {
    return {
        meta: { remote: false },
        type: 'SET_STATE',
        state
    }
}

export function vote(entry) {
    return {
        meta: { remote: true },
        type: 'VOTE',
        entry
    }
}

export function  next() {
    return {
      meta: { remote: true },
      type: 'NEXT'  
    };
}