import React from "react";
import "./style.css";

const Loader = () => {
  return (
    <div id="backdrop">
      <div class="text-center loading">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;
