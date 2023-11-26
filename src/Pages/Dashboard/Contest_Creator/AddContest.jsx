import * as React from "react";
import { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const tags = [
  "Business Contest",
  "Medical Contest",
  "Article Writing",
  "Gaming",
];

const AddContest = () => {
  const [formData, setFormData] = useState({
    contestName: "",
    image: "",
    description: "",
    prizeMoney: "",
    taskSubmissionInstructions: "",
    tags: [],
    deadline: "",
    status: "pending",
    creatorID: "id",
    winnerID: [],
    type: "Medical",
    participants: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTagsChange = (event) => {
    setFormData({
      ...formData,
      tags: event.target.value,
    });
  };

  const handleDeadlineChange = (event) => {
    setFormData({
      ...formData,
      deadline: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission with formData object
    console.log("Form Data:", formData);
    // Add logic for submitting the form data to the backend
  };

  return (
    <div>
      <div className="mt-10 max-w-3xl mx-auto border-2 border-primary rounded-lg">
        <div className="mt-7 text-center text-4xl font-bold">Add a contest</div>
        <div className="p-8">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <input
                type="Name"
                name="contestName"
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Contest Name *"
                value={formData.contestName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="image"
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Image *"
                value={formData.image}
                onChange={handleChange}
              />
            </div>
            <input
              type="number"
              name="prizeMoney"
              className="mt-7 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="prizeMoney *"
              value={formData.prizeMoney}
              onChange={handleChange}
            />
            <div className="my-6 flex gap-4">
              <FormControl sx={{ m: 1 }} className="w-1/2">
                <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={formData.tags}
                  onChange={handleTagsChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {tags.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={formData.tags.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <div className="w-1/2">
                <label htmlFor="contestDeadline">Contest Deadline:</label>
                <input
                  type="date"
                  id="contestDeadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleDeadlineChange}
                />
                {formData.deadline && (
                  <p>Selected Deadline: {formData.deadline}</p>
                )}
              </div>
            </div>
            <div className="">
              <textarea
                name="taskSubmissionInstructions"
                id="text"
                cols={30}
                rows={10}
                className="mb-10 h-28 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-black"
                placeholder="Instructions"
                value={formData.taskSubmissionInstructions}
                onChange={handleChange}
              />
            </div>
            <div className="">
              <textarea
                name="description"
                id="text"
                cols={30}
                rows={10}
                className="mb-10 h-28 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-black"
                placeholder="Contest description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="cursor-pointer rounded-lg bg-primary px-8 py-5 text-sm font-semibold text-white"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContest; 