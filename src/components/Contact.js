import React from 'react'
import { ContactSection, ContactTitle, ContactBody, ContactText } from './styles/Contact.styled';

function Contact() {
  return (
    <ContactSection id='contact'>
      <ContactTitle>Contact Me</ContactTitle>
      <ContactBody>
        <ContactText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at lorem vitae neque faucibus feugiat. Donec aliquet, diam at sollicitudin accumsan, ex ex vehicula diam, sodales vestibulum justo eros eget nisi. Aliquam laoreet venenatis aliquet.</ContactText>
      </ContactBody>
    </ContactSection>
  )
}

export default Contact