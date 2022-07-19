import { FC } from "react";
import { PropsLayout } from "./MainLayout";

const style = {
  backgroundColor: "rgba(0,0,0,0.3)",
  borderRadius: "5px",
  padding: "10px",
};

export const DarkLayout: FC<PropsLayout> = ({children}) => {
  return (
    <div style={style}>
      <h3>Dark-Layout</h3>
      <div>{children}</div>
    </div>
  );
};
