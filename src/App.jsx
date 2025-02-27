import GeneralSection from "./components/GeneralSection";
import AddressSection from "./components/AddressSection";
import EducationSection from "./components/EducationSection";
import JobSection from "./components/JobSection";
import AboutYouSection from "./components/AboutYouSection";
import "./styles/App.css";

// foreword: this project's code was gleaned from another Project Odin user. i have been analyzing and rewriting the code myself in order to learn the ins and outs of React. 
// i have left comments in various places throughout the files to explain my thought and learning process into how React works. i hope this is okay.

// creates three seperate forms using the imported General, Education, and JobSection components. this is a very clean and satisfying way of programming, and i will be implementing this in all future projects (if i don't feel lazy)
function App() {
  return (
    <>
      <h1>CV Application</h1>
      <h2>If you have multiple responses to one question, answer in a comma-seperated list. For dates, simply put the amount of time you've spent in total across all positions.</h2>
      <main>
        <GeneralSection />
        <AddressSection />
        <EducationSection />
        <JobSection />
        <AboutYouSection />
      </main>
    </>
  );
}

export default App;