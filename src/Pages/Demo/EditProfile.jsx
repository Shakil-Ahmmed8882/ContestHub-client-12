import { useState, useEffect } from "react";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const IMAGE_HOSTING_KEY = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const IMAGE_HOSTING_API = `https://api.imgbb.com/1/upload?key=${IMAGE_HOSTING_KEY}`;

const EditProfile = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    photoUrl: "", // Store image link in state
    message: "",
  });

  const [profiePhoto, setProfilePhoto] = useState("");
  const { updateUserProfile } = useAuth();
  const goTo = useNavigate();

  const handleChooseImage = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append("image", file);

        const res = await fetch(IMAGE_HOSTING_API, {
          method: "POST",
          body: formData,
        });
        console.log(res);

        if (res.ok) {
          const data = await res.json();
          setProfilePhoto(data.data.display_url);
        } else {
          console.error("Failed to upload image");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const { name } = formData;

      await updateUserProfile(name, profiePhoto);
      goTo("/dashboard/profile");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  // Log the photoUrl when it changes
  useEffect(() => {
    console.log(formData.photoUrl);
  }, [formData.photoUrl]);

  return (
    <div>
      <div className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8">
        <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
          Edit your profile
        </h2>
        <p className="mb-5 leading-relaxed text-gray-600">
          If you had any issues updating profile info please let us know
        </p>
        <div className="mb-4">
          <label htmlFor="name" className="text-sm leading-7 text-gray-600">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="photo" className="text-sm leading-7 text-gray-600">
            Upload Photo
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            accept="image/*"
            onChange={handleChooseImage}
            className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>
        <button
          className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none"
          onClick={handleSubmit}>
          Send
        </button>
        <p className="mt-3 text-xs text-gray-500">
          Feel free to connect with us on social media platforms.
        </p>
      </div>
    </div>
  );
};

export default EditProfile;
