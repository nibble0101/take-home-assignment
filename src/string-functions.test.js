import {
  hasWhiteSpace,
  getLines,
  formatParagraph,
  formatText,
} from "./string-functions";

describe("Testing hasWhiteSpace", () => {
  it("expects hasWhiteSpace to be a function", () => {
    expect(typeof hasWhiteSpace === "function").toBe(true);
  });
  it("expects hasWhiteSpace('has white space') to return true", () => {
    expect(hasWhiteSpace("has white space")).toBe(true);
  });
  it("expects hasWhiteSpace('hasNoWhiteSpace') to return false", () => {
    expect(hasWhiteSpace("hasNoWhiteSpace")).toBe(false);
  });
});

describe("Testing getLines", () => {
  it("expects getLines to be a function", () => {
    expect(typeof getLines === "function").toBe(true);
  });
  it("expects getLines to return array of paragraph lines", () => {
    expect(Array.isArray(getLines("aaa bbb ccc", 3))).toBe(true);
  });
  it("expects getLines('aa bbb cccc', 3) to return ['aa', 'bbb', 'cccc']", () => {
    expect(getLines("aa bbb cccc", 3)).toEqual(
      expect.arrayContaining(["aa", "bbb", "cccc"])
    );
  });
  it("expects getLines('This is a paragraph', 7) to return ['This is', 'a', 'paragraph']", () => {
    expect(getLines("This is a paragraph", 7)).toEqual(
      expect.arrayContaining(["This is", "a", "paragraph"])
    );
  });
});

describe("Testing formatParagraph", () => {
  it("expects formatParagraph to be a function", () => {
    expect(typeof formatParagraph === "function").toBe(true);
  });
  it("expects formatParagraph to return a string", () => {
    expect(typeof formatParagraph("oneWordParagraph", 5) == "string").toBe(
      true
    );
  });
  it("expects formatParagraph('oneWordParagraph', 5) to return 'oneWordParagraph'", () => {
    expect(formatParagraph("oneWordParagraph", 5)).toBe("oneWordParagraph");
  });
  it("expects formatParagraph('My paragraph', 30) to return 'My paragraph'", () => {
    expect(formatParagraph("My paragraph", 30)).toBe("My paragraph");
  });
  it("expects formatParagraph('Another paragraph', 7) to return 'Another\nparagraph'", () => {
    expect(formatParagraph("Another paragraph", 7)).toBe("Another\nparagraph");
  });
  it("expects formatParagraph('This is a short one', 2) to return 'This\nis\na\nshort\none'", () => {
    expect(formatParagraph("This is a short one", 2)).toBe(
      "This\nis\na\nshort\none"
    );
  });
});

const expected_1 = `Hello world!
Just       testing.    

A new paragraph    `;

const toBe_1 = `Hello world! Just testing.

A new paragraph`;

const expected_2 = `This is
a badly formatted file. This line is pretty long! It's way more than 80 characters! I feel a line wrap coming on!

This      is a second paragraph with extraneous whitespace.`;

const toBe_2 = `This is a badly formatted file. This line is pretty long! It's way more than 80
characters! I feel a line wrap coming on!

This is a second paragraph with extraneous whitespace.`

const expected_3 = `This line is very loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong`
const toBe_3 = `This line is very
loooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong`

describe("Testing formatText", () => {
  it("expects formatText to be a function", () => {
    expect(typeof formatText === "function").toBe(true);
  });
  it("expects formatText to return a string", () => {
    expect(typeof formatText("One line text", 80) == "string").toBe(true);
  });
  it(`expects formatText(${expected_1}, 80) to return ${toBe_1}`, () => {
    expect(formatText(expected_1, 80)).toBe(toBe_1);
  });
  it(`expects formatText(${expected_2}, 80) to return ${toBe_2}`, () => {
    expect(formatText(expected_2, 80)).toBe(toBe_2);
  });
  it(`expects formatText(${expected_3}, 80) to return ${toBe_3}`, () => {
    expect(formatText(expected_3, 80)).toBe(toBe_3);
  });
});
