import React from 'react';

function MainContent() {
  return (
    <div className="main">
      <div className="landing-page-content">
        <div className="landing-page-text">
          <h2>Teamwork makes the dream work</h2>
          <p>
            Team mates must realize that in order to accomplish their goal of
            winning the game they must help each other and work together.
          </p>
        </div>
        <div className="landing-page-form">
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <small id="emailHelp" className="form-text text-muted">
              Login and start collaborating.
            </small>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
