package edu.neu.csye6200.models;

import edu.neu.csye6200.enums.TermType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "term")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Term {

    @Id
    private ObjectId id;
    @Indexed(unique = true)
    private String termName;
    private String termType;

    public Term(String termName, String termType) {
        this.termName = termName;
        this.termType = termType;
    }
}
