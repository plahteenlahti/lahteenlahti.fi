import React, { useState, FormEvent, ChangeEvent } from "react";
import addToMailchimp from "gatsby-plugin-mailchimp";
import styled from "styled-components";
import { rhythm } from "../utils/typography";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const result = await addToMailchimp(email);
      console.log("result", result);

      if (result.result === "error") {
      }
    } catch (error) {
      console.log(error);
      if (error.message === "Timeout") {
        setError(
          'Looks like you are using Brave browser - please click the shield icon and toggle off "Ads and trackers blocked", then re-submit your email.'
        );
      }
    }
  };

  return (
    <Newsletter>
      <H3>Want more articles like this?</H3>
      <P>I also run a semi-weekly newsletter. Try it.</P>
      <form onSubmit={handleSubmit}>
        <Email onChange={handleChange} />
        <Button type="submit" value="Submit" />
      </form>
    </Newsletter>
  );
};

const Newsletter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: ${`${rhythm(0.1)}`};
  margin: ${`${rhythm(3.5)} ${rhythm(0)}`};
  padding: ${`${rhythm(0.5)} ${rhythm(0.5)}`};
  box-shadow: var(--shadow);
  border: var(--shadowBorder);
`;

const H3 = styled.h3`
  color: var(--textPrimary);
`;

const P = styled.p`
  color: var(--textSecondary);
`;

const Email = styled.input.attrs(() => ({
  placeholder: "Your email"
}))`
  background-color: var(--bg);
  border: none;
  color: var(--textLink);
  padding: ${`${rhythm(0.5)}`};
  box-sizing: border-box;
  box-shadow: var(--inset);
`;

const Button = styled.input`
  padding: ${`${rhythm(0.5)}`};
  box-sizing: border-box;
  background-color: var(--bg);
  color: var(--textPrimary);
  border: 1px solid var(--textPrimary);
`;

export default SignUp;
