import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "elements/Button";

export default function Activities({ data }) {
  if (data.length === 0) return null;
  return (
    <section className="container">
      <Fade triggerOnce direction="up">
        <h3 className="mb-3 font-weight-medium">Activities</h3>
        <div className="container-grid">
          {data.map((item, index2) => {
            return (
              <div
                className="item column-3 row-1"
                key={`activity-item${index2}`}
              >
                <Fade triggerOnce direction="up" delay={300 * index2}>
                  <div className="card">
                    {item.isPopular && (
                      <div className="tag">
                        Popular
                        <span className="font-weight-light"> Choice</span>
                      </div>
                    )}
                    <figure className="img-wrapper" style={{ height: 180 }}>
                      <img
                        src={item.imageUrl ? `${process.env.REACT_APP_HOST}/${item.imageUrl}` : ""}
                        alt={item.name}
                        className="img-cover"
                      />
                    </figure>
                    <div className="meta-wrapper">
                      <Button
                        href={`/properties/${item._id}`}
                        type="link"
                        className="streched-link d-block text-gray-800"
                      >
                        <h5 className="h4">{item.name}</h5>
                      </Button>
                      <span className="text-gray-500">
                        {item.type}
                      </span>
                    </div>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </Fade>
    </section>
  );
}
