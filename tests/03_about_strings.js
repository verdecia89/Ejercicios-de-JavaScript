describe("About Strings (topics/03_about_strings.js)", () => {
  it("delimiters", function () {
    const singleQuotedString = "apple";
    const doubleQuotedString = "apple";
    expect(true).toBe(
      singleQuotedString === doubleQuotedString,
      "are the two strings equal?"
    );
  });

  it("concatenation", function () {
    const fruit = "apple";
    const dish = "pie";
    expect("apple pie").toBe(
      fruit + " " + dish,
      'what is the value of fruit + " " + dish?'
    );
  });

  it("character Type", function () {
    const characterType = typeof "Amory".charAt(1); // typeof will be explained in about reflection
    expect("string").toBe(characterType, "Javascript has no character type");
  });

  it("escape character", function () {
    const stringWithAnEscapedCharacter = "\u0041pple";
    expect("Apple").toBe(
      stringWithAnEscapedCharacter,
      "what  is the value of stringWithAnEscapedCharacter?"
    );
  });

  it("string.length", function () {
    const fruit = "apple";
    expect(5).toBe(fruit.length, "what is the value of fruit.length?");
  });

  it("slice", function () {
    const fruit = "apple pie";
    expect("apple").toEqual(
      fruit.slice(0, 5),
      "what is the value of fruit.slice(0,5)?"
    );
  });
});
