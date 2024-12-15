import React, { useEffect, useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { FaShareAlt } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineGroupAdd } from "react-icons/md";
import PostCard from "./PostCard";

const Post = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("postData.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  // Navbar items for mapping
  const navItems = ["All Posts(32)", "Article", "Event", "Education", "Job"];

  return (
    <Container>
      <Card className="mx-auto" style={{ maxWidth: "1400px" }}>
        {/* Navbar */}
        <div className="  border-bottom d-flex   justify-content-between ">
          <nav className="d-flex gap-3 px-4 py-2">
            {navItems.map((item, index) => (
              <button
                key={index}
                className={`btn btn-link p-0 text-decoration-none ${
                  index === 0 ? "text-primary fw-bold" : "text-muted"
                }`}
                style={{ fontSize: "0.9rem" }}
              >
                {item}
              </button>
            ))}
          </nav>

          <div className="d-flex w-full align-content-end justify-content-end gap-2">
            <button className="btn d-flex align-items-center justify-content-center gap-1 ">
              Write a post <IoMdArrowDropdown />{" "}
            </button>

            <button
              className="btn d-flex align-items-center justify-content-center gap-1"
              type=""
            >
              <MdOutlineGroupAdd /> Join Group{" "}
            </button>
          </div>
        </div>

        {/* Card Content */}
        <div>
          {posts.map((post) => (
            <PostCard key={post.id} post={post}></PostCard>
          ))}
        </div>
      </Card>
    </Container>
  );
};

export default Post;
