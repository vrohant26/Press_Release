import React, { useState } from "react";
import { PressRelease } from "../Data";

export default function Articles() {
  const [Options, setOptions] = useState("2022");

  return (
    <div className="articles ">
      <div className="container">
        <div className="Heading my-4">
          <p className="heading-title">Press Releases</p>
          <div className="year d-flex align-items-center">
            <p className="mx-1 ">Select Year</p>
            <select
              className="form-select"
              defaultValue="2022"
              onChange={(e) => setOptions(e.target.value)}
              aria-label="Default select example"
            >
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div style={{ padding: "0px" }} className="col-lg-3  bg-white">
            <p className="text-center border-end  bg-blue text-white">
              <b>Navigation</b>
            </p>
            <ul style={{ padding: "0 15px" }}>
              <li>All News</li>
              <li>Featured News</li>
              <li className="active">Press Release</li>
              <li>Newsletters</li>
              <li>HBSHAA Virtual Round Table</li>
              <li>Brand Insights Blog</li>
              <li>Fact Sheet for Media</li>
            </ul>
          </div>
          <div style={{ padding: "0px" }} className="col-lg-9    bg-white ">
            <p className="text-center bg-blue text-white">
              <b>Articles</b>
            </p>
            <div className="news overflow-auto">
              {PressRelease.map((data) => {
                if (data.year.toString() === Options) {
                  return (
                    <div key={data.title} className="news-card">
                      <div className="date">{data.date}</div>
                      <div className="title">
                        <p>{data.title}</p>
                      </div>
                      <div className="sub-text">
                        <p>{data.summarry}</p>
                      </div>
                    </div>
                  );
                } else return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
