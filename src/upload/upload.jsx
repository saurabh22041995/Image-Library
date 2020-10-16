import "./upload.css";
import React from "react";

function template() {
  return (
    <div className="upload">
      <div className="container">
        <div className="heading">
          <h1>Upload your images</h1>
        </div>
        <div className="para">
          <p>You can add images, videos here for your future use.</p>
        </div>

        <div className="choosePhoto">
          <input
            style={{ marginRight: "63%" }}
            type="file"
            id="image"
            accept="image/png, image/jpeg"
            name="file"
            onChange={this.fileSelectedHandler}
          ></input>
          <button className="upload bg-primary" onClick={this.onFormSubmit}>
            Upload
          </button>
        </div>

        <div className="row img-container">
          {this.state.imageUrls.length > 0 &&
            this.state.imageUrls.map((item, index) => {
              return (
                <div className="col-md-4">
                  <img
                    id="photo"
                    src={item}
                    style={{ width: "100%", height: "50%", margin: "10px" }}
                  />
                  <div>
                    <span
                      style={{
                        color: "cornflowerblue",
                        margin: "0px 20% 0px 4%",
                        "font-style": "oblique",
                        "font-weight": "800",
                        "font-family": "cursive"
                      }}
                    >
                      Image {index+1}
                    </span>
                    <button className="download">Download</button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default template;
