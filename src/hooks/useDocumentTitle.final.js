import { useEffect, useState } from "react";

const useDocumentTitle = () => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    document.title = title;
  });
  return [title, setTitle];
};

export default useDocumentTitle;
