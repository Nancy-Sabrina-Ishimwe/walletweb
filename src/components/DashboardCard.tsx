type DashboardCardProps = {
    title: string;
    balance: number;
    icon: React.ReactNode;
  };
  
  const DashboardCard = ({ title, balance, icon }: DashboardCardProps) => {
    return (
      <div className="bg-white p-4 shadow rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-bold">{title}</h2>
            <p className="text-xl font-semibold">${balance.toFixed(2)}</p>
          </div>
          <div className="icon text-4xl">{icon}</div>
        </div>
      </div>
    );
  };
  
  export default DashboardCard;
  