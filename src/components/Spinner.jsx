import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
const override = {
  hieght: "100%",
  width: "100%",
  position: "absolute",
  top: "50%",
  left: "0",
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
};

export const Spinner = ({ loading }) => {
  return (
    <BeatLoader
      color="#5f8db2"
      size={20}
      loading={loading}
      cssOverride={override}
    />
  );
};
