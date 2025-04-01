import React from 'react';

interface SectionCardProps {
  title: string;
  description: string;
}

export default function SectionCard({ title, description }: SectionCardProps) {
  return (
    <div className="border rounded-lg shadow-sm p-6 bg-white hover:shadow-md transition">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}
