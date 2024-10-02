import styled from 'styled-components';

const Wrapper = styled.section`
  nav {
    /* width: var(--fluid-width); */
    /* max-width: var(--max-width); */
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -8rem;
  }
  h1 {
    font-size: xxx-large;
    span {
      color: var(--primary-500);
    }
    margin-bottom: 0.6rem;
  }
  h6{
    margin-bottom: 1rem;
    font-size: medium;
    font-weight: 500;

  }
  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35em;
  }
  .register-link {
    margin-right: 1rem;
  }
  .main-img {
    display: none;
  }
  .btn {
    padding: 0.75rem 1rem;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;
export default Wrapper;
