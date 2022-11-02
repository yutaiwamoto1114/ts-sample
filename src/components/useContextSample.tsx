import React, { Children, useContext } from 'react'

type User = {
    id: number
    name: string
}

// ユーザーデータを保持するcontextの定義
const UserContext = React.createContext<User | null>(null)

const GrandChild = () => {
    // useContextにContextを渡すと、Contextから値を取得できる
    const user = useContext(UserContext)

    return user !== null ? <p>こんにちは {user.name}</p> : null
}

const Child = () => {
    const now = new Date()

    return (
        <div>
            <p>Current: {now.toLocaleString()}</p>
            <GrandChild ></GrandChild>
        </div>
    )
}

const Parent = () => {
    const user: User = {
        id: 1,
        name: 'Alice'
    }

    return (
        // Contextに値を渡す
        <UserContext.Provider value={user}>
            <Child></Child>
        </UserContext.Provider>
    )
}
