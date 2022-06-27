import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/dashboard';
import SurveyForm from './components/survey-form';
import EmailComponent from './components/emailComponent';
import { Route, Routes } from 'react-router-dom';
import { StateContainer } from './components/context/surveyFormContext';
import { CreateQuestion } from './components/questionCreation';

function App() {
  return (
    <div>
      <StateContainer>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="survey" element={<SurveyForm />} />
          <Route path="sendEmail" element={<EmailComponent />} />
          <Route path="createQuestion" element={<CreateQuestion />} />
        </Routes>
      </StateContainer>
    </div>
  );
}

export default App;
