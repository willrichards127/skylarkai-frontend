import { memo, useMemo } from "react";
import { Box, Typography } from "@mui/material";
import { XSidebar } from "../../../../components/XSidebar";
import { CollapsiblePanel } from "../../../../components/CollapsiblePanel";
import DndListItem from "./DndListItem";
import { ITemplateNode } from "../../../../shared/models/interfaces";

const CategoryPanel = memo(
	({ categoryDict }: { categoryDict: Record<string, ITemplateNode[]> }) => {
		const categoryList = useMemo(
			() => Object.entries(categoryDict),
			[categoryDict]
		);
		return (
			<XSidebar width={340}>
				{categoryList.map(([label, items]) => (
					<Box key={label} mb={1}>
						<CollapsiblePanel
							label={
								<Typography
									variant='body1'
									fontWeight='bold'
									pl={2}
									sx={{ textTransform: "uppercase" }}
								>
									{label}
								</Typography>
							}
						>
							{items.map((item) => (
								<DndListItem key={item.template_node_id} item={item} />
							))}
						</CollapsiblePanel>
					</Box>
				))}
			</XSidebar>
		);
	}
);

CategoryPanel.displayName = "CategoryPanel";

export default CategoryPanel;
