import React from 'react';

interface ReportCardProps {
  title: string;
  content: React.ReactNode;
}

const ReportCard: React.FC<ReportCardProps> = ({ title, content }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-bold">{title}</h2>
      {content}
    </div>
  );
};

export default ReportCard;
