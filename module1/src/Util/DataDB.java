package Util;

import model.Article;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by sala on 16/8/25.
 */
public class DataDB {
    private static DataDB instance = new DataDB();
    private static List<Article> articles = new ArrayList<Article>();
    private DataDB(){
    }

    public static DataDB getInstance(){
        return instance;
    }

    public void saveArticle(Article article){
        articles.add(article);
    }

    public List<Article> queryArticle(){
        return articles;
    }
}
