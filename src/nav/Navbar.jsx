import { Link } from 'react-router-dom';

function Navcom() {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-success">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">Merinoshop</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse align-items-center justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">All Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/create">Create Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">Cart[0]</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  );
}

export default Navcom;