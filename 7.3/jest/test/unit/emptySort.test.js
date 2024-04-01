const sorting = require("../../app");

it("Books names are empty", () => {
    const input = [];
    const expected = [];
    const output = sorting.sortByName(input);
    expect(output).toEqual(expected);
  });