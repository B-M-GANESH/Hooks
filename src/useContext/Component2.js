import { Bala } from "./Context"
const Component2 = () => {
    const user = Bala()
    return (
    <div>
        <h1>Component2</h1>
        <h3>{`user is ${user}`}</h3>
    </div>

  )
}

export default Component2