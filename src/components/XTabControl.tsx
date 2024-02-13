import React, { memo, useState, useCallback } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import * as colors from "@mui/material/colors";

interface TabPanelProps {
	children?: React.ReactNode;
	dir?: string;
	index: number;
	value: number;
}

function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div role='tabpanel' hidden={value !== index} {...other}>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
}

export const XTabControl = memo(
	({ tabs }: { tabs: { label: string; content: React.ReactNode }[] }) => {
		const [value, setValue] = useState(0);

		const onChange = useCallback(
			(_: React.SyntheticEvent, newValue: number) => {
				setValue(newValue);
			},
			[]
		);

		return (
			<Box>
				<Tabs
					value={value}
					onChange={onChange}
					indicatorColor='primary'
					textColor='inherit'
					sx={{
						"&.MuiTabs-root": {
							borderBottom: "1px solid",
							borderColor: colors.grey[800],
						},
					}}
				>
					{tabs.map((tab, index) => (
						<Tab key={tab.label} label={tab.label} value={index} />
					))}
				</Tabs>
				{tabs.map((tab, index) => (
					<TabPanel key={`${tab.label}-panel`} value={value} index={index}>
						{tab.content}
					</TabPanel>
				))}
			</Box>
		);
	}
);

XTabControl.displayName = "XTabControl";
