import useAuth from "../../../Hooks/useAuth";


const Welcome = () => {
      const {user} = useAuth()
      return (
            <div className="bg-[#a6a6f1]">
                  <h1>Welcome {user} </h1>
            </div>
      );
};

export default Welcome;