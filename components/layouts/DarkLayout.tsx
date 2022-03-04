import { FC } from 'react';


const DarkLayout: FC = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      {children}
    </div>
  );
};
export default DarkLayout;
