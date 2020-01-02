import React from "react";
import { ButtonSecondary } from "../styles/ButtonSecondary";

const NewsLetter = () => {
  return (
    <section className="newsletter-section my-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <div className="py-5 my-5">
              <h4 className="pb-4">
                Join our newsletter for the latest tips and tricks to grow your career.
              </h4>
              <form>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                    />
                  </div>
                </div>
                <ButtonSecondary type="submit" className="btn btn-primary">
                  Subscribe Now
                </ButtonSecondary>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
