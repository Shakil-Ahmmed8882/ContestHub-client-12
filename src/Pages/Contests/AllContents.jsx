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
      position: "relative",
      
      minHeight: 100,
      maxWidth: { lg: 1100, p: 8 },
      marginInline: 'auto',
      bgcolor: "background",
      paddingBottom: 4,
    }}
  >
  
   <Tabs
  value={value}
  onChange={handleChange}
  variant="scrollable"
  sx={{
    width:'98%',
    mx:'auto',

    mt: 2,
    backgroundColor: '#fff',
    borderRadius: '4px',
    '& .Mui-selected': {
      color: 'red !important', // No need for !important here
      fontWeight: 'normal',
    },
    '& .MuiTab-root': {
      fontWeight: 'bold', // Default style for all tabs
    },
    '& .Mui-selected .MuiTab-root': {
      fontWeight: 'normal', // Active tab style
    },
  }}
  scrollButtons="auto"
  aria-label="scrollable auto tabs example"
>
  {contestsType.map((label, index) => (
    <Tab
      key={label}
      sx={{
        color: index === value ? 'red' : 'black',
      }}
      label={label}
    />
  ))}
</Tabs>
      {/* <Grid
        container
        justifyContent="center"
        spacing={3}
        sx={{
          gap:2,
          mt: 3,
          '& > .MuiGrid-item': {
            xs: 12, 
            sm: 6,  
            lg: 4,  
          },
        }}
      >
        {data?.map((item,idx) => (
          <Grid key={item._id} item>
            <TabContents idx={idx} contestItem={item} />
          </Grid>
        ))}
      </Grid> */}


      <div className="responsive_grid grid px-7 lg:px-2  gap-11 mt-8">
        {data?.map((item,idx) => <TabContents key={idx} idx={idx} contestItem={item} />)}


      </div>
    </Box>
  );
}