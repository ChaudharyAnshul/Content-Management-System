import { createContext, useState } from "react";
import { retrieveDataFromLocalStorage } from '../util/cache'
const CourseContext = createContext({});

export const CoursePovider = ({children}) => {

  const [courseDisplay,setCourseDisplay] = useState("HOME");

  return (
    <CourseContext.Provider value = {{courseDisplay,setCourseDisplay}}>
      {children}
    </CourseContext.Provider>
  )
}

export default CourseContext;