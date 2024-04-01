const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });

  it("Books names are the same and should not be sorted in ascending order", () => {
    const input = [
        "Гарри Поттер",
        "Гарри Поттер",
    ];
    const expected = [
        "Гарри Поттер",
        "Гарри Поттер",
    ];
    const output = sorting.sortByName(input);
    expect(output).toEqual(expected);
  });
});
