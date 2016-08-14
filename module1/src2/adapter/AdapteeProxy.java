package adapter;

/**
 * Created by sala on 16/7/23.
 */
public class AdapteeProxy implements  Target{
    private Adaptee adaptee;

    public AdapteeProxy(Adaptee adaptee)
    {
        this.adaptee = adaptee;
    }

    @Override
    public void request() {
        adaptee.specificRequest();
    }
}
