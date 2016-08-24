package model;

/**
 * Created by sala on 16/8/24.
 */
public class Article {
    private String author;
    private String text;

    public Article() {
    }


    public Article(String author, String text) {
        this.author = author;
        this.text = text;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }
}
