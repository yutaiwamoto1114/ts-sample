import React, { useState, useMemo} from 'react';
import { setSyntheticTrailingComments } from 'typescript';

export const UseMemoSample = () => {
    // textは現在のテキストボックスの入力文字列を保持する
    const [text, setText] = useState<string>('')

    // itemsは文字列のリストを保持する(ボタンを押すと追加される)
    const [items, setItems] = useState<string[]>([])

    // 入力が変わったときにその入力をtextへ保持する
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    // ボタンをクリックしたときに呼ばれる関数の定義
    const onClickButton = () => {
        // テキストボックスの値をitemsに追加する
        setItems((prevItems) => {
            // スプレッド構文 ...配列
            return [...prevItems, text]
        })

        // テキストボックスを空にする
        setText('')
    }

    /*
    reduce()
    https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
    */

    // numberOfCharacters1は再描画の度にitems.reduceを実行して結果を得る
    const numberOfCharacter1 = items.reduce((sub,item) => sub + item.length, 0)

    // numberOfCharacters2はuseMemoを使い、itemsが更新されるタイミングでitems.reduceを実行して結果を得る
    const numberOfCharacter2 = useMemo(
        // 第1引数は関数
        () => {
            return items.reduce((sub, item) => sub+item.length, 0)
        },
        // 第2引数は依存配列
        [items])
    
    return (
        <div>
            <p>UseMemoSample</p>
            <div>
                <input value={text} onChange={onChangeInput} />
                <button onClick={onClickButton}>Add</button>
            </div>
            <div>
                {items.map((item,index) => (
                    <p key={index}>items[{index}]: {item}</p>
                ))}
            </div>
            <div>
                <p>Total Number of Characters 1: {numberOfCharacter1}</p>
                <p>Total Number of Characters 2: {numberOfCharacter2}</p>
            </div>
        </div>
    )
}

