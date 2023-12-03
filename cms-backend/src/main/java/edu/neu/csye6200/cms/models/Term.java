package edu.neu.csye6200.cms.models;

import edu.neu.csye6200.cms.enums.TermType;
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
    private TermType termType;

    public Term(String termName, TermType termType) {
        this.termName = termName;
        this.termType = termType;
    }
}
