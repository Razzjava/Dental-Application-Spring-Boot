package com.raz.dentalapplication.Dentist;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

import java.util.Objects;

@Entity
public class Dentist {

    @Id
    @GeneratedValue
    private Integer id;
    private String companyName;
    private String address;
    private String city;
    private Integer numOfSpaces;

    public Dentist(Integer id, String companyName, String address, String city, Integer numOfSpaces) {
        this.id = id;
        this.companyName = companyName;
        this.address = address;
        this.city = city;
        this.numOfSpaces = numOfSpaces;
    }

    public Dentist(){}

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Dentist dentist = (Dentist) o;
        return Objects.equals(id, dentist.id) && Objects.equals(companyName, dentist.companyName) && Objects.equals(address, dentist.address) && Objects.equals(city, dentist.city) && Objects.equals(numOfSpaces, dentist.numOfSpaces);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, companyName, address, city, numOfSpaces);
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Integer getNumOfSpaces() {
        return numOfSpaces;
    }

    public void setNumOfSpaces(Integer numOfSpaces) {
        this.numOfSpaces = numOfSpaces;
    }
}
