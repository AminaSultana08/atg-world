import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaShareAlt } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";

const PostCard = ({ post }) => {
  const {
    image,
    typeOfPost,
    topicHeader,
    userImage,
    userName,
    viewsCount,
    location,
    jobCompanyName,
  } = post;
  return (
    <div>
      <div>
        <Card>
          <Card.Img
            variant="top"
            src={image}
            alt="Misty forest landscape"
            className="object-fit-cover"
          />
          <Card.Body>
            {/* Article Label */}
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="text-muted" style={{ fontSize: "0.9rem" }}>
                ✍️ {typeOfPost}
              </span>
            </div>

            {/* Title and Share Button */}
            <div className="d-flex justify-content-between align-items-start mb-2">
              <h2 className="h5 fw-semibold">{typeOfPost}</h2>
              <Button variant="light" className="p-1 rounded-circle">
                <FaShareAlt size={18} />
              </Button>
            </div>

            {/* Description */}
            <p className="text-muted mb-3" style={{ fontSize: "0.95rem" }}>
              {topicHeader}
            </p>

            {/* Footer */}
            <div className="d-flex justify-content-between align-items-center">
              {/* Avatar and Author */}
              <div className="d-flex align-items-center gap-2">
                <img
                  src={userImage}
                  alt="Avatar"
                  className="rounded-circle"
                  width="32"
                  height="32"
                />
                <span className="fw-medium" style={{ fontSize: "0.9rem" }}>
                  {userName}
                </span>
              </div>
              {/* Views */}
              <span className="text-muted" style={{ fontSize: "0.9rem" }}>
                <IoEyeOutline />
                {viewsCount}
              </span>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default PostCard;
