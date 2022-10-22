import React, { useState, useCallback } from 'react'

/*
関数を引数として受け取る
*/
type ButtonProps = {
    onClick: () => void
}

/*
DecrementButtonコンポーネントはメモ化しない。
Decrementボタンを表示する
*/
const DecrementButton = (props: ButtonProps) => {
    // 関数を受け取る
    const {onClick} = props

    console.log('DecrementButtonが再描画されました')

    return <button onClick={onClick}>Decrement!</button>
}

/*
IncrementButtonはメモ化する。
ただし、引数に渡す関数はメモ化しないので、
Parentが関数を描画しなおすたびに再描画される。
*/
const IncrementButton = React.memo((props: ButtonProps) => {
    const {onClick} = props

    console.log('IncrementButtonが再描画されました')

    return <button onClick={onClick}>Increment!</button>
})

/*
DoubleButtonはメモ化する。
さらに、引数に渡す関数もメモ化するので、
Parentが関数を描画しても、再描画されない。
*/
const DoubleButton = React.memo((props: ButtonProps) => {
    const {onClick} = props

    console.log('DoubleButtonが再描画されました')
    
    return <button onClick={onClick}>Double!</button>
})

// この形式でexportしたときはimport {} from ... とする
export const Parent = () => {
    // countは0で初期化
    const [count, setCount] = useState(0)

    // メモ化しない
    const decrement = () => {
        setCount((c) => c-1)
    }

    // メモ化しない
    const increment = () => {
        setCount((c) => c+1)
    }

    // メモ化する
    // Memo<>()と同じく、useCallback()に渡す感じ
    const double = useCallback(
        () => {
            setCount((c) => 2*c)
        },

        []
    )

    return (
        <div>
            <p>Count: {count}</p>
            {/* コンポーネントに関数を渡す */}
            <DecrementButton onClick={decrement}/>
            <IncrementButton onClick={increment}/>
            <DoubleButton onClick={double}/>
        </div>
    )
}