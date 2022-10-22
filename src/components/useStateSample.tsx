import { useState } from 'react';
import { useReducer } from 'react';

// 引数の型定義
type CounterProps = {
    initialValue: number
}

// Counterコンポーネントの定義
// ボタンをクリックするとカウントが増える
const Counter = (props: CounterProps) => {
    const {initialValue} = props
    
    const [count, setCount] = useState(initialValue)

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count-1)}>-</button>
            <button onClick={() => setCount((prevCount) => prevCount+1)}>+</button>
        </div>
    )
}

export default Counter

// reducerが受け取るactionの型を定義する
type Action = 'DECERMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET'

// 現在の状態とactionにもとづいて次の状態を返す
const reducer = (currentCount: number, action: Action) => {
    if (action=='INCREMENT') {
        return currentCount+1
    } else if (action=='DECERMENT') {
        return currentCount-1
    } else if (action=='DOUBLE') {
        return currentCount*2
    } else if (action=='RESET') {
        return 0
    } else {
        return currentCount
    }
}