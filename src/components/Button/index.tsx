import React from "react";

import Btn from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ButtonModel } from "./model";

const Button: React.FC<ButtonModel> = ({
  variant,
  onClick,
  children,
  color,
}) => {
  return (
    <Btn
      variant={variant || "contained"}
      onClick={onClick}
      color={color || "primary"}
    >
      <Typography>{children}</Typography>
    </Btn>
  );
};

export default Button;
