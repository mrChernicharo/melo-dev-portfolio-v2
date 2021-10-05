import React from 'react';
import { FiMail, FiMapPin } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import { Styles } from './Styles';

export default function AboutLinks(): JSX.Element {
  return (
    <Styles>
      <li>
        <span>
          <strong>
            <FiMapPin size={20} /> Current Location:&nbsp;
          </strong>
          Washington DC
        </span>
      </li>
      <li>
        <a href="https://string7dev@gmail.com" target="_blank">
          <span>
            <strong>
              <FiMail size={20} /> string7dev@gmail&nbsp;
            </strong>
          </span>
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/felipe-chernicharo-27ba911a8/" target="_blank">
          <strong>
            <FaLinkedin size={20} /> Felipe Chernicharo&nbsp;
            <span></span>
          </strong>
        </a>
      </li>
      <li>
        <a href="https://github.com/mrChernicharo" target="_blank">
          <span>
            <strong>
              <FaGithub size={20} /> mrChernicharo&nbsp;
            </strong>
          </span>
        </a>
      </li>
      <li>
        <a
          href="https://stackoverflow.com/users/13111779/felipe-chernicharo"
          target="_blank"
        >
          <span>
            <strong>
              <FaStackOverflow size={20} /> Felipe&nbsp;
            </strong>
          </span>
        </a>
      </li>
    </Styles>
  );
}
