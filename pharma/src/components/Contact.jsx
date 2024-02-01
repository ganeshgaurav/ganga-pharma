import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button, Grid } from "@material-ui/core";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(10),
    padding: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  reachUs: {
    marginTop: theme.spacing(10),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
}));

export const Contact = (props) => {
  const classes = useStyles();
  const location = useLocation();
  const cartItems = location.state?.cartItems || {};
  const [message, setMessage] = useState("");

  const selectedProducts = Object.entries(cartItems)
    .filter(([productId, value]) => value === 1)
    .map(([productId]) => productId);

  const productNames = {
    1: "CLAVLY-625",
    2: "CLAVLY-625 LB",
    3: "GP-DOX CV",
    4: "GP-D3",
    5: "D3C TABLETS",
    6: "D3C++",
    7: "PANTOZET-IV",
    8: "STRENGTHME",
    9: "GPCIN-500",
    10: "STRENGTHME L+",
  };

  const selectedProductNames = selectedProducts.map(
    (productId) => productNames[productId]
  );

  const formattedMessage = selectedProductNames.join("\n");

  console.log("cartItems", cartItems);
  console.log("selectedProducts", selectedProducts);
  console.log("formattedMessage", formattedMessage);
  console.log("productName", selectedProductNames);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;
    console.log("message", e);
    const mailtoLink = `mailto:gangapharma100@gmail.com?subject=Contact Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.title}>
        Contact Us
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Name"
          variant="outlined"
          required
          className={classes.input}
        />
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          required
          className={classes.input}
        />

        <TextField
          name="message"
          label="Message"
          variant="outlined"
          required
          multiline
          rows={4}
          className={classes.input}
          value={message || formattedMessage}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit" variant="contained" className={classes.button}>
          Send
        </Button>
      </form>

      <div className={classes.reachUs}>
        <Typography variant="h5">Reach us on:</Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <FaWhatsapp style={{ fontSize: "24px" }} />
          </Grid>
          <Grid item>
            <a
              href="https://api.whatsapp.com/send?phone=9113787983"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="body1" style={{ fontSize: "18px" }}>
                WhatsApp
              </Typography>
            </a>
          </Grid>
          <Grid item>
            <FaEnvelope style={{ fontSize: "24px" }} />
          </Grid>
          <Grid item>
            <a
              href="mailto:?to=gangapharma100@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Typography variant="body1" style={{ fontSize: "18px" }}>
                Gmail
              </Typography>
            </a>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
