import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import useGetOpenData from "../../Hooks/useGetOpenData";
import TabContents from "../TabContents";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import Spinner from "../Demo/Spinner";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function AllContests() {
  const [value, setValue] = React.useState(0);
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(5); // Default page size

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

  const contestType = value === 0 ? '' : contestsType[value];
  const { data, isLoading } = useGetOpenData(
    `contests?type=${contestType}&page=${page}&pageSize=${pageSize}`,
    contestType
  );

  if (isLoading) return <Spinner></Spinner>;

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setPage(1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handlePageSizeChange = (event) => {
    const newSize = parseInt(event.target.value, 10);
    setPageSize(newSize);
    setPage(1);
  };

  const handleDropdownChange = (event) => {
    setPageSize(parseInt(event.target.value, 10));
    setPage(1);
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
        // ... (rest of your Tab styles)
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

      <div className="responsive_grid grid px-7 lg:px-2 gap-11 mt-8">
        {data?.slice((page - 1) * pageSize, page * pageSize).map((item, idx) => (
          <TabContents key={idx} idx={idx} contestItem={item} />
        ))}
      </div>
      <div className="flex justify-center">

      <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
        <Pagination
          count={Math.ceil(data.length / pageSize)}
          color="primary"
          onChange={handlePageChange}
          page={page}
        />


        <FormControl sx={{ minWidth: 120,}}>
          <InputLabel id="page-size-select-label">Items Per Page</InputLabel>
          <Select
            labelId="page-size-select-label"
            id="page-size-select"
            value={pageSize}
            label="Items Per Page"
            onChange={handleDropdownChange}
          >
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
          </Select>
        </FormControl>
      </Stack>
</div>

    </Box>
  );
}