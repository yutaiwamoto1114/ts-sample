import React, {useState, useRef, useImperativeHandle} from 'react'

// 子コンポーネント
const Child = React.forwardRef(
    // コンポーネントにrefが渡される
    (props, ref) => {
        // メッセージの状態は子コンポーネントに定義
        const [message, setMessage] = useState<string|null>(null)

        // useImperativeで親のrefから参照できる値を指定
        // 第1引数には
        useImperativeHandle(ref, () => ({
            showMessage: () => {
                const date = new Date()
                const message = `Hello, it's ${date.toLocaleString()} now`
                setMessage(message) 
            },
        }))

    // メッセージが空でないときのみ、表示する
    return (
        <div>
            {message !== null ? <p>{message}</p>: null}
        </div>
    )
    }
)

const Parent = () => {
    // 子コンポーネントをReact.forwardRefでラップしているので、
    // 子コンポーネントから渡されたrefを参照できる
    const childRef = useRef<{showMessage: ()=>void}>(null)
    const onClick = () => {
        if (childRef.current !== null) {
            // 子のuseImperativeHandleで設定した値をrefを通じて参照
            childRef.current.showMessage()
        }
    }

    return (
        <div>
            <button onClick={onClick}>Show Message</button>
            <Child ref={childRef}></Child>
        </div>
    )
}

export default Parent