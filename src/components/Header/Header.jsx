import "./Header.css";
import { Autocomplete } from "@react-google-maps/api";
import { Search } from "@mui/icons-material";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@mui/material";

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar className="toolbar">
        <Typography variant="h5" className="title">
          Travel Advisor
        </Typography>
        <Box display="flex" className="box">
          <Typography variant="h6" className="title">
            Explore New Places
          </Typography>
          {/* <Autocomplete> */}
          <div className="search">
            <div className="SearchIcon">
              <Search />
            </div>
            <InputBase placeholder="Search..." className="Root Input" />
          </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
