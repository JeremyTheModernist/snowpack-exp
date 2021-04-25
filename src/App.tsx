import React, {useState} from 'react'

const App = () => {
    const [state,setState] = useState(0);
    return (
        <div>
            <h1>hello react world, how are you!</h1>
            <main>
                <h2>{state}</h2>
                <button onClick={() => setState(state +1)}>Update</button>
            </main>
        </div>
    )
}

export default App;