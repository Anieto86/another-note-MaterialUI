import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  IconButton,
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { yellow, red, blue, green } from "@material-ui/core/colors";

const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      if (note.category === "work") {
        return yellow[700];
      }
      if (note.category === "reminders") {
        return red[700];
      }
      if (note.category === "money") {
        return green[700];
      }
      if (note.category === "todos") {
        return blue[700];
      }
    },
  },
});

export default function NoteCard({ note, handleDeleted }) {
  const classes = useStyles(note);
  return (
    <Card elevation={1}>
      <CardHeader
        action={
          <IconButton onClick={() => handleDeleted(note.id)}>
            <DeleteOutlineIcon />
          </IconButton>
        }
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {note.category[0].toUpperCase()}
          </Avatar>
        }
        title={note.title}
        subheader={note.category}
      />

      <CardContent>
        <Typography variant="body1" color="textSecondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
}
