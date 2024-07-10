import { XYCoord } from "dnd-core";
import { useDragLayer } from "react-dnd";

const getItemStyle = (currentOffset: XYCoord | null) => {
  if (!currentOffset) {
    return {
      display: "none",
    };
  }

  const { x, y } = currentOffset;

  const transform = `translate(${x + 28}px, ${y + 28}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
};

export const DragLayer = () => {
  const { itemType, isDragging, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));
  // rendering item while draggin
  // const renderItem = (type: any, item: IReportItem) => {
  const renderItem = (type: any) => {
    switch (type) {
      case "ITEM":
        return <></>;
      case "CONTAINER":
        return <></>;
      default:
        return null;
    }
  };
  if (!isDragging) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        pointerEvents: "none",
        zIndex: 100,
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <div style={getItemStyle(currentOffset)}>
        <div style={{ opacity: isDragging ? 0.8 : 1 }}>
          {renderItem(itemType)}
        </div>
      </div>
    </div>
  );
};
