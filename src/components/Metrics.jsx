export const Metrics = () => {
  const metricsArr = [
    {
      id: 1,
      icon: "bi bi-bounding-box",
      number: 5,
      text: "Total Projects",
      bgColor: "white",
      textColor: "black",
      iconColor: "#00d3cd",
    },
    {
      id: 2,
      icon: "bi bi-check2-circle",
      number: 1,
      text: "Completed",
      bgColor: "white",
      textColor: "black",
      iconColor: "#00d3cd",
    },
    {
      id: 3,
      icon: "bi bi-arrow-repeat",
      number: 3,
      text: "Ongoing",
      bgColor: "white",
      textColor: "black",
      iconColor: "#00d3cd",
    },
    {
      id: 4,
      icon: "bi bi-exclamation-triangle",
      number: 1,
      text: "Delayed",
      bgColor: "#ff768b",
      textColor: "white",
      iconColor: "white",
    },
    {
      id: 5,
      icon: "bi bi-people",
      number: 5,
      text: "Employees",
      bgColor: "white",
      textColor: "black",
      iconColor: "#00d3cd",
    },
  ];
  return (
    <ul className="flex gap-6 mx-10 my-7">
      {metricsArr.map((obj) => (
        <li
        key={obj.id}
          className={`text-${obj.textColor} bg-${obj.bgColor} w-35 p-3 rounded`}
          style={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            backgroundColor: obj.bgColor,
          }}
        >
          <span
            className={`${obj.icon} text-[${obj.iconColor}] font-extrabold text-2xl`}
          ></span>
          <h1 className="text-center text-2xl font-bold">{obj.number}</h1>
          <p className="text-center">{obj.text}</p>
        </li>
      ))}
    </ul>
  );
};
