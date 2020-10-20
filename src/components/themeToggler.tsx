import { ThemeToggler } from "gatsby-plugin-dark-mode";
import React from "react";
import Toggle from "react-toggle";
import "./themeToggler.css";
import styled from "styled-components";

const ToggleTheme = () => {
  return (
    <Container>
      <ThemeToggler>
        {({ theme, toggleTheme }: any) => (
          <label>
            <Toggle
              icons={{
                checked: <Moon />,
                unchecked: <Sun />,
              }}
              defaultChecked={theme === "dark"}
              onChange={(e) => toggleTheme(e.target.checked ? "dark" : "light")}
            />
          </label>
        )}
      </ThemeToggler>
    </Container>
  );
};

export default ToggleTheme;

const Container = styled.div`
  position: relative;
  label {
    display: block;
    height: 0px;
  }
`;

const Moon = () => (
  <svg version="1.1" viewBox="0 0 24 24">
    <g>
      <path
        d="M 17.235,15.75c-5.386-0.001-9.751-4.368-9.75-9.754c0-0.964,0.143-1.923,0.425-2.845 c-4.888,2.253-7.024,8.042-4.771,12.931s8.042,7.024,12.931,4.771c2.522-1.163,4.429-3.346,5.241-6.002 C20.033,15.443,18.643,15.75,17.235,15.75z "
        stroke="white"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 11.985,3.75h4.5 "
        stroke="white"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 14.235,1.5V6 "
        stroke="white"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 18.735,8.25h3 "
        stroke="white"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 20.235,6.75v3"
        stroke="white"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

const Sun = () => (
  <svg version="1.1" viewBox="0 0 24 24">
    <g transform="matrix(1,0,0,1,0,0)">
      <path
        d="M 12,5.25c3.728,0,6.75,3.022,6.75,6.75s-3.022,6.75-6.75,6.75S5.25,15.728,5.25,12S8.272,5.25,12,5.25z "
        stroke="white"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 12,2.25v-1.5 "
        stroke="white"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 18.894,5.106l1.061-1.061 "
        stroke="white"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 21.75,12h1.5 "
        stroke="white"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 18.894,18.894l1.061,1.061 "
        stroke="white"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 12,21.75v1.5 "
        stroke="white"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 5.106,18.894l-1.061,1.061 "
        stroke="white"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 2.25,12h-1.5 "
        stroke="white"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M 5.106,5.106L4.045,4.045"
        stroke="white"
        fill="none"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);
