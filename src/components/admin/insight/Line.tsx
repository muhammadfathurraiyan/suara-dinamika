"use client";
import { ResponsiveLine } from "@nivo/line";

const data = [
  {
    id: "japan",
    color: "hsl(276, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 48,
      },
      {
        x: "helicopter",
        y: 251,
      },
      {
        x: "boat",
        y: 273,
      },
      {
        x: "train",
        y: 18,
      },
      {
        x: "subway",
        y: 181,
      },
      {
        x: "bus",
        y: 53,
      },
      {
        x: "car",
        y: 75,
      },
      {
        x: "moto",
        y: 141,
      },
      {
        x: "bicycle",
        y: 273,
      },
      {
        x: "horse",
        y: 244,
      },
      {
        x: "skateboard",
        y: 122,
      },
      {
        x: "others",
        y: 144,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(55, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 99,
      },
      {
        x: "helicopter",
        y: 275,
      },
      {
        x: "boat",
        y: 223,
      },
      {
        x: "train",
        y: 39,
      },
      {
        x: "subway",
        y: 187,
      },
      {
        x: "bus",
        y: 219,
      },
      {
        x: "car",
        y: 211,
      },
      {
        x: "moto",
        y: 176,
      },
      {
        x: "bicycle",
        y: 98,
      },
      {
        x: "horse",
        y: 73,
      },
      {
        x: "skateboard",
        y: 82,
      },
      {
        x: "others",
        y: 63,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(111, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 31,
      },
      {
        x: "helicopter",
        y: 204,
      },
      {
        x: "boat",
        y: 81,
      },
      {
        x: "train",
        y: 279,
      },
      {
        x: "subway",
        y: 247,
      },
      {
        x: "bus",
        y: 214,
      },
      {
        x: "car",
        y: 235,
      },
      {
        x: "moto",
        y: 160,
      },
      {
        x: "bicycle",
        y: 285,
      },
      {
        x: "horse",
        y: 256,
      },
      {
        x: "skateboard",
        y: 223,
      },
      {
        x: "others",
        y: 72,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(130, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 50,
      },
      {
        x: "helicopter",
        y: 146,
      },
      {
        x: "boat",
        y: 232,
      },
      {
        x: "train",
        y: 119,
      },
      {
        x: "subway",
        y: 264,
      },
      {
        x: "bus",
        y: 109,
      },
      {
        x: "car",
        y: 209,
      },
      {
        x: "moto",
        y: 49,
      },
      {
        x: "bicycle",
        y: 60,
      },
      {
        x: "horse",
        y: 79,
      },
      {
        x: "skateboard",
        y: 138,
      },
      {
        x: "others",
        y: 154,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(287, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 224,
      },
      {
        x: "helicopter",
        y: 274,
      },
      {
        x: "boat",
        y: 33,
      },
      {
        x: "train",
        y: 94,
      },
      {
        x: "subway",
        y: 293,
      },
      {
        x: "bus",
        y: 214,
      },
      {
        x: "car",
        y: 208,
      },
      {
        x: "moto",
        y: 182,
      },
      {
        x: "bicycle",
        y: 48,
      },
      {
        x: "horse",
        y: 195,
      },
      {
        x: "skateboard",
        y: 254,
      },
      {
        x: "others",
        y: 28,
      },
    ],
  },
];

export default function Line() {
  return (
    <div className="h-[40vh] border border-neutral-900/30">
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}
