// Containerのpropsの型を新たに定義
type ContainerProps = {
    title: string
    children: React.ReactNode
}

// Containerコンポーネントは赤背景のボックスの中にタイトルを子要素を表示する
const Container = (props: ContainerProps) => {
    const { title, children } = props

    return (
        <div style={{ background: 'red'}}>
            <span>{title}</span>
        {/* propsのchildrenを埋め込むと、このコンポーネントの開始タグと
            同じタグで囲んだ要素を表示する
        */}
        <div>{children}</div>
        </div>
    )
}

const Parent = (): JSX.Element => {
    return (
        // Containerを使用する前に、ほかの要素を囲って使用する
        <Container title="Hello" >
            <p>この部分が背景色で囲まれる</p>
        </Container>
    )
}

export default Parent