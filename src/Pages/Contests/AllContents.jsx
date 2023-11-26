import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useGetOpenData from "../../Hooks/useGetOpenData";
import TabContents from "../TabContents";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import CardWithHoverEffect from "../Demo/CardWithHoverEffect";

export default function AllContests() {
  const [value, setValue] = React.useState(0);

  const contestsType = [
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

  if (isLoading) return "loading..";
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        minHeight: 100,
        maxWidth: { lg: 6000, sm: 480, p: 8 },
        bgcolor: "background.paper",
        paddingBottom: 4,
      }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        sx={{ mt: 2 }}
        scrollButtons="auto"
        aria-label="scrollable auto tabs example">
        <Tab label="Business" />
        <Tab label="Medical" />
        <Tab label="Writing" />
        <Tab label="Gaming" />
        <Tab label="Tech" />
        <Tab label="Design" />
        <Tab label="Coding" />
        <Tab label="Photography" />
        <Tab label="Music" />
        <Tab label="Data Science" />
      </Tabs>
      {/* <Grid
        container
        gridColumn={4}
        justifyContent="center"
        gap={5}
        sx={{ mt: 3 }}>
        {data?.map((item) => {
          return (
            <Grid key={item._id} item xs={5}>
              <p>
                <TabContents
                  item
                  key={item._id}
                  contestItem={item}></TabContents>
              </p>
            </Grid>
          );
        })}
      </Grid> */}
      
        {data?.map(item => <CardWithHoverEffect key={item._id} contestItem={item}></CardWithHoverEffect> )}
      <div className="text-center">
      <Link className="btn bg-primary text-white mt-8">See add contests</Link>
      </div>
    </Box>
  );
}
