import { useState, useEffect } from "react";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const StoreFromDb = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersCollectionRef = collection(db, "users");
    // console.log(usersCollectionRef);

    // コレクションの中にあるドキュメントを取得するためにgetDocs関数を利用する
    // "getDoc関数"と混同しないよう注意する
    // getDocsによりQueryを実行して結果としてQuerySnapshotを受け取る
    // QuerySnapshotの中にQueryDocumentSnapshot(ドキュメントのデータを含む)がある
    getDocs(usersCollectionRef).then((querySnapshot) => {
      // console.log(querySnapshot);

      // QuerySnapshotの中にあるdocs(配列)をforEachで展開する
      // _document > ... > fields に保存したデータがある
      // querySnapshot.docs.forEach((doc) => console.log(doc));

      // docのQueryDocumentSnapshotはdocメソッドを持っているため
      // doc.data()でフィールドのデータのみを取り出すことができる
      // querySnapshot.docs.forEach((doc) => console.log(doc.data()));
      // querySnapshotはforEachメソッドを持っているためdocsを省略できる
      querySnapshot.forEach((doc) =>
        console.log("保存したデータ: ", doc.data())
      );

      // 取得したデータをuseStateで定義したusersに保存してブラウザに表示する
      // forEachは配列を展開するだけなのでmapを利用する
      // ブラウザ上でusersを展開する際にkey propsで一意なキーを設定する必要がある
      // ドキュメントのidをdoc.data()の結果とマージする
      setUsers(
        querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, []);

  // ドキュメントのidを指定してデータを取得する
  // collection関数ではなくdoc関数を利用する(DocumentSnapshotが戻される)
  const userDocumentRef = doc(db, "users", "rFnc5ULTtZ1gavTNyhsY");
  getDoc(userDocumentRef).then((documentSnapshot) => {
    // DocumentSnapshotに含まれるexistsメソッドを利用してデータの有無を確認する(ある場合true)
    if (documentSnapshot.exists()) {
      console.log("指定したIDのデータ: ", documentSnapshot.data());
    } else {
      console.log("No such document!");
    }
  });

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};
