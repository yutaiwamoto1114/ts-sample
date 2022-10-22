import React, { memo, useState } from 'react'

/*
Fizzコンポーネントはメモ化しないものとして定義
つまり、親コンポーネントの描画によって再描画される
*/
type FizzProps = {
    isFizz: boolean
}

const Fizz = (props: FizzProps) => {
    const {isFizz} = props

    console.log(`子コンポーネントFizzが再描画されました, isFizz=${isFizz}`)
    return <span>{isFizz ? 'Fizz' : ''}</span>
}

/*
Buzzコンポーネントはメモ化するものとして定義
親コンポーネントが再描画されたとしても、
受け取っている引数propsや、参照しているcontextの値が変化しない限り、
Buzzコンポーネントは再描画されない
*/
type BuzzProps = {
    isBuzz: boolean
}

const Buzz = memo<BuzzProps>((props) => {
    // propsをisBuzzに代入、つまりisBuzzが変化したときのみ再描画される
    const {isBuzz} = props

    console.log(`子コンポーネントBuzzが再描画されました, isBuzz=${isBuzz}`)
    return (
        <span>
            {/*  */}
            {isBuzz ? 'Buzz' : ''}
        </span>
    )
})

/*
以下では読み込み方法を指定してexportしている
この形式でexportしたコンポーネントは、
import { Parent } from ... で読み込む

コンポーネント定義とexportを同時にやっている状態？
*/
export const Parent = () => {

    // countは1で初期化
    const [count, setCount] = useState(1)

    const isFizz = count % 3 === 0
    const isBuzz = count % 5 === 0

    console.log(`親コンポーネントParentが再描画されました, count=${count}`)
    return (
        <div>
            <p>
                {`現在のカウント: ${count}`}
                &nbsp;
                <button onClick={() => setCount((c) => c+1)}>+1</button>
                &nbsp;
                <Fizz isFizz={isFizz} />
                <Buzz isBuzz={isBuzz} />
            </p>
        </div>
    )
}