"use client";
import React from "react";
import styled from "styled-components";

export const Box = styled.div`
  padding: 5% 2.5%;
  background: black;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    // padding: 70px 30px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  max-width: 1000px;
  padding: 20px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 10px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;

  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

export default function Footer() {
  return (
    <Box>
      <FooterContainer>
        <Row>
          <Column>
            <Heading>Company</Heading>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Sustainability</FooterLink>
            <FooterLink href="#">News</FooterLink>
            <FooterLink href="#">Careers</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
            <FooterLink href="#">Clearance</FooterLink>
          </Column>
          <Column>
            <Heading>Information</Heading>
            <FooterLink href="#">FAQ</FooterLink>
            <FooterLink href="#">Size Information</FooterLink>
            <FooterLink href="#">Care information</FooterLink>
            <FooterLink href="#">Shipping</FooterLink>
            <FooterLink href="#">Term & Conditions</FooterLink>
            <FooterLink href="#">Product Notices</FooterLink>
          </Column>
          <Column>
            <Heading>Support</Heading>
            <FooterLink href="#">Contact Us</FooterLink>
            <FooterLink href="#">Distribution</FooterLink>
            <FooterLink href="#">My Account</FooterLink>
            <FooterLink href="#">Service & Parts</FooterLink>
            <FooterLink href="#">Returns</FooterLink>
          </Column>
        </Row>
        <div className="flex justify-between items-center wrap p-4">
          <p className="text-sm font-bold text-white">2024 Eleiko. All Right Reserved.</p>
        </div>
      </FooterContainer>
    </Box>
  );
}
