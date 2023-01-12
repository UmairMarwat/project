import React from "react";



function MyFooter() {
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-around">
        <div className="col-4">
          <ul>
            <li><a>Mens Team</a></li>
            <li><a>Junior Team</a></li>
            <li><a>Women Team</a></li>
            <li><a>Clubs</a></li>
            <li><a>Contact</a></li>
          </ul>

        </div>
        <div className="col-4">
          <ul>
            <li><a>Facebook</a></li>
            <li><a>Instagram</a></li>
            <li><a>Twitter</a></li>
            <li><a>Linkdin</a></li>
            <li><a>Youtube</a></li>
          </ul>

        </div>
        <div className="col-4">
          <h3>
            Member of Club Now
          </h3>
          <form>
            <input type="text" > </input>
            <button type="btn" >Register</button>
          </form>
          

        </div>
        
        
      </div>
      
    </div>
  );
}
export default MyFooter