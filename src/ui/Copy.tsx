import { URL } from "../utils/variables";

function Copy() {
  return (
    <em className="text-sm">
      This page is a cheap copy of{" "}
      <a href={URL} className="text-yellow-400">
        👉 rawg.io
      </a>{" "}
      for <span className="text-red-500">learning purpose</span>
    </em>
  );
}

export default Copy;
