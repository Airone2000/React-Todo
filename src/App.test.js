import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import renderer from "react-test-renderer";

function Link({ href, children }) {
  return <a href={href}>{children}</a>;
}

it("renders without crashing", () => {
  const snapshot = renderer
    .create(<Link href="index.html">Mon bouton</Link>)
    .toJSON();
  console.log(snapshot);
  expect(snapshot).toMatchSnapshot();
});

it("renders once again but with google as href", () => {
  const snapshot = renderer
    .create(<Link href="google.us" children="GOOGLE US" />)
    .toJSON();
  expect(snapshot).toMatchSnapshot();
});

it("will test inlineSnapshot", () => {
  const tree = renderer
    .create(<Link href="google.us" children="GOOGLE USS" />)
    .toJSON();

  expect(tree).toMatchInlineSnapshot(`
<a
  href="google.us"
>
  GOOGLE USS
</a>
`);
});


it('will test object', () => {
  const person = {
    createdAt: new Date(),
    id: Math.floor(Math.random() * 20),
    name: 'Florence'
  };

  expect(person).toMatchSnapshot({
    createdAt: expect.any(Date),
    id: expect.any(Number),
    name: expect.stringMatching('Florence')
  });
});
