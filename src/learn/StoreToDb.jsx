import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const StoreToDb = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // コレクションID(users)を作成、ドキュメントIDは自動生成
      await addDoc(collection(db, "users"), {
        // フィールド名・値を指定
        // name:name,
        // email:email
        // keyの名称とvalueの変数名が一致しているときは省略可能
        name,
        email,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">name: </label>
        <input
          type="text"
          id="name"
          placeholder="ここに入力"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">email: </label>
        <input
          type="text"
          id="email"
          placeholder="ここに入力"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">送信</button>
      </form>
    </div>
  );
};
