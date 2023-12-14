package edu.neu.csye6200.request;

import edu.neu.csye6200.enums.TermType;
import lombok.Data;

@Data
public class TermRequest {
    public String termName;
    public TermType termType;
}
