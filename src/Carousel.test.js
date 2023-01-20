import React from "react";
import { render, fireEvent, queryByTestId } from "@testing-library/react";
import Carousel from "./Carousel";


it("renders withoug crashing", function(){
  render(<Carousel/>)
})


it("works when you click on the right arrow", function() {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});


it("works when left arrow is clicked", function(){
  const { queryByTestId, queryByAltText } = render(<Carousel />)

  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);
  
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  
  const leftArrow = queryByTestId("left-arrow")
  fireEvent.click(leftArrow)
  
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();

})