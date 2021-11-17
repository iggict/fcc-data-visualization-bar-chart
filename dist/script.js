/** Set size */

const margin = {
  top: 15,
  right: 18,
  bottom: 28,
  left: 52,
};

const parentWidth = 800;
const parentHeight = 500;

const width = parentWidth - margin.left - margin.right;
const height = parentHeight - margin.top - margin.bottom;

/** Create containers */

const container = d3
  .select("body")
  .append("div")
  .attr("class", "main")
  .append("div")
  .attr("class", "container");

const title = container
  .append("h1")
  .attr("id", "title")
  .text("US Gross Domestic Product");

const chartWrapper = container.append("div").attr("class", "chart");

const tooltip = chartWrapper.append("div").attr("id", "tooltip");

const svg = chartWrapper
  .append("svg")
  .attr("viewBox", `0 0 ${parentWidth} ${parentHeight}`)
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

/** D3 datetime functions */

const parseDate = d3.timeParse("%Y-%m-%d"); // returns a date
const formatDate = d3.timeFormat("%Y-%m-%d"); // returns a string
const formatYear = d3.timeFormat("%Y");
const formatMonth = d3.timeFormat("%m");

/** Load data */

const JSONFile =
  "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json";

d3.json(JSONFile)
  .then((data) => {
    /** Extract gdp dataset */

    const dataset = data.data.map(([date, gdp]) => [parseDate(date), gdp]);

    /** Set the bar width */

    const SPACER = 0; // Change this to add padding (could make test#10 fail)
    const barWidth = width / dataset.length;
    const barWidthWithPadding = barWidth - SPACER * barWidth;

    /** Set X and Y scales */

    const xScale = d3
      .scaleTime()
      .range([0, width])
      .domain(d3.extent(dataset, ([date, gdp]) => date));

    const yScale = d3
      .scaleLinear()
      .range([height, 0])
      .domain(d3.extent(dataset, ([date, gdp]) => gdp))
      .nice(); // Get 'nice' round values:

    /** Draw axis */

    const xAxis = svg
      .append("g")
      .attr("id", "x-axis")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(xScale));

    const yAxis = svg
      .append("g")
      .attr("id", "y-axis")
      .call(d3.axisLeft(yScale));

    /** Draw chart */

    svg
      .selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("data-date", ([date, gdp]) => formatDate(date))
      .attr("data-gdp", ([date, gdp]) => gdp)
      .attr("x", (d, i) => barWidth * i)
      .attr("y", ([date, gdp]) => yScale(gdp))
      .attr("width", barWidthWithPadding)
      .attr("height", ([date, gdp]) => height - yScale(gdp))
      .attr("class", "bar")
      .attr("index", (d, i) => i)
      .on("mouseover", (event, [date, gdp]) => {
        tooltip.transition().duration(300).style("opacity", 0.9);
        tooltip
          .style("top", event.y + "px")
          .style("left", event.x + "px")
          .style("transform", "translate(25px, -25px)")
          .attr("data-date", formatDate(date))
          .text(() => {
            const year = formatYear(date);
            const quarter = Math.ceil(formatMonth(date) / 3);
            // Format thousands separator
            const gdpStr = gdp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            return `${year} | Q${quarter} $${gdpStr} Billion`;
          });
      })
      .on("mouseout", () => {
        tooltip.transition().duration(300).style("opacity", 0);
      });
  })
  .catch((err) => console.error(err));
