import { Container } from './App.styled';
// import Section from './Components/Section/Section';
import FeedbackOptions from './Components/FeedbackOptions/FeedbackOptions';
import Statistics from './Components/Statistics/Statistics';

function App() {
  return (
    <Container>
      <FeedbackOptions></FeedbackOptions>
      <Statistics></Statistics>
    </Container>
  );
}

export default App;
