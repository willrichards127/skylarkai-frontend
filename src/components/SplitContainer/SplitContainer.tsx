import Split from "react-split";
import "./split.css";

export const SplitContainer = ({
  sizes = [60, 40],
  leftPanel,
  rightPanel,
}: {
  sizes?: [number, number];
  leftPanel: React.ReactNode;
  rightPanel: React.ReactNode;
}) => {
  return (
    <Split
      className="split"
      sizes={sizes}
      minSize={100}
      expandToMin={false}
      gutterSize={8}
      gutterAlign="center"
      snapOffset={30}
      dragInterval={1}
      direction="horizontal"
      cursor="col-resize"
    >
      {leftPanel}
      {rightPanel}
    </Split>
  );
};
