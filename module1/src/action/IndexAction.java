package action;

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

    public String index(){
        Article a1 = new Article("sala", "abc");
        Article a2 = new Article("andy", "def");
        datas.add(a1);
        datas.add(a2);
        return SUCCESS;
    }

    public List<Article> getDatas() {
        return datas;
    }

    public void setDatas(List<Article> datas) {
        this.datas = datas;
    }
}
