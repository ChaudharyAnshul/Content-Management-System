package edu.neu.csye6200.utility;

import edu.neu.csye6200.models.User;

import java.util.Comparator;

public class StudentComparators {
      public static class StudentIDComparator implements Comparator<User> {
        @Override
        public int compare(User objStudent, User objStudentNew) {
            return objStudent.getId().compareTo(objStudentNew.getId());
        }
    }

    // First name comparator
    public static class FirstNameComparator implements Comparator<User> {
        @Override
        public int compare(User objStudent, User objStudentNew) {
            return objStudent.getFirstName().compareTo(objStudentNew.getFirstName());
        }

    }
        // Last name comparator
    public static class LastNameComparator implements Comparator<User> {
        @Override
        public int compare(User objStudent, User objStudentNew) {
            return objStudent.getLastName().compareTo(objStudentNew.getLastName());
        }
    }

}