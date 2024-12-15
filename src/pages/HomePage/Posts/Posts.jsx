import React, { useEffect, useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { FaPen, FaShareAlt } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  MdOutlineGroupAdd,
  MdOutlineLocationOff,
  MdOutlineLocationOn,
} from "react-icons/md";
import PostCard from "./PostCard";
import { AiOutlineExclamationCircle } from "react-icons/ai";

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
        <div className="   d-flex   justify-content-between ">
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
        <div className="d-flex d-flex align-content-center mt-5 justify-content-between gap-5 ">
          <div className="col">
            {posts.map((post, index) => (
              <div key={index} className="">
                <PostCard {...post} />
              </div>
            ))}
          </div>
          <div>
            <div className="location d-flex align-content-center justify-content-between gap-2">
              <h1 className=" location d-flex align-content-center justify-content-center gap-2 text-sm">
                <MdOutlineLocationOn /> Noida, India
              </h1>
              <p className="pen">
                <FaPen />
              </p>
            </div>
            <hr />
            <p className="p d-flex align-content-center justify-content-center gap-2">
              <AiOutlineExclamationCircle /> Your location will help us serve
              better and extend a personalised experience.
            </p>
          </div>
        </div>
      </Card>
    </Container>
  );
};

export default Post;
