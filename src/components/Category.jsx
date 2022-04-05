import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import React from "react";
import { NavLink } from "react-router-dom";

const Category = () => {
  return (
    <StyledWrapper>
      <div>
        <FaPizzaSlice />
        <h4>Italian </h4>
      </div>
      <div>
        <FaHamburger />
        <h4>American</h4>
      </div>
      <div>
        <GiNoodles />
        <h4>Thai</h4>
      </div>
      <div>
        <GiChopsticks />
        <h4>Japanese</h4>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 2rem 0rem;
`;

export default Category;
