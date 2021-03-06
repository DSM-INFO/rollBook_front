import styled from 'styled-components';

// all grade
export const ShowRollPage = styled.main`
  background: linear-gradient(to bottom right, #953dcf, #125caf);
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.article`
  background-color: #fff;
  min-width: 350px;
  min-height: 650px;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 5px;
`;

export const GradeDivisionBtn = styled.nav`
  display: flex;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 25px;
  color: white;
  padding: 10px 60px;
  background: linear-gradient(to right, #953dcf, #125caf);
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 12px 15px;
  margin: auto;
  outline: none;
  cursor: pointer;
  transition: all 0.1s;
  margin-top: 30px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h2`
  color: #c4bbca;
  text-align: center;
  margin: 80px 0px 80px 0px;
`;

//grade
export const ShowStatus = styled.main`
  background-color: #232323;
  min-height: 93vh;
`;

export const Article = styled.article`
  display: grid;
  padding: 30px;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`;

export const Status = styled.section`
  background-color: #ffffff;
`;

export const Inline = styled.div`
  display: flex;
`;
