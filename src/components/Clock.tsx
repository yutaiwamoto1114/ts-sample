import React, { useState, useEffect, useLayoutEffect} from "react";

/*
    Clockコンポーネントで現在時刻表示
    1秒ごとに時刻(timestamp)が更新される
    ドロップダウンメニューを選択することで時刻表記(locale)を変更できる
    時刻表記の変更は副作用によって実装するため、コンポーネントの描画には直接
    かかわらずに実装できる。
*/

// タイマーが呼び出される周期を1秒(1000ms)にする
const UPDATE_CYCLE = 1000

// localstorageで使用されるキー
const KEY_LOCALE = 'KEY_LOCALE'

// locale(ロケール): 地域ごとに異なる基本設定の集合
enum Locale {
    US = 'en-US',
    JP = 'ja-JP',
}

const getLocaleFromString = (text: string) => {
    if (text === Locale.US) {
        return Locale.US
    } else if (text === Locale.JP) {
        return Locale.JP
    } else {
        return Locale.US
    }
}

// Clockコンポーネントの定義
export const Clock = () => {
    // タイムスタンプの初期状態はnew Date()で生成
    // その後の状態はsetTimestamp(状態) で更新できる
    const [timestamp, setTimestamp] = useState(new Date())

    // localeは英語圏で初期化
    // その後の状態はsetLocale(状態) で更新できる
    const [locale, setLocale] = useState(Locale.US)

    /*
        タイマーについて、useEffectが処理の源流ではあるものの、
        初期化後の更新はsetInterval()で実装したほうがよい。
    */
    // タイマーをセットするための副作用
    useEffect(() => {
        // タイマーのセット(UPDATE_CYCLE間隔で、new Date()実行)
        // setInterval(処理内容,繰り返し間隔)
        const timer = setInterval(() => {
            // 更新関数に現在時刻を渡す
            setTimestamp(new Date())
        }, UPDATE_CYCLE)

        // クリーンアップ関数を渡し、アンマウント時にタイマーの解除をする
        // 必須!!!!!!!!!
        return () => {
            clearInterval(timer)
        }

        // 依存配列が空の場合は、初期画面時のみ実行する
    },[])

    // // localstorageから値を読み込むための副作用
    // useEffect(() => {
    //     const savedLocale = localStorage.getItem(KEY_LOCALE)
    //     if (savedLocale !== null) {
    //         // 更新関数に現在の入力値を与える
    //         setLocale(getLocaleFromString(savedLocale))
    //     }
    //     // 依存配列が空の場合は、初期画面時のみ実行する
    // },[])

    // localstorageから値を読み込むための副作用(useLayoutEffect ver.)
    useLayoutEffect(() => {
        const savedLocale = localStorage.getItem(KEY_LOCALE)
        if (savedLocale !== null) {
            // 更新関数に現在の入力値を与える
            setLocale(getLocaleFromString(savedLocale))
        }
        // 依存配列が空の場合は、初期画面時のみ実行する
    },[])

    // localeが変化したときに、localstorageに値を保持するための副作用
    useEffect(() => {
        localStorage.setItem(KEY_LOCALE, locale)

        // 依存配列にlocaleを渡す、つまり、localeが変化するたびにこの副作用が実行される
    }, [locale])

    // このコンポーネントが持つtimestampとlocaleの情報を表示
    return (
        <div>
            <p>
                {/* タイマー */}
                <span id="current-time-label">現在時刻</span>
                <span>:{timestamp.toLocaleString(locale)}</span>
                
                {/* ドロップダウンリスト */}
                <select
                    value={locale}
                    onChange={(e) => setLocale(getLocaleFromString(e.target.value))}
                >
                    <option value={Locale.US}>アメリカ表記</option>
                    <option value={Locale.JP}>日本表記</option>
                </select>
            </p>
        </div>
    )
}