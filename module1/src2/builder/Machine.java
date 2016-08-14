package builder;

/**
 * Created by sala on 16/7/19.
 */
public class Machine {
    private String name;
    private String portType;


    public Machine() {
    }

    public Machine(String name) {
        this.name = name;
    }


    public void run(){
        System.out.println("The machine " + name + " is running!");
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPortType() {
        return portType;
    }

    public void setPortType(String portType) {
        this.portType = portType;
    }
}
