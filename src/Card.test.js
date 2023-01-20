import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";


it("renders withoug crashing", function(){
  render(<Card/>)
})


it("matches snapshot", function() {
    const { asFragment } = render(<Card caption="Photo by Richard Pasquarella on Unsplash"/>);
    expect(asFragment()).toMatchSnapshot();
});
  

it("matches snapshot", function() {
    const { asFragment } = render(<Card caption="Photo by Pratik Patel on Unsplash" />);
    expect(asFragment()).toMatchSnapshot();
});


it("matches snapshot", function() {
    const { asFragment } = render(<Card caption="Photo by Josh Post on Unsplash" />);
    expect(asFragment()).toMatchSnapshot();
});