package edu.neu.csye6200.utility;

import edu.neu.csye6200.models.Student;
import edu.neu.csye6200.models.User;
import org.springframework.web.multipart.MultipartFile;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class MultipartUtil {

    public static String parseCsvToString(MultipartFile file) throws IOException {
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(file.getInputStream()))) {
            return reader.lines().collect(Collectors.joining("\n"));
        }
    }

    public static List<? extends User> createUserList(String input) throws Exception {
        List<User> userList = new ArrayList<>();

        // Split the input into lines
        String[] lines = input.split("\n");

        for (String line : lines) {
            // Split each line into comma-separated values
            String[] values = line.split(",");

            // Trim whitespaces from each value
            for (int i = 0; i < values.length; i++) {
                values[i] = values[i].trim();
            }

            // Create a new Student object and add it to the list
            if (values.length == 4) {
                String firstName = values[0];
                String lastName = values[1];
                String email = values[2];
                String password = values[3];

                // TODO: Use Factory to create Student Object
                User student = new Student(firstName, lastName, email, password);
                userList.add(student);
            } else {
                System.out.println("Skipping invalid input line: " + line);
            }
        }
        return userList;
    }

    public static List<String> parseEmailsToStudentList(MultipartFile file) throws IOException {
        try (BufferedReader reader = new BufferedReader(new InputStreamReader(file.getInputStream()))) {
            String fileString = reader.lines().collect(Collectors.joining("\n"));
            // Split the input into lines
            String[] students = fileString.split("\n");

            // add student emails to a list
            return new ArrayList<>(Arrays.asList(students));
        }
    }
}
