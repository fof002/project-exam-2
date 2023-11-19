export function ErrorOccured(props) {
  return (
    <div
      id="main-container"
      className="d-flex gap-4 flex-wrap justify-content-center"
    >
      {props.message}
    </div>
  );
}
