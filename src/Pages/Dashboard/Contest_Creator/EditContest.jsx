import * as React from "react";
import { useState, useEffect } from "react";
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
import { useNavigate, useParams } from "react-router-dom";
import usePublicApi from "../../../Hooks/usePublicApi";
import useGetSecureData from "../../../Hooks/useGetSecureData";

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
  "Business",
  "Medical",
  "Writing",
  "Gaming",
  "Tech",
  "Coding",
  "FPS",
  "Gaming",
  "Shootout",
  "Battle Royale",
  "Sniper",
];

// imgbb credentials
const IMAGE_HOSTING_KEY = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const IMAGE_HOSTING_API = `https://api.imgbb.com/1/upload?key=${IMAGE_HOSTING_KEY}`;

const EditContest = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetSecureData(`/singleContest/${id}`);
  
  const [defaultContestData, setDefaultContestData] = useState({
    contestName: data?.contestName || "",
    image: null,
    description: data?.description || "",
    prizeMoney: data?.prizeMoney || "",
    taskSubmissionInstructions: data?.taskSubmissionInstructions || "",
    tags: data?.tags || [],
    deadline: data?.deadline || "",
    status: data?.status || "pending",
    winnerID: data?.winnerID || [],
    type: data?.type || "Medical",
    participants: data?.participants || [],
  });

  const [editedContestData, setEditedContestData] = useState({ ...defaultContestData });

  const { user, loading } = useAuth();
  const goTo = useNavigate();
  const xiosPublic = usePublicApi();
  const xiosSecure = useSecureApi();
  
  useEffect(() => {
    if (data) {
      setEditedContestData({
        contestName: data.contestName || "",
        image: data.image || null,
        description: data.description || "",
        prizeMoney: data.prizeMoney || "",
        taskSubmissionInstructions: data.taskSubmissionInstructions || "",
        tags: data.tags || [],
        deadline: data.deadline || "",
        status: data.status || "pending",
        winnerID: [],
        type: data.type || "Medical",
        participants: data.participants || [],
      });
    }
  }, [data]);

  if (loading || isLoading) return <Spinner />;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedContestData({
      ...editedContestData,
      [name]: value,
    });
  };

  const handleChooseImage = async (event) => {
    // ... (existing code for handling image upload)
  };

  const handleTagsChange = (event) => {
    setEditedContestData({
      ...editedContestData,
      tags: event.target.value,
    });
  };

  const handleDeadlineChange = (event) => {
    setEditedContestData({
      ...editedContestData,
      deadline: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Compiling all updated values into an object
    const updatedData = { ...editedContestData };
    const res = await xiosPublic.put(`/editContest/${id}`,updatedData)
    console.log(res.data)
  };

  return (
    <div>
      <div className="mt-10 max-w-3xl mx-auto border-2 border-primary rounded-lg">
        <div className="mt-7 text-center text-4xl font-bold">Edit Contest</div>
        <div className="p-8">
          <form onSubmit={handleSubmit}>
            <div className="flex gap-4">
              <input
                type="Name"
                name="contestName"
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                defaultValue={editedContestData.contestName}
                value={editedContestData.contestName}
                required
                onChange={handleChange}
              />

              <input
                name="image"
                onChange={handleChooseImage}
                type="file"
                className="file-input mt-1 block w-1/2 h-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm file-input-bordered   max-w-xs"
              />
            </div>
            <input
              defaultValue={editedContestData.prizeMoney}
              value={editedContestData.prizeMoney}
              type="number"
              name="prizeMoney"
              className="mt-7 block w-full rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
              placeholder="prizeMoney *"
              required
              onChange={handleChange}
            />
            <div className="my-6 flex gap-4">
              <FormControl sx={{ m: 1 }} className="w-1/2">
                <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  defaultChecked={editedContestData.tags}
                  value={editedContestData.tags}
                  required
                  onChange={handleTagsChange}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}>
                  {tags?.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={editedContestData.tags.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <div className="w-1/2">
                <label htmlFor="contestDeadline">Contest Deadline:</label>
               

 <input
                  defaultValue={editedContestData.deadline}
                  value={editedContestData.deadline}
                  type="date"
                  id="contestDeadline"
                  name="deadline"
                  required
                  onChange={handleDeadlineChange}
                />
                {editedContestData.deadline && (
                  <p>Selected Deadline: {editedContestData.deadline}</p>
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
                defaultValue={editedContestData.taskSubmissionInstructions}
                value={editedContestData.taskSubmissionInstructions}
                onChange={handleChange}
                required
              />
            </div>
            <div className="">
              <textarea
                name="description"
                id="text"
                required
                cols={30}
                rows={10}
                className="mb-10 h-28 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-black"
                placeholder="Contest description"
                defaultValue={editedContestData.description}
                value={editedContestData.description}
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

export default EditContest;