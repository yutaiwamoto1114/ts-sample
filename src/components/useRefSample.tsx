import React, { useState, useRef } from 'react'

// 画像アップローダーのサンプルを作る

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve,ms))

const UPLOAD_DELAY = 1000

const ImageUploader = () => {
    // 隠されたinput要素にアクセスするためのrefを定義
    const inputImageRef = useRef<HTMLInputElement | null>(null)

    // 選択されたファイルデータを保持するrefを定義
    const fileRef = useRef<File | null>(null)

    // メッセージの状態定義
    const [message, setMessage] = useState<String|null>('')

    // 「画像をアップロード」というテキストがクリックされた時のコールバック
    const onClickText = () => {
        // refオブジェクトのcurrentプロパティでデータを参照
        if (inputImageRef.current !== null) {
            // inputのDOMにアクセスして、クリックイベントを発火
            // ref.currentにDOMの参照がセットされるので、DOMの関数を使える
            inputImageRef.current.click()
        }
    }

    // ファイルが選択されたあとに呼ばれるコールバック
    const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files

        if (files !== null && files.length > 0) {
            // fileRef.currentに値を保持する
            fileRef.current = files[0]
        }
    }

    // アップロードボタンがクリックされたときに呼ばれるコールバック
    // async(エイシンク)で非同期関数(async function)を定義できる
    const onClickUpload = async () => {
        if (fileRef.current !== null) {
            // 通常はここでAPIを呼んで、ファイルをサーバにアップロードする
            // ここでは疑似的に一定時間待つ
            await sleep(UPLOAD_DELAY)

            // アップロードが成功したことを表示する
            setMessage(`${fileRef.current.name}のアップロードが完了しました`)
        }
    }

    return (
        <div>
            <p style={ {textDecoration: 'underline'} } onClick={onClickText}>
                画像をアップロード
            </p>
            <input
                ref={inputImageRef}
                type="file"
                accept='image/*'
                onChange={onChangeImage}
                // 隠れているDOMであってもuseRefならそのDOMの関数を呼び出せる
                style={{visibility: 'hidden'}}
            ></input>
            <button onClick={onClickUpload}>アップロードする</button>
            {message !== null && <p>{message}</p>}
        </div>
    )
}

export default ImageUploader