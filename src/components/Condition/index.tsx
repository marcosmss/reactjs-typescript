import React from "react";

import { IfModel } from "./model.ts";

const If: React.FC<IfModel> = ({ condition, children }) => {
  return condition ? children : null;
};

export default If;
