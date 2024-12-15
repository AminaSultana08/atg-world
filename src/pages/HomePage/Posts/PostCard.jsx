import React from "react";
import { Card } from "react-bootstrap";
import { IoEyeOutline } from "react-icons/io5";
// import { Button, Card } from "react-bootstrap";
// import { BsThreeDots } from "react-icons/bs";
// import { FaShareAlt } from "react-icons/fa";
import "./custom.css";
// import { MdShare } from "react-icons/md";

const PostCard = ({
  type,
  title,
  description,
  image,
  userImage,
  user,
  views,
  date,
  location,
  company,
  buttonText,
}) => {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="col g-0">
        {/* Image Section */}
        <div className="">
          <Card.Img
            variant="top"
            src={image}
            alt="Misty forest landscape"
            className="object-fit-cover img-fluid "
            style={{ height: "100%", minWidth: "100%" }}
          />
        </div>

        {/* Content Section */}
        <div className=" d-flex flex-column justify-content-between">
          <div className="card-body">
            {/* Card Type */}
            <h6 className="text-muted">
              {type === "article" && "📝 Article"}
              {type === "education" && "🎓 Education"}
              {type === "meetup" && "📅 Meetup"}
              {type === "job" && "💼 Job"}
            </h6>

            {/* Title */}
            <h5 className="card-title">{title}</h5>
            <p className="card-text text-secondary">{description}</p>

            {/* Conditional Fields */}
            {type === "meetup" && date && location && (
              <p className="card-text">
                <span>📅 {date}</span> | <span>📍 {location}</span>
              </p>
            )}
            {type === "job" && company && (
              <p className="card-text">
                🏢 <strong>{company}</strong>
              </p>
            )}
          </div>
          {buttonText && (
            <a href="#" className="btn d-flex button  btn-sm">
              {buttonText}
            </a>
          )}

          {/* Footer Section */}
          <div className="card-footer bg-white border-0 d-flex justify-content-between align-items-center">
            <div className="text-muted d-flex justify-content-between  align-content-center">
              <div className="d-flex justify-content-between  align-content-center pt-2 gap-2">
                <img
                  src={userImage}
                  alt="Avatar"
                  className="rounded-circle"
                  width="32"
                  height="32"
                />{" "}
                <h1 className="h1">{user} </h1>
              </div>
              <h2 className="h2">
                <IoEyeOutline /> {views}k views
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
