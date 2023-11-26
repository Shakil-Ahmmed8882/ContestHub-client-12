import * as React from "react";
import { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import useSecureApi from "../../../Hooks/useSecureApi";
import useAuth from "../../../Hooks/useAuth";
import Spinner from "../../../Shared/Spinner";
import { ToasMessage } from "../../../Utils/ToastMessage";
import { useNavigate } from "react-router-dom";

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

//  state management
      const [contestData, setContestData] = useState({
    contestName: "",
    image: "",
    description: "",
    prizeMoney: "",
    taskSubmissionInstructions: "",
    tags: [],
    deadline: "",
    status: "pending",
    winnerID: [],
    type: "Medical",
    participants: []
  });
  const {user,loading} = useAuth()    
  const goTo = useNavigate()
  //Secure api instance
  const xiosSecure = useSecureApi();
  
  if(loading) return <Spinner></Spinner>



  const handleChange = (event) => {
    const { name, value } = event.target;
    setContestData({
      ...contestData,
      [name]: value,
    });
  };

  const handleTagsChange = (event) => {
    setContestData({
      ...contestData,
      tags: event.target.value,
    });
  };
  const handleDeadlineChange = (event) => {
    setContestData({
      ...contestData,
      deadline: event.target.value,
    });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    // sending the contest data to the database
    const res = await xiosSecure.post(`creatContest?email=${user?.email}`,contestData)
    if(res.data.insertedId){
      ToasMessage('Added')
      goTo('/dashboard/createContest')
    }

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
                value={contestData.contestName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="image"
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Image *"
                value={contestData.image}
                onChange={handleChange}
              />
            </div>
            <input
              type="number"
              name="prizeMoney"
              className="mt-7 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="prizeMoney *"
              value={contestData.prizeMoney}
              onChange={handleChange}
            />
            <div className="my-6 flex gap-4">
              <FormControl sx={{ m: 1 }} className="w-1/2">
                <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={contestData.tags}
                  onChange={handleTagsChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}>
                  {tags.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={contestData.tags.indexOf(name) > -1} />
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
                  value={contestData.deadline}
                  onChange={handleDeadlineChange}
                />
                {contestData.deadline && (
                  <p>Selected Deadline: {contestData.deadline}</p>
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
                value={contestData.taskSubmissionInstructions}
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
                value={contestData.description}
                onChange={handleChange}
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="cursor-pointer rounded-lg bg-primary px-8 py-5 text-sm font-semibold text-white">
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
