import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import NoteCards from "../components/NoteCards";
import Masonry from "react-masonry-css";

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/notes`)
      .then((res) => res.json())
      .then((data) => setNotes(data));
    console.log({ notes });
  }, []);

  //deleted function

  const handleDeleted = async (id) => {
    await fetch(`http://localhost:8000/notes/${id}`, {
      method: "DELETED",
    });

    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const breakpoint = {
    default: 3,
    1000: 2,
    700: 1,
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoint}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div item key={note.id}>
            <NoteCards note={note} handleDeleted={handleDeleted} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}
