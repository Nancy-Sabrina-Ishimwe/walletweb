type HeaderProps = {
    name: string; // Define a prop for the user's name
  };
  
  const Header = ({ name }: HeaderProps) => {
    return (
      <header className="flex justify-between items-center p-4 bg-gray-100 shadow">
        <h1 className="text-lg font-bold">Good Morning, {name}</h1>
      </header>
    );
  };
  
  export default Header;
  