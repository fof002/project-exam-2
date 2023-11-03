import { GetPosts } from "../../components/api/get/GetPosts";

export function HomePage() {
  return (
    <div>
      <h1 className="border-bottom border-primary pb-3 mb-3">
        Holidaze - Dream Venues
      </h1>
      <div className="d-flex gap-4 flex-wrap justify-content-center">
        <GetPosts />
      </div>
    </div>
  );
}
