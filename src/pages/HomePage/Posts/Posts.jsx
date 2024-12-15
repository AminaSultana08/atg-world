import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaShareAlt } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineGroupAdd } from "react-icons/md";

const Post = () => {
  // Navbar items for mapping
  const navItems = ["All Posts(32)", "Article", "Event", "Education", "Job"];

  return (
    <Card className="mx-auto" style={{ maxWidth: "800px" }}>
      {/* Navbar */}
      <div className="border-bottom d-flex ">
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

        <div className="d-flex align-content-center justify-content-between g-5">
          <button className="d-flex align-content-center justify-content-center li ">
            Write a post <IoMdArrowDropdown />{" "}
          </button>

          <button
            className="d-flex align-content-center justify-content-center"
            type=""
          >
            <MdOutlineGroupAdd /> Join Group{" "}
          </button>
        </div>
      </div>

      {/* Card Content */}
      <Card.Img
        variant="top"
        src="https://via.placeholder.com/800x300"
        alt="Misty forest landscape"
        className="object-fit-cover"
      />
      <Card.Body>
        {/* Article Label */}
        <div className="d-flex align-items-center gap-2 mb-2">
          <span className="text-muted" style={{ fontSize: "0.9rem" }}>
            ✍️ Article
          </span>
        </div>

        {/* Title and Share Button */}
        <div className="d-flex justify-content-between align-items-start mb-2">
          <h2 className="h5 fw-semibold">
            What if famous brands had regular fonts? Meet RegulaBrands!
          </h2>
          <Button variant="light" className="p-1 rounded-circle">
            <FaShareAlt size={18} />
          </Button>
        </div>

        {/* Description */}
        <p className="text-muted mb-3" style={{ fontSize: "0.95rem" }}>
          I've worked in UX for the better part of a decade. From now on, I plan
          to rel...
        </p>

        {/* Footer */}
        <div className="d-flex justify-content-between align-items-center">
          {/* Avatar and Author */}
          <div className="d-flex align-items-center gap-2">
            <img
              src="https://via.placeholder.com/40"
              alt="Avatar"
              className="rounded-circle"
              width="32"
              height="32"
            />
            <span className="fw-medium" style={{ fontSize: "0.9rem" }}>
              Sarthak Kamra
            </span>
          </div>
          {/* Views */}
          <span className="text-muted" style={{ fontSize: "0.9rem" }}>
            1.4k views
          </span>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
