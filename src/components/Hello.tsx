// Helloはクリックするとアラートを出すテキストを返します
const Hello = () => {
    // クリック時に呼ばれる関数
    const onClick = () => {
        alert('hello')
    }
    const text = 'Hello, React' // テキスト

    // テキストを子に持つdiv要素を返す
    return (
        <div onClick={onClick}>
            {text}
        </div>
    )
}

// 外部からHelloを読み込めるようにするためエクスポートする
export default Hello