import net.sf.cglib.proxy.Enhancer;
import net.sf.cglib.proxy.MethodInterceptor;
import net.sf.cglib.proxy.MethodProxy;

import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by sala on 16/7/4.
 */
public class RuntimeConstantPoolOOM {
    public static void main(String[] args) {
        Enhancer enhancer = new Enhancer();
        enhancer.setSuperclass(EnhancerDemo.class);
        enhancer.setCallback(new MethodInterceptor() {
            @Override
            public Object intercept(Object o, Method method, Object[] objects, MethodProxy methodProxy) throws Throwable {
                System.out.println("Before invoke " + method);
                Object result = methodProxy.invokeSuper(o, objects);
                System.out.println("After invoke" + method);
                return result;
            }
        });

        EnhancerDemo demo = (EnhancerDemo) enhancer.create();
        demo.test();


    }

    static class EnhancerDemo{
        public void test() {
            System.out.println("EnhancerDemo test()");
        }
    }
}
