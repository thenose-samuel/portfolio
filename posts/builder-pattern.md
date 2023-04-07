---

title: 'The Builder Pattern for Constructors'

metaTitle: 'The Builder OO Design Pattern'

metaDesc: 'A brief discussion about the builder pattern'

socialImage: https://images.unsplash.com/photo-1679598018476-3987536a45fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80

date: '2023-04-1'

tags:

- 'blog'

- 'markdown'

---

## Problem
  

Initializing an object of a class with a handful of optional parameters becomes difficult as it requires the construction of constructors with all the possible combinations of parameters. This is an anti-pattern called **Telescoping Constructor pattern**. Another alternative is the **Java Beans pattern** *[Effective Java 3rd Edition]*  which specifies calling a parameterless constructor first and then setting the values of the parameters by calling mutator methods. But a disadvantage of this technique is it results in objects that are in an inconsistent state in between calls.

  

## How does the Builder pattern solve these issues?

> "Instead of making the desired object directly, the client calls a
> constructor (or static factory) with all of the required parameters
> and gets a builder object. Then the client calls setter-like methods
> on the builder object to set each optional parameter of interest.
> Finally, the client calls a parameterless build method to generate the
> object, which is typically immutable. The builder is typically a
> static member class of the class it builds. " *[Effective Java 3rd
> Edition]*

  



  

### How does this look like in code?

  

    public class Computer {  
        //required arguments  
	    private int storage;  
	    private int cpuCores;  
        private int memory;  
      
        //optional arguments - initialized to default values  
        private boolean internetAccess = true;  
        private boolean multipleUsers = false;  
      
	    Computer(Builder b){  
            storage = b.storage;  
		    cpuCores = b.cpuCores;  
		    memory = b.memory;  
		    internetAccess = b.internetAccess;  
		    multipleUsers = b.multipleUsers;  
	    }  
      
        public static class Builder{  
            private int storage;  
		    private int cpuCores;  
		    private int memory;  
      
		    //optional arguments - initialized to default values  
		    private boolean internetAccess = true;  
		    private boolean multipleUsers = false;  
		    Builder(int s, int c, int m){  
                storage = s;  
			    cpuCores = c;  
			    memory = m;  
		    }  
            public Builder setInternetAccess(boolean v){  
                internetAccess = v;  
			     return this;  
			}  
            public Builder setMultipleUsers(boolean v){  
                multipleUsers = v;  
			    return this;  
			}  
            public Computer build(){  
                return new Computer(this);  
		    }  
        }   
    } 

  
  

Objects of `Computer` class can be instantiated using the following snippet

    Computer c = new Computer.Builder(40, 4, 2).setInternetAccess(false).build()

  


  

As we can see, the object creation code is easy to write and easy to read. There is no danger of having an inconsistent object. The builder pattern incorporates the concept of Java Beans pattern in that mutators methods are used to change member variables but it has the safety of the telescoping constructor pattern as no inconsistent `Computer` object is created.
  

#### Does the introduction of named parameters eliminate the need for the Builder pattern?
***
This is a question that came up in my mind as I was studying this design pattern. I'll provide an update soon with what I find.
