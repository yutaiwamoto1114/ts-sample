import React from 'react'

// Titleを渡すためのContextを作成する
const TitleContext = React.createContext('')

// Titleコンポーネントの中でContextの値を参照する
const Title = () => {
    return (
        // React.Context.Consumer直下に関数を置いてContextの値を参照する
        <TitleContext.Consumer>
            {
                (title) => {
                    return <h1>{title}</h1>
                }
            }
        </TitleContext.Consumer>
    )
}

const Header = () => {
    return (
        <div>
            {/* HeaderからTitleへは何もデータを渡していない*/}
            <Title />
        </div>
    )
}

// Pageコンポーネントの中でContextに値を渡す
const Page = () => {
    const title = 'React Book'

    // Providerを使いContextに値をセット
    // Provider以下のコンポーネントから値を参照できる
    return (
        <TitleContext.Provider value={title}>
            <Header />
        </TitleContext.Provider>
    )
}

export default Page