import React, { useState, useMemo} from 'react';
import { setSyntheticTrailingComments } from 'typescript';

export const UseMemoSample = () => {
    // textは現在のテキストボックスの入力文字列を保持する
    const [text, setText] = useState<string>('')

    // itemsは文字列のリストを保持する
    const [items, setItems] = useState<string[]>([])

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    const onClickButton = () => {
        setItems((prevItems) => {
            // 現在の入力値をitemsに追加する
            // スプレッド構文
            return [...prevItems, text]
        })
    }

    // 
}

