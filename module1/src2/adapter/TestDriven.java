package adapter;

import org.junit.Test;

/**
 * Created by sala on 16/7/23.
 */
public class TestDriven {


    public void test(){
        Target target = new Adapter();
        target.request();

    }

    @Test
    public void testProxy()
    {
        Target target = new AdapteeProxy(new Adaptee());
        target.request();
    }
}
