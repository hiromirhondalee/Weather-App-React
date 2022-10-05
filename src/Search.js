import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <div className="search-engine-container">
        <form className="input-group mb-3 search-form">
          <input
            type="text"
            className="form-control"
            placeholder="Enter city name..."
            autoComplete="off"
            autoFocus="on"
          />
          <input type="submit" value="Search" className="btn btn-primary" />
        </form>
      </div>
    </div>
  );
}
