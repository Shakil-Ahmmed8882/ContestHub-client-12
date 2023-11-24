import useGetOpenData from "../Hooks/useGetOpenData";


const AllContents = () => {
      const {data,isLoading} = useGetOpenData('contests','contests')


      if(isLoading) return 'loading..'
      
      console.log(data)
      return (
            <div>
                  all contents
            </div>
      );
};

export default AllContents;