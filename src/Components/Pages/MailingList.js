import React, { Component } from "react";
import { MailingHP, MailText } from "../styled-components/mailingelements";
import { TextField, Button } from "@material-ui/core";
import "../styled-components/maillist.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "white"
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "black"
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "purple"
      },
      "& .MuiOutlinedInput-input": {
        color: "black"
      },
      "&:hover .MuiOutlinedInput-input": {
        color: "black"
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
        color: "black"
      },
      "& .MuiInputLabel-outlined": {
        color: "black",
        FontSize:'70px'
      },
      "&:hover .MuiInputLabel-outlined": {
        color: "black"
      },
      "& .MuiInputLabel-outlined.Mui-focused": {
        color: "black"
      }
    }
  });
  export default function MailingList() {
    const classes = useStyles();
    return (
      <MailingHP>
        <MailText style={{ marginTop: "100px" }}>
          <h1>JOIN THE MAILING LIST AND STAY TUNED</h1>
          <TextField
            style={{ color: "white", width: "500px", marginTop: "20rem",height:'85px' }}
            sx={{ border: 1 }}
            className={classes.root}
            label="Your Email"
            variant="outlined"
          />
          <Button
            style={{ color: "white", marginTop: "19.8rem", marginLeft: "10px",height:'59px',borderColor:'white' }}
            variant="outlined"
            className={classes.root}
          >
            SIGN UP
          </Button>
        </MailText>
      </MailingHP>
    );
  }
