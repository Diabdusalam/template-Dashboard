import React, { useState } from "react";
import Timeline from "react-calendar-timeline";
import "./Timeline.css";

interface Item {
  id: number;
  group: number;
  title: string;
  start_time: number;
  end_time: number;
  progress: number;
}

interface Group {
  id: number;
  title: string;
}

const TimelineComponent: React.FC = () => {
  const items: Item[] = [
    {
      id: 1,
      group: 1,
      title: "UX Research",
      start_time: 0,
      end_time: 3,
      progress: 40,
    },
    {
      id: 2,
      group: 2,
      title: "Profile",
      start_time: 3,
      end_time: 5,
      progress: 48,
    },
    {
      id: 3,
      group: 3,
      title: "Menu",
      start_time: 6,
      end_time: 9,
      progress: 54,
    },
    {
      id: 4,
      group: 4,
      title: "Login",
      start_time: 5,
      end_time: 7,
      progress: 48,
    },
    {
      id: 5,
      group: 5,
      title: "Services",
      start_time: 8,
      end_time: 10,
      progress: 54,
    },
    {
      id: 6,
      group: 6,
      title: "Homepage",
      start_time: 9,
      end_time: 12,
      progress: 48,
    },
  ];

  const groups: Group[] = [
    { id: 1, title: "Design Phase" },
    { id: 2, title: "Development" },
    { id: 3, title: "UI/UX" },
    { id: 4, title: "Backend" },
    { id: 5, title: "Frontend" },
    { id: 6, title: "Testing" },
  ];

  const [selected, setSelected] = useState<number[]>([]);

  const handleItemClick = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Menentukan tanggal mulai dan berakhir
  const startDate = new Date("2025-07-01T00:00:00").getTime();
  const endDate = new Date("2025-07-31T23:59:59").getTime();

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-900 text-white">
      <Timeline
        groups={groups}
        items={items}
        itemRenderer={({ item }) => (
          <div
            className={`relative ${
              selected.includes(item.id) ? "bg-blue-600" : "bg-green-600"
            } p-4 rounded-md cursor-pointer`}
            onClick={() => handleItemClick(item.id)}
          >
            <span className="absolute top-1 left-1 text-sm font-semibold text-white">
              {item.title}
            </span>
            <div
              className="absolute bottom-0 left-0 right-0 bg-black h-1"
              style={{
                width: `${item.progress}%`,
              }}
            />
            <span className="absolute top-0 right-1 text-xs">
              {item.progress}%
            </span>
          </div>
        )}
        defaultTimeStart={startDate}
        defaultTimeEnd={endDate}
        sidebarWidth={250}
        lineHeight={60}
      />
    </div>
  );
};

export default TimelineComponent;
