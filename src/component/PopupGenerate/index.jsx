import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [name, setName] = useState(""); // Application Name
  const [applicationSize, setApplicationSize] = useState("");
  const [price, setPrice] = useState("Free");
  const [customPrice, setCustomPrice] = useState("");
  const [category, setCategory] = useState("");
  const [contentRatings, setContentRatings] = useState({
    Unrated: false,
    Teen: false,
    Mature: false,
    Everyone: false,
    AdultsOnly: false,
  });
  const [releaseDate, setReleaseDate] = useState("");
  const [androidVer, setAndroidVer] = useState("");

  const navigate = useNavigate();

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
    if (event.target.value === "Free") {
      setCustomPrice("");
    }
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
    appName: name, // Ensure this is properly set
    androidVer: androidVer || "900", // Default to "900" if empty
    size: parseFloat(applicationSize) || 0, // Default to 0 if empty
    price: price === "Free" ? 0 : parseFloat(customPrice) || 1,
    category: category, // Make sure this is set correctly
    typeFree: price === "Free" ? 1 : 0,
    typePaid: price === "Paid" ? 1 : 0,
    contentRatingsAdultsOnly18: contentRatings.AdultsOnly ? 1 : 0,
    contentRatingsEveryone: contentRatings.Everyone ? 1 : 0,
    contentRatingsEveryone10: contentRatings.Everyone ? 1 : 0, // Adjust as necessary
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

    // Navigate to the DetailAppPredict component with response data
    navigate("detailapppredict", { state: { data: response.data } });
  } catch (error) {
    console.error(
      "Error response:",
      error.response?.data || "No response data"
    );
    console.error("Error message:", error.message || "No error message");
    // Optionally show user-friendly error message
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
          <>
            <Typography sx={{ fontSize: "15px", fontWeight: 600, mt: 2 }}>
              Application Name
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
              Android Version
            </Typography>
            <TextField
              variant="outlined"
              value={androidVer}
              onChange={(e) => setAndroidVer(e.target.value)}
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

            {price === "Paid" && (
              <TextField
                variant="outlined"
                value={customPrice}
                onChange={(e) => setCustomPrice(e.target.value)}
                label="Enter Price"
                type="number"
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
            )}

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
              <MenuItem value="ART_AND_DESIGN">ART_AND_DESIGN</MenuItem>
              <MenuItem value="AUTO_AND_VEHICLES">AUTO_AND_VEHICLES</MenuItem>
              <MenuItem value="BEAUTY">BEAUTY</MenuItem>
              <MenuItem value="BOOKS_AND_REFERENCE">
                BOOKS_AND_REFERENCE
              </MenuItem>
              <MenuItem value="BUSINESS">BUSINESS</MenuItem>
              <MenuItem value="COMICS">COMICS</MenuItem>
              <MenuItem value="COMMUNICATION">COMMUNICATION</MenuItem>
              <MenuItem value="DATING">DATING</MenuItem>
              <MenuItem value="EDUCATION">EDUCATION</MenuItem>
              <MenuItem value="ENTERTAINMENT">ENTERTAINMENT</MenuItem>
              <MenuItem value="EVENTS">EVENTS</MenuItem>
              <MenuItem value="FAMILY">FAMILY</MenuItem>
              <MenuItem value="FINANCE">FINANCE</MenuItem>
              <MenuItem value="GAME">GAME</MenuItem>
              <MenuItem value="FOOD_AND_DRINK">FOOD_AND_DRINK</MenuItem>
              <MenuItem value="HEALTH_AND_FITNESS">HEALTH_AND_FITNESS</MenuItem>
              <MenuItem value="HOUSE_AND_HOME">HOUSE_AND_HOME</MenuItem>
              <MenuItem value="LIBRARIES_AND_DEMO">LIBRARIES_AND_DEMO</MenuItem>
              <MenuItem value="LIFESTYLE">LIFESTYLE</MenuItem>
              <MenuItem value="MAPS_AND_NAVIGATION">
                MAPS_AND_NAVIGATION
              </MenuItem>
              <MenuItem value="MEDICAL">MEDICAL</MenuItem>

              <MenuItem value="NEWS_AND_MAGAZINES">NEWS_AND_MAGAZINES</MenuItem>
              <MenuItem value="PARENTING">PARENTING</MenuItem>
              <MenuItem value="PERSONALIZATION">PERSONALIZATION</MenuItem>
              <MenuItem value="PHOTOGRAPHY">PHOTOGRAPHY</MenuItem>
              <MenuItem value="PRODUCTIVITY">PRODUCTIVITY</MenuItem>
              <MenuItem value="SHOPPING">SHOPPING</MenuItem>
              <MenuItem value="SOCIAL">SOCIAL</MenuItem>
              <MenuItem value="SPORTS">SPORTS</MenuItem>
              <MenuItem value="TOOLS">TOOLS</MenuItem>
              <MenuItem value="TRAVEL_AND_LOCAL">TRAVEL_AND_LOCAL</MenuItem>
              <MenuItem value="VIDEO_PLAYERS">VIDEO_PLAYERS</MenuItem>
              <MenuItem value="WEATHER">WEATHER</MenuItem>
            </TextField>

            <Typography sx={{ fontSize: "15px", fontWeight: 600, mt: 2 }}>
              Content Ratings
            </Typography>
            <FormControl component="fieldset">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  flexWrap: "wrap",
                }}
              >
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
              </Box>
            </FormControl>

            <Typography sx={{ fontSize: "15px", fontWeight: 600, mt: 2 }}>
              Release Date
            </Typography>
            <TextField
              variant="outlined"
              value={releaseDate}
              onChange={(e) => setReleaseDate(e.target.value)}
              type="month"
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
          </>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
              mt: 4,
            }}
          >
            <Button
              onClick={handleClose}
              variant="outlined"
              color="primary"
              sx={{
                width: "120px",
                height: "50px",
                fontSize: "15px",
                fontWeight: 600,
                textTransform: "none",
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmit}
              variant="contained"
              color="primary"
              sx={{
                width: "120px",
                height: "50px",
                fontSize: "15px",
                fontWeight: 600,
                textTransform: "none",
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default PopupGenerate;
