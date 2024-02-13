import { ApexOptions } from "apexcharts";

export const chartTypeConfig: Record<string, Partial<ApexOptions>> = {	
	bar: {
		chart: {
			type: "bar",
		},
		plotOptions: {
			bar: {
				horizontal: false,
				borderRadius: 2,
			},
		},
	},
	line: {
		chart: {
			type: "line",
			dropShadow: {
				enabled: false,
				color: "#000",
				top: 18,
				left: 7,
				blur: 10,
				opacity: 0.2,
			},
		},
		stroke: {
			curve: "smooth",
			width: 4,
		},
		plotOptions: {
			bar: {
				horizontal: false,
				borderRadius: 4,
			},
		},
	},
	area: {
		chart: {
			type: "area",
		},
	},
	pie: {
		chart: {
			type: "pie",
		},
	},
	donut: {
		chart: {
			type: "donut",
		},
	},
	// "combined-area-bar": {
	// 	chart: {
	// 		type: "area",
	// 	},
	// },
	// "semi-circle": {
	// 	chart: {
	// 		type: "radialBar",
	// 	},
	// 	plotOptions: {
	// 		radialBar: {
	// 			startAngle: -90,
	// 			endAngle: 90,
	// 			track: {
	// 				background: "#292943",
	// 			},
	// 		},
	// 	},
	// },
	// circle: {
	// 	chart: {
	// 		type: "radialBar",
	// 	},
	// 	plotOptions: {
	// 		radialBar: {
	// 			startAngle: -135,
	// 			endAngle: 225,
	// 			track: {
	// 				background: "#292943",
	// 			},
	// 		},
	// 	},
	// },
	// "basic-donut": {
	// 	chart: {
	// 		type: "donut",
	// 	},
	// },
	// "semi-donut": {
	// 	chart: {
	// 		type: "donut",
	// 	},
	// 	plotOptions: {
	// 		pie: {
	// 			startAngle: -90,
	// 			endAngle: 90,
	// 			offsetY: 10,
	// 		},
	// 	},
	// },
	// "basic-pie": {
	// 	chart: {
	// 		type: "pie",
	// 	},
	// },
};
