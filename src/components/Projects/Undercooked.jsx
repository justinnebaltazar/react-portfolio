import React from "react";
import { getProjectInfo } from "../../utils";

export const Undercooked = () => {
  const project = getProjectInfo("Undercooked");

  return (
    <div>
      <h1>Welcome to the Undercooked Page</h1>
      <h2>`The current project displayed is : ${project}`</h2>
      <p>This is a project about an amazing cooking game!</p>
    </div>
  );
};