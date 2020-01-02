import styled from "styled-components";

export const ButtonSecondary = styled.button`
  display: inline-block;
  padding: 0.6rem 3rem !important;
  color: ${props =>
    props.outline ? "var(--highlightColor)" : "var(--whiteColor)"};
  font-size: 1rem;
  font-weight: 600 !important;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: ${props =>
    props.outline ? "var(--whiteColor)" : "var(--highlightColor)"};
  border: 2px solid var(--highlightColor);
  border-radius: 3px !important;
  transition: 0.2s;
  text-transform: uppercase;
  margin-top: 0.1rem;
  width: 100%;
  &: hover {
    opacity: 0.9;
  }
  &: focus {
    outline: none !important;
  }
`;
