// /* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  // 再レンダリングされる条件は三つ
  // ①state変更時
  // ②受けたpropsが変更された時
  // ③親コンポーネントがある場合、親が再レンダリングされた時につられて動く
  console.log("最初");

  // 状態を扱う時はStateを使う
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // useEffectで関心の分離をおこなう。
  useEffect(() => {
    // console.log("useEffect");
    if (num > 0) {
      if (num % 3 === 0) {
        // 左がFalseの場合に右の処理をおこなう
        faceShowFlag || setFaceShowFlag(true);
      } else {
        // 左がTrueの場合に右の処理をおこなう
        faceShowFlag && setFaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]); // numに関してだけ関心のあるEffect(num変更時だけ動く。)
  // 最初の１回だけ行いたい処理は第２引数に配列をとる。（画面表示時にデータ取得、とか）
  // 第２引数にnumを入れると、numが変化した時だけ実行される。

  return (
    <>
      <h1 style={{ color: "red" }}>Hello!</h1>
      <ColorfulMessage color="blue">元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ^ω^ )</p>}
    </>
  );
};

export default App;
