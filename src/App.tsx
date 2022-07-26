import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/dashboard';
import SurveyForm from './components/survey-form';
import EmailComponent from './components/emailComponent';
import { Route, Routes } from 'react-router-dom';
import { StateContainer } from './components/context/surveyFormContext';
import { CreateQuestion } from './components/questionCreation';
import { QuestionContainer } from './components/context/questionContext';
import HomeComponent from './components/home';
import SurveyReports from './components/surveyReports';
import { HomeContainer } from './components/context/homePageContext';
import { RreportContainer } from './components/context/reportsContext';
import SurveyExitPage from './components/surveyExitPage';
import ResponsesComponent from './components/responsesComponent';

function App() {
  return (
    <div>
      <StateContainer>
        <QuestionContainer>
          <HomeContainer>
            <RreportContainer>
              <Routes>
                {/* <Route index element={<HomeComponent />} /> */}
                <Route path="home" element={<HomeComponent />}>
                  <Route path="sendEmail" element={<EmailComponent />} />
                  <Route path="createQuestion" element={<CreateQuestion />} />
                  <Route path="surveyReports" element={<SurveyReports />} />
                </Route>
                <Route path="responseComponent" element={<ResponsesComponent />} />
                <Route path="customer/:id/survey/:id" element={<Dashboard />} />
                <Route path="survey" element={<SurveyForm />} />
                <Route path="exitPage" element={<SurveyExitPage />} />
              </Routes>
            </RreportContainer>
          </HomeContainer>
        </QuestionContainer>
      </StateContainer>
    </div>
  );
}

export default App;
