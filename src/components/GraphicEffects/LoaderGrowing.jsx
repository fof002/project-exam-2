import Spinner from "react-bootstrap/Spinner";

export function LoaderGrowing() {
  return (
    <div
      id="main-container"
      className="d-flex gap-4 flex-wrap justify-content-center"
    >
      <Spinner animation="grow" />
    </div>
  );
}
