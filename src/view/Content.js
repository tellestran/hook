import React from "react";
import { useState, useEffect } from "react";

//useEffect(callback, [dependency])
// Có 3 trường hợp:
// 1, useEffect(callback)
// - Gọi callback mỗi khi Comp re-render
// - Gọi callback sau khi Comp thêm element vào DOM

// 2, useEffect(callback, [])
// - Chỉ gọi Callback 1 lần sau khi Component mount (dùng cho logic chạy 1 lần)
// 3, useEffect(callback, [dependency])
// - Callback được gọi mỗi khi dependency thay đổi
// --------------------------------------
// 1, Luôn đúng: callback luôn dược gọi sau khi component mount
// 2, Cleanup Function luôn được gọi trước khi Components Unmount
// 3, Cleanup Function luôn được gọi trước khi callback được gọi (trừ lần mounted)

const tabs = ["posts", "comments", "albums"];

const Content = () => {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    // console.log("Re-render");
    document.title = title; //Nếu đưa ra ngoài sẽ gây ra trễ giao diện người dùng
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  //Khi không sử dụng useEffect các thao tác sẽ luôn re-render lại mỗi khi có sự thay đổi, vì vậy phải sử dụng useEffect để tránh việc re-render

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 200);
    };
    window.addEventListener("scroll", handleScroll);
    //Khi mình mount sẽ load event vào DOM của người dùng, khi unmount thì event listen k bị unmount => rò rỉ bộ nhớ vì window k bị unmount => log

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; //Bộ nhớ đã được dọn dẹp
  }, []);
  return (
    <div>
      {tabs.map((tab) => {
        return (
          <button
            key={tab}
            onClick={() => setType(tab)}
            style={
              type === tab ? { color: "#fff", backgroundColor: "#333" } : {}
            }
          >
            {tab}
          </button>
        );
      })}

      <input value={title} onChange={(event) => setTitle(event.target.value)} />
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <div>
                <h3>{post.title || post.name}</h3>
              </div>
            </li>
          );
        })}
      </ul>
      {showGoToTop && (
        <button
          style={{
            position: "fixed",
            right: "16px",
            bottom: "16px",
          }}
        >
          {" "}
          To Top{" "}
        </button>
      )}
    </div>
  );
};

export default Content;
