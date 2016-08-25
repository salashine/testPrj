package action;

import Util.DataDB;
import com.opensymphony.xwork2.ActionSupport;
import model.Article;
import org.apache.commons.lang3.StringUtils;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by sala on 16/8/1.
 */
public class IndexAction extends ActionSupport {

    private static final long serialVersionUID = -5045228600867403791L;


    private List<Article> datas = new ArrayList<Article>();

    private Article article;

    public String query(){
        datas = DataDB.getInstance().queryArticle();
        return SUCCESS;
    }
    public String save(){
        DataDB.getInstance().saveArticle(article);
        return SUCCESS;
    }

    public List<Article> getDatas() {
        return datas;
    }

    public void setDatas(List<Article> datas) {
        this.datas = datas;
    }

    public Article getArticle() {
        return article;
    }

    public void setArticle(Article article) {
        this.article = article;
    }
}
