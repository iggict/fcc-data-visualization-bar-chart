# Visualize Data with a Bar Chart

Challenge for the "Data Visualization" module of [FreeCodeCamp.org](https://www.freecodecamp.org/).

---

## User stories

- #**01**: My chart should have a title with a corresponding `id="title"`.
- #**02**: My chart should have a `g` element x-axis with a corresponding `id="x-axis"`.
- #**03**: My chart should have a `g` element y-axis with a corresponding `id="y-axis"`.
- #**04**: Both axes should contain multiple tick labels, each with a corresponding `class="tick"`.
- #**05**: My chart should have a `rect` element for each data point with a corresponding `class="bar"` displaying the data.
- #**06**: Each bar should have the properties `data-date` and `data-gdp` containing `date` and `GDP` values.
- #**07**: The bar elements' `data-date` properties should match the order of the provided data.
- #**08**: The bar elements' `data-gdp` properties should match the order of the provided data.
- #**09**: Each bar element's `height` should accurately represent the data's corresponding `GDP`.
- #**10**: The `data-date` attribute and its corresponding bar element should align with the corresponding value on the `x-axis`.
- #**11**: The `data-gdp` attribute and its corresponding bar element should align with the corresponding value on the `y-axis`.
- #**12**: I can mouse over an area and see a tooltip with a corresponding `id="tooltip"` which displays more information about the area.
- #**13**: My tooltip should have a `data-date` property that corresponds to the `data-date` of the active area.

## JSON file

Here is the dataset you will need to complete this project:

https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json

```json
{
  "errors": {},
  "id": 120140,
  "source_name": "Federal Reserve Economic Data",
  "source_code": "FRED",
  "code": "GDP",
  "name": "Gross Domestic Product, 1 Decimal",
  "urlize_name": "Gross-Domestic-Product-1-Decimal",
  "display_url": "http://research.stlouisfed.org/fred2/data/GDP.txt",
  "description": "Units: Billions of Dollars\nSeasonal Adjustment: Seasonally Adjusted Annual Rate\nNotes: A Guide to the National Income and Product Accounts of the United States (NIPA) - (http://www.bea.gov/national/pdf/nipaguid.pdf)",
  "updated_at": "2015-12-14T20:00:28.561Z",
  "frequency": "quarterly",
  "from_date": "1947-01-01",
  "to_date": "2015-07-01",
  "column_names": ["DATE", "VALUE"],
  "private": false,
  "type": null,
  "premium": false,
  "data": [
    ["1947-01-01", 243.1],
    ["1947-04-01", 246.3],
    ["1947-07-01", 250.1],
    [
      /** ... continue */
    ]
  ]
}
```
