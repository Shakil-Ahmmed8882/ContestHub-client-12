import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useGetOpenData from "../../Hooks/useGetOpenData";
import TabContents from "../TabContents";
import { Grid } from "@mui/material";
import Spinner from "../Demo/Spinner";


export default function AllContests() {
  const [value, setValue] = React.useState(0);

  const contestsType = [
    "All",
    "Business",
    "Medical",
    "Writing",
    "Gaming",
    "Tech",
    "Design",
    "Coding",
    "Photography",
    "Music",
    "Data Science",
  ];

  const contestType = contestsType[value];
  const { data, isLoading } = useGetOpenData(
    `contests?type=${contestType}`,
    contestType
  );

  if (isLoading) return <Spinner></Spinner>

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        minHeight: 100,
        maxWidth: { lg: 1100, sm: 480, p: 8 },
        marginInline:'auto',
        bgcolor: "background.paper",
        paddingBottom: 4,
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        sx={{ mt: 2 }}
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {contestsType.map((label) => (
          <Tab key={label} label={label} />
        ))}
      </Tabs>
      <Grid
        container
        justifyContent="center"
        spacing={3}
        sx={{
          mt: 3,
          '& > .MuiGrid-item': {
            xs: 12, 
            sm: 6,  
            lg: 4,  
          },
        }}
      >
        {data?.map((item) => (
          <Grid key={item._id} item>
            <TabContents contestItem={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}