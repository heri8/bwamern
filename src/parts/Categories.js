import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "elements/Button";

export default function Categories({ data }) {
  return data.map((category, index1) => {
    return (
      <section className="container" key={`category-${index1}`}>
        <Fade bottom>
          <h3 className="mb-3 font-weight-medium">{category.name}</h3>
          <div className="container-grid">
            {category.items.length === 0 ? (
              <div className="row">
                <div className="col-auto align-items-center">
                  There is no property at this category
                </div>
              </div>
            ) : (
              category.items.map((items, index2) => {
                return (
                  <div
                    className="item column-3 row-1"
                    key={`category-${index1}-item${index2}`}
                  >
                    <Fade bottom delay={300*index2}>
                    <div className="card">
                      {items.isPopular && (
                        <div className="tag">
                          Popular
                          <span className="font-weight-light"> Choice</span>
                        </div>
                      )}
                      <figure className="img-wrapper" style={{ height: 180 }}>
                        <img
                          src={items.imageUrl}
                          alt={items.name}
                          className="img-cover"
                        />
                      </figure>
                      <div className="meta-wrapper">
                        <Button
                          href={`/properties/${items.id}`}
                          type="link"
                          className="streched-link d-block text-gray-800"
                        >
                          <h5 className="h4">{items.name}</h5>
                        </Button>
                        <span className="text-gray-500">
                          {items.city}, {items.country}
                        </span>
                      </div>
                    </div>
                    </Fade>
                  </div>
                );
              })
            )}
          </div>
        </Fade>
      </section>
    );
  });
}
