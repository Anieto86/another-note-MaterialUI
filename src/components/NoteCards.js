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

const useStyles = makeStyles({});

export default function NoteCard({ note, handleDeleted }) {
  const classes = useStyles();
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
            R
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
