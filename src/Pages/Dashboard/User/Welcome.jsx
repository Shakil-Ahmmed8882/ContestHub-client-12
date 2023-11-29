import useAuth from "../../../Hooks/useAuth";


const Welcome = () => {
      const {user} = useAuth()
      return (
            <div className="bg-[#e9e9f3]">
                  <h1>Welcome {user} </h1>
            </div>
      );
};

export default Welcome;