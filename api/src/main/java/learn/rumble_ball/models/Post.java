package learn.rumble_ball.models;

import java.time.LocalDate;
import java.util.ArrayList;

public class Post {

    private int id;
    private int type;
    private LocalDate postDate;
    private String title;
    private ArrayList spoils;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getType() {
        return type;
    }

    public void setType(int type) {
        this.type = type;
    }

    public LocalDate getPostDate() {
        return postDate;
    }

    public void setPostDate(LocalDate postDate) {
        this.postDate = postDate;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public ArrayList getSpoils() {
        return spoils;
    }

    public void setSpoils(ArrayList spoils) {
        this.spoils = spoils;
    }
}
