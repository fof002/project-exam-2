export function SearchBar() {
  return (
    <form class="d-flex" role="search">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search our venues..."
        aria-label="Search"
      />
      <button class="btn search-btn btn-outline-light text-white" type="submit">
        Search
      </button>
    </form>
  );
}
