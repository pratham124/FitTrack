import styled from 'styled-components';

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--dark-mode-bg-secondary-color);
  padding: 3rem 2rem 4rem;
  .form-title {
    margin-bottom: 2rem;
    font-size: xx-large;
    font-weight: 700;
  }
  .info-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
  }
  .info {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
  }
  .quote-container {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.5;
    flex-direction: column;
    row-gap: 2rem;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 1rem;
    grid-template-columns: 1fr 1fr; 
    column-gap: 1rem;
  }
  .profile-form-center {
    display: grid;
    row-gap: 1rem;
  }
  .form-btn {
    align-self: end;
    margin-top: 1rem;
    width: 50%;
    place-items: center;
  } 
  .delete-btn {
  cursor: pointer;
  color: var(--white);
  background: var(--red-dark);
  border: transparent;
  border-radius: var(--border-radius);
  letter-spacing: var(--letter-spacing);
  padding: 0.375rem 0.75rem;
  box-shadow: var(--shadow-1);
  transition: var(--transition);
  text-transform: capitalize;
  display: inline-block;
}
.delete-btn:hover {
  background: var(--red-light);
  color: var(--red-dark);
  box-shadow: var(--shadow-3);
}
  .btn-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
    margin-top: 2rem;
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .form-btn {
      width: 25%;
    }
    .profile-form-center {
      grid-template-columns: 4fr 6fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
    }
    .profile-form-center {
      grid-template-columns: 4fr 6fr;
    }
  }
`;

export default Wrapper;
