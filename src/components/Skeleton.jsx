const Skeleton = ({ height = "200px", width = "100%" }) => {
    return (
      <div
        className="animate-pulse bg-gray-300 rounded-md"
        style={{ height, width }}
      />
    );
  };
  
  export default Skeleton;
  