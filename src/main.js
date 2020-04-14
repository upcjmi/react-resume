import React, {Suspense} from 'react';

import { Card,Row,Col } from 'antd';
import Resume from './components/resume';
const Main = () => {
  const json={ "old":{"basics": { "name": "John Doe c", "picture": "", "email": "john@gmail.com", "phone": "(912) 555-4321", "summary": "A summary of John Doe...", "location": "ambari", }, "work": [{ "company": "Company", "designation": "", "companyLocation": "","startDate": "2013-01-01", "endDate": "2014-01-01", "summary": "Description...", }], "skills": [{ "name": "Web Development", "level": "4" }], "achievements": { "innerText": "got jmi" },"links": [{"type":"github","url":"https://github.com/asdf" },{ "type":"Stackoverflow","url": "https://stackoverflow.com/asdf" },{ "type":"LinkedIn","url": "https://linkedin.com/asdf" },{ "type":"type","url": "https://asdf.com/asdf" }], "education": [{ "institution": "University", "studyType": "Bachelor",  "year": "2013-01-01", "grade": "4.0", }], "languages": { "language": "English" }, "hobby": { "innerText": "i dont have any" }} }
  return (
    <Resume data={json} editable={true} onSave={(data)=>console.log(data)}/>
  );
};

export default Main;
