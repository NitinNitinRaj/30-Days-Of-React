export default function BarChart({ data }) {
  const totalPop = data.find(
    ({ country, population }) => country === "World"
  ).population;
  console.log(totalPop);
  const renderedRow = data.map(({ country, population }) => {
    return (
      <div key={country} className="bar-row">
        <div className="bar-country">{country}</div>
        <div className="bar-chart">
          <div
            style={{
              borderRadius: "5%",
              background: "orange",
              width: `${(population / totalPop) * 100}%`,
            }}
          ></div>
        </div>
        <div className="bar-population">{population}</div>
      </div>
    );
  });
  return <div className="main-bar-container">{renderedRow}</div>;
}
