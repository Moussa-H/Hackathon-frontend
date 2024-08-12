import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Typography,
  Box,
  IconButton,
  Radio,
  RadioGroup,
  FormControl,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";

const PopupGenerate = ({ open, handleClose }) => {
  const [name, setName] = useState("");
  const [applicationSize, setApplicationSize] = useState("");
  const [price, setPrice] = useState("Free");
  const [category, setCategory] = useState("");
  const [contentRatings, setContentRatings] = useState({
    Unrated: false,
    Teen: false,
    Mature: false,
    Everyone: false,
    AdultsOnly: false,
  });
  const [releaseDate, setReleaseDate] = useState("");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleContentRatingChange = (event) => {
    setContentRatings({
      ...contentRatings,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSubmit = async () => {
    const [year, month] = releaseDate.split("-").map(Number);

    const data = {
      androidVer: "900",
      size: parseFloat(applicationSize) || 0, // Default to 0 if empty
      price: price === "Free" ? 0 : 1,
      categoryEncoded: 1, // Make sure this value is correct
      typeFree: price === "Free" ? 1 : 0,
      typePaid: price === "Paid" ? 1 : 0,
      contentRatingsAdultsOnly18: contentRatings.AdultsOnly ? 1 : 0,
      contentRatingsEveryone: contentRatings.Everyone ? 1 : 0,
      contentRatingsEveryone10: 0, // If this field is not used, ensure it's handled correctly
      contentRatingsMature17: contentRatings.Mature ? 1 : 0,
      contentRatingsTeen: contentRatings.Teen ? 1 : 0,
      contentRatingsUnrated: contentRatings.Unrated ? 1 : 0,
      lastUpdatedYear: year,
      lastUpdatedMonth: month,
    };

    const token = localStorage.getItem("token");
    console.log(data);
    try {
      const response = await axios.post(
        "http://localhost:4000/aiRequest/createRequest",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Response:", response.data);

      // Handle success
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      // Handle error
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: "20px",
              fontWeight: 600,
              textAlign: "left",
              flexGrow: 1,
            }}
          >
            Input Your Application Data
          </Typography>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              color: "grey[500]",
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { my: 1, width: "100%", height: "50px" },
            "& .MuiTypography-root": { mb: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography sx={{ fontSize: "15px", fontWeight: 600, mt: 2 }}>
            Name
          </Typography>
          <TextField
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{
              border: 0,
              backgroundColor: "#F9F9F9",
              height: "50px",
              "& .MuiInputBase-root": {
                height: "50px",
              },
              "& .MuiOutlinedInput-root": {
                height: "50px",
                "& fieldset": {
                  height: "50px",
                },
              },
            }}
          />

          <Typography sx={{ fontSize: "15px", fontWeight: 600, mt: 2 }}>
            Application Size
          </Typography>
          <TextField
            variant="outlined"
            value={applicationSize}
            onChange={(e) => setApplicationSize(e.target.value)}
            sx={{
              border: 0,
              backgroundColor: "#F9F9F9",
              height: "50px",
              "& .MuiInputBase-root": {
                height: "50px",
              },
              "& .MuiOutlinedInput-root": {
                height: "50px",
                "& fieldset": {
                  height: "50px",
                },
              },
            }}
          />

          <Typography sx={{ fontSize: "15px", fontWeight: 600, mt: 2 }}>
            Price
          </Typography>
          <FormControl component="fieldset">
            <RadioGroup
              row
              value={price}
              onChange={handlePriceChange}
              sx={{ justifyContent: "flex-start", marginBottom: "0px" }}
            >
              <FormControlLabel
                value="Free"
                control={<Radio />}
                label="Free"
                sx={{ fontSize: "13px", mr: 2, marginBottom: "0px" }}
              />
              <FormControlLabel
                value="Paid"
                control={<Radio />}
                label="Paid"
                sx={{ fontSize: "13px", marginBottom: "0px" }}
              />
            </RadioGroup>
          </FormControl>

          <Typography sx={{ fontSize: "15px", fontWeight: 600, mt: 2 }}>
            Application Category
          </Typography>
          <TextField
            select
            value={category}
            onChange={handleCategoryChange}
            variant="outlined"
            sx={{
              border: 0,
              backgroundColor: "#F9F9F9",
              height: "50px",
              "& .MuiInputBase-root": {
                height: "50px",
              },
              "& .MuiOutlinedInput-root": {
                height: "50px",
                "& fieldset": {
                  height: "50px",
                },
              },
            }}
          >
            <MenuItem value="Art & Design">Art & Design</MenuItem>
            <MenuItem value="Auto & Vehicles">Auto & Vehicles</MenuItem>
            <MenuItem value="Beauty">Beauty</MenuItem>
            <MenuItem value="Comics">Comics</MenuItem>
            <MenuItem value="Dating">Dating</MenuItem>
            <MenuItem value="Education">Education</MenuItem>
            <MenuItem value="Entertainment">Entertainment</MenuItem>
            <MenuItem value="Events">Events</MenuItem>
            <MenuItem value="Photography">Photography</MenuItem>
          </TextField>

          <Typography sx={{ fontSize: "15px", fontWeight: 600, mt: 2 }}>
            Content Rating
          </Typography>
          <FormControlLabel
            control={
              <Checkbox
                checked={contentRatings.Unrated}
                onChange={handleContentRatingChange}
                name="Unrated"
              />
            }
            label="Unrated"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={contentRatings.Teen}
                onChange={handleContentRatingChange}
                name="Teen"
              />
            }
            label="Teen"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={contentRatings.Mature}
                onChange={handleContentRatingChange}
                name="Mature"
              />
            }
            label="Mature"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={contentRatings.Everyone}
                onChange={handleContentRatingChange}
                name="Everyone"
              />
            }
            label="Everyone"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={contentRatings.AdultsOnly}
                onChange={handleContentRatingChange}
                name="AdultsOnly"
              />
            }
            label="Adults Only"
          />

          <Typography sx={{ fontSize: "15px", fontWeight: 600, mt: 2 }}>
            Application Release Date
          </Typography>
          <TextField
            type="date"
            variant="outlined"
            value={releaseDate}
            onChange={(e) => setReleaseDate(e.target.value)}
            sx={{
              border: 0,
              backgroundColor: "#F9F9F9",
              height: "50px",
              "& .MuiInputBase-root": {
                height: "50px",
              },
              "& .MuiOutlinedInput-root": {
                height: "50px",
                "& fieldset": {
                  height: "50px",
                },
              },
            }}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{ mt: 2, mb: 2 }}
          >
            Generate Now
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default PopupGenerate;
