import React from "react";

const Time = () => {
  const [date, setDate] = React.useState(new Date());

  const refreshClock = () => setDate(new Date());

  React.useEffect(() => {
    setInterval(refreshClock, 1000);
  }, []);
  return (
    <div className="text-cyan-400 text-center flex flex-col justify-center mt-4">
      <p>
        {date.toLocaleDateString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </p>
    </div>
  );
};

export default Time;
