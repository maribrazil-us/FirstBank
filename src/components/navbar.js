

function NavBar(){
    return(
      <>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <a className="navbar-brand" href="#">FBR</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" data-toggle="tooltip" data-placement="bottom" title="Create an account today" href="#/createaccount/">Create Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tooltip" data-placement="bottom" title="Make a deposit to your account" href="#/deposit/">Deposit</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tooltip" data-placement="bottom" title="Withdraw from your account" href="#/withdraw/">Withdraw</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-toggle="tooltip" data-placement="bottom" title="See all transactions" href="#/alldata/">All Data</a>
            </li>
            </ul>
        </div>
      </nav>
      </>
    );
  }
export default NavBar;