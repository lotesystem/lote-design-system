import { css } from 'styled-components';

const typography = () => {
  return css`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-bottom: 0.5rem;
      font-weight: 500;
      line-height: 1.2;
    }
    
    h1 {
      font-size: 2.5rem;
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.75rem;
    }

    h4 {
      font-size: 1.5rem;
    }

    h5 {
      font-size: 1.25rem;
    }
   
    h6 {
      font-size: 1rem;
    }

    hr {
      margin-top: 1rem;
      margin-bottom: 1rem;
      border: 0;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    small {
      font-size: 80%;
      font-weight: 400;
    }

    mark {
      padding: 0.2em;
      background-color: #e6faff;
    }
  `;
};

export default typography;
