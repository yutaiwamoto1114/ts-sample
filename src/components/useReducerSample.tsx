import { useReducer } from 'react';

// reducerが受け取るactionの型を定義
type Action = 'DECERMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET'

// 現在の状態とactionにもとづいて次の状態を返すreducerの定義
const reducer = (currentCount: number, action: Action) => {
    if (action=='INCREMENT') {
        // return 次の状態
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

// 引数の型定義
type CounterProps = {
    initialValue: number
}

// Counterコンポーネントの定義
const Counter = (props: CounterProps) => {
    // 引数を受け取って…
    const {initialValue} = props
    
    // 状態を初期化して…
    const [count, dispatch] = useReducer(reducer, initialValue)

    return (
        <div>
            <p>Count: {count}</p>
            {/*ボタンが押されたらdispatch関数を使いactionを発出*/}
            {/* 更新処理の記述をdispatch関数に任せているので、
                更新呼び出し側のコードはすごくすっきり書ける
            */}
            <button onClick={() => dispatch('DECERMENT')}>-</button>
            <button onClick={() => dispatch('INCREMENT')}>+</button>
            <button onClick={() => dispatch('DOUBLE')}>x2</button>
            <button onClick={() => dispatch('RESET')}>Reset</button>
        </div>
    )
}

export default Counter