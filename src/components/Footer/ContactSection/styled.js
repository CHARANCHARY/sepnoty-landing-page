import styled from "styled-components";

export const ContactItems = styled.li`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-top: 21px;
  }
`;

export const ContactType = styled.p`
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`;

/* @media screen and (max-width: 576px) {
  .contact-type {
    font-size: 8px;
  }

  .contact-items {
    padding-top: 7px;
  }
} */
