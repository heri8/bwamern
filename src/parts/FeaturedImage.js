import React from "react";
import { Fade } from "react-awesome-reveal";

export default function FeaturedImage({ data }) {
  return (
    <section className="container">
      <div className="container-grid sm">
        {data.map((item, index) => {
          return (
            <div
              key={`FeaturedImage-${index}`}
              className={`item ${index > 0 ? "column-5 " : "column-7 "}${
                index > 0 ? "row-1" : "row-2"
              }`}
            >
              <Fade
                triggerOnce
                direction="up"
                delay={300 * index}
                className="card h-100"
              >
                <figure className="img-wrapper">
                  {}
                  <img
                    className="img-cover"
                    src={
                      item
                        ? `${process.env.REACT_APP_HOST}/${item.imageUrl}`
                        : ""
                    }
                    alt={item._id}
                  />
                </figure>
              </Fade>
            </div>
          );
        })}
      </div>
    </section>
  );
}
