import React, { useEffect, useState } from "react";
import { Container, Grid } from "@material-ui/core";
import NoteCards from "../components/NoteCards";
export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/notes`)
      .then((res) => res.json())
      .then((data) => setNotes(data));
    console.log({ notes });
  }, []);

  //deleted function

  const handleDeleted = async (id) => {
    await fetch(`http://localhost:3000/notes/${id}`, {
      method: "DELETED",
    });

    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <Container spacing={2}>
      <Grid container>
        {notes.map((note) => (
          <Grid item key={note.id} xs={12} sm={6} md={3}>
            <NoteCards note={note} handleDeleted={handleDeleted} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
