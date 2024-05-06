import { useContext, useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Box, Hidden } from "@mui/material";
import brandlogo from "../../assets/brandlogo.png";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";
import DropdownButton from "../../components/DropDown.jsx";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../axiosInstance.js";
import toast from "react-hot-toast";
import AppContext from "../../AppContext.js";

const SearchContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
}));

const Search = styled("div")(({ theme }) => ({
  display: "flex",
  position: "relative",
  border: "1px solid gray",
  borderRadius: "20px",
  backgroundColor: alpha(theme.palette.common.white, 1.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "40%",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "90%",
      "&:focus": {
        width: "90%",
      },
    },
  },
}));

const Topbar = (props) => {
  const { sections, title, searchOption, setSearchOption, isLoggedIn,checkUser } = useContext(AppContext);
  const navigate = useNavigate();
  console.log(searchOption,"searchhh");

  const handleLogout = () => {
    axiosInstance
      .post("/auth/logout")
      .then((res) => {
        console.log(res,"response in logout");
        if (res.status === 200) {
          toast.success(res.data.message)
          checkUser()
        }
      })
      .catch((err) => {
        console.log(err,"errror");
        toast.error("something went wrong")
      });
  };

  return (
    <>
      <Toolbar
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <img src={brandlogo} alt="logo" style={{ height: "7vh" }} />
        </Box>
        <Hidden smDown>
          <SearchContainer>
            <Search>
              <StyledInputBase
                placeholder="Search…"
                value={searchOption}
                disabled
                inputProps={{ "aria-label": "search" }}
              />
              {/* <Button sx={{borderRadius:'20px'}}>hello</Button> */}
              <DropdownButton setSearchOption={setSearchOption} />
            </Search>
          </SearchContainer>
        </Hidden>
        <Box sx={{ marginLeft: "auto" }}>
          {!isLoggedIn ? (
            <>
              <Button
                variant="outlined"
                size="medium"
                sx={{
                  marginRight: 2,
                  textTransform: "capitalize",
                  borderRadius: "10px",
                }}
                onClick={() => navigate("/auth")}
              >
                Sign in
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outlined"
                size="medium"
                sx={{
                  marginRight: 2,
                  textTransform: "capitalize",
                  borderRadius: "10px",
                }}
                onClick={handleLogout}
              >
                logout
              </Button>
              <Button
                variant="outlined"
                size="medium"
                sx={{
                  marginRight: 2,
                  textTransform: "capitalize",
                  borderRadius: "10px",
                }}
              >
                profile
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </>
  );
};

export default Topbar;
