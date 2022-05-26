package learn.rumble_ball.models;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Objects;

public class Post {

    private int id;
    private int type;
    private LocalDate postDate;
    private String title;
    private String textBody;
    private String imageLink;
    private ArrayList spoils;

    public Post() {
    }

    public Post(int id, int type, LocalDate postDate, String title, String textBody, String imageLink) {
        this.id = id;
        this.type = type;
        this.postDate = postDate;
        this.title = title;
        this.textBody = textBody;
        this.imageLink = imageLink;
    }

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

    public String getTextBody() {
        return textBody;
    }

    public void setTextBody(String textBody) {
        this.textBody = textBody;
    }

    public String getImageLink() {
        return imageLink;
    }

    public void setImageLink(String imageLink) {
        this.imageLink = imageLink;
    }

    public ArrayList getSpoils() {
        return spoils;
    }

    public void setSpoils(ArrayList spoils) {
        this.spoils = spoils;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Post post = (Post) o;
        return id == post.id && type == post.type && postDate.equals(post.postDate) && title.equals(post.title) && Objects.equals(textBody, post.textBody) && Objects.equals(imageLink, post.imageLink);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, type, postDate, title, textBody, imageLink);
    }

    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", type=" + type +
                ", postDate=" + postDate +
                ", title=" + title +
                ", textBody=" + textBody +
                ", imageLink=" + imageLink +
                '}';
    }
}
