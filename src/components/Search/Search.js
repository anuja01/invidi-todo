import { Grid, TextField } from "@mui/material";
import './styles.css'
const SearchInput = ({ searchInputHandler }) => {
  return (
    <Grid container spacing={2} className="SearchBox">
      <Grid item xs={4}></Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={4}>
        <TextField
          id="searchInput"
          inputProps={{ "data-testid": "textField-searchInput" }}
          variant="outlined"
          fullWidth
          label="Search your todo..."
          onChange={searchInputHandler}
        />
      </Grid>
    </Grid>
  );
};

export default SearchInput;
