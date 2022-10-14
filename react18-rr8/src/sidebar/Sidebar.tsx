import { RootState } from "../store/store";
import React from "react";
import { useSelector } from "react-redux";

function Sidebar() {
  const selectedStsate = useSelector((state: RootState) => state.mySlice.moep);

  return (
    <>
      <div>selectedStsate: {selectedStsate}</div>
    </>
  );
}

export default Sidebar;
