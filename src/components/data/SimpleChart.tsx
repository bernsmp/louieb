"use client";

import React from "react";

// Named color type
type NamedColor = "blue" | "emerald" | "amber" | "rose" | "purple";

// Color prop accepts both named colors and hex codes
type ColorProp = NamedColor | string;

interface SimpleChartProps {
  color?: ColorProp;
  data?: number[];
  // Add other chart props as needed
  [key: string]: any;
}

// Color mapping for named colors
const namedColorMap: Record<NamedColor, string> = {
  blue: "#3b82f6", // blue-500
  emerald: "#10b981", // emerald-500
  amber: "#f59e0b", // amber-500
  rose: "#f43f5e", // rose-500
  purple: "#a855f7", // purple-500
};

// Helper function to get the actual color value
function getColorValue(color?: ColorProp): string {
  if (!color) {
    return namedColorMap.blue; // Default fallback
  }

  // If it's a hex code (starts with #), use it directly
  if (color.startsWith("#")) {
    return color;
  }

  // If it's a named color, use the mapping
  if (color in namedColorMap) {
    return namedColorMap[color as NamedColor];
  }

  // Fallback to blue if invalid named color
  return namedColorMap.blue;
}

export function SimpleChart({ color, data, ...props }: SimpleChartProps) {
  const colorValue = getColorValue(color);

  // Basic chart implementation - adjust based on your actual chart library
  return (
    <div
      style={{
        color: colorValue,
        // Add other styling as needed
      }}
      {...props}
    >
      {/* Chart content here */}
      {/* This is a placeholder - replace with actual chart implementation */}
      {data && (
        <div>
          {data.map((value, index) => (
            <div
              key={index}
              style={{
                backgroundColor: colorValue,
                height: `${value}%`,
                width: "20px",
                margin: "2px",
                display: "inline-block",
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
