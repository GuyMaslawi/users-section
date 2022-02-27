import Grid from "@mui/material/Grid";
import Header from "./components/header/Header";
import { ITEMS } from "./constants/items";
import Box from "./components/box/Box";
import { Wrapper } from "./AppStyle.js";

const App = () => {
  const listOfItems = () =>
    ITEMS.map((item) => {
      return (
        <Grid key={item.id} item xs={12} sm={6} md={3}>
          <Box title={item.title} img={item.img}>
            {item.description}
          </Box>
        </Grid>
      );
    });

  return (
    <Wrapper>
      <Header
        title="upload users and group"
        subtitle="upload users and group from a csv or Active directory"
      />
      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {listOfItems()}
      </Grid>
    </Wrapper>
  );
};

export default App;
