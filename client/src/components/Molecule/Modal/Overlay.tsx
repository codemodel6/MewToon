import styled from "styled-components";

export const Overlay = styled.div<{ $modalState: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ $modalState }) => ($modalState ? "block" : "none")};
  z-index: 999;
`;
