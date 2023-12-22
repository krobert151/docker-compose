package com.salesianos.triana.VaxConnectApi.user.exception;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;
import org.springframework.web.ErrorResponseException;

import java.net.URI;
import java.time.Instant;

public class PatientHasDependentsException extends ErrorResponseException /*EntityNotFoundException*/  {

    public PatientHasDependentsException() {
        super(HttpStatus.BAD_REQUEST, of("Cant delete patients with dependents, or those who are in charge of a patient"), null);
    }

    public static ProblemDetail of(String message) {
        ProblemDetail problemDetail = ProblemDetail.forStatusAndDetail(HttpStatus.BAD_REQUEST, message);
        problemDetail.setTitle("Patient cant be deleted");
        problemDetail.setType(URI.create("https://api.midominio.com/errors/patient-has-dependents"));
        problemDetail.setProperty("entityType", "Note");
        problemDetail.setProperty("timestamp", Instant.now());
        return problemDetail;
    }

    /*
    public PatientHasDependentsException(){
        super("Cant delete patients with dependents");
    }*/
}
