import { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  children: ReactNode;
}

export default function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="rounded-2xl shadow-md p-6 bg-white h-full flex flex-col">
      <h4 className="font-semibold mb-2">{title}</h4>
      <div className="text-sm text-gray-700 flex-1">{children}</div>
    </div>
  );
}
