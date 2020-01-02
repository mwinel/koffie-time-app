import styled from "styled-components";

export const ButtonPrimary = styled.button`
  display: inline-block;
  padding: 0.5rem 2rem;
  color: ${props =>
    props.outline ? "var(--highlightColor)" : "var(--whiteColor)"};
  font-size: 0.868rem;
  font-weight: 600;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: ${props =>
    props.outline ? "var(--whiteColor)" : "var(--highlightColor)"};
  border: 2px solid var(--highlightColor);
  border-radius: 3px;
  transition: 0.2s;
  &: hover {
    opacity: 0.7;
  }
  &: focus {
    outline: none;
  }
`;
